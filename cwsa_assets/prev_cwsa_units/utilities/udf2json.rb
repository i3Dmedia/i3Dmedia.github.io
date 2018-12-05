# udf2json.rb
# Batch translate all udfs associated with a particular template

require 'json'


class Udf2json

  def initialize
    #directories
    @units_path = File.expand_path("../.")
    @udfs_path = @units_path.clone
    @udfs_path.concat("/udfs")
    @json_path = @units_path.clone
    @json_path.concat("/json")
    @directions_path = @units_path.clone
    @directions_path.concat("/directions")
    @resources_path = @units_path.clone
    @resources_path.concat("/resources")

    #if necessary create json directories
    @ta = []
    Dir.foreach(@udfs_path) do |idir|
      #puts "idir = #{idir}"
      next if File.directory? idir
      @ta << idir
    end
    puts "@ta = #{@ta}"
    @ta.each{ |t|
      tpath = @json_path + '/' + t
      #puts "tpath = #{tpath}"
      Dir.mkdir tpath unless File.exists? tpath
      File.chmod(0777, tpath)
    }
  end 

  def process
    #batch process - @path is current directory to batch-read
    @ta.each{ |t|
      @upath= @udfs_path + '/' + t
      puts "\nbatch processing udf-files in #{@upath}"
    
      #outer object
      @unit = {}
      @unit['scope'] = t + 'Scope';           #[1] scope             
      @unit['lessons'] = []                   #[2] lessons
      @unit['callbacks'] = []                 #[3] callbacks
      @unit['directions'] = []                #[4] directions
      @unit['resources'] = []                 #[5] resources
    
      #read the udfs one by one from the path directory
      Dir.foreach(@upath) do |ifile|
        puts "ifile = #{ifile}"
        next if !ifile.match(/.udf$/)
        ipath = @upath + '/' + ifile
        @keys = []
        @lines = []
        @o = {}
    
        #build tmp object @0 with letter-keys @keys and 
        #for each key a value of an array of arrays.
        #the element arrays are split lines l with the key 
        #(1st letter) removed.
        #exp: 'w;bat;hat:correct' -> ['bat', 'hat:correct']
        #Also keep a list of unique keys @keys
        lines = open(ipath).each do |l|
          if(l.length > 0) then
            l[0] = l[0].strip
            next if l[0] == '<'
            next if l[0] == '#'
            next if l[0] ==  nil
            a = l.strip.split(';');
            key = a.delete_at(0)
            @o[key] = @o[key] || []
            @o[key] << a
            @keys << key
          end
        end
        @o.each_pair{ |k,v| 
          puts "\n@o: #{k.inspect} maps to #{v}"
        }
        @keys = @keys.uniq
        puts "\n@keys = #{@keys}"
    
        #arrange horizontal @o-arrays into vertical arrays of lesson objects
        @lessons = []   
        @o[@keys[0]].each_index{ |index|
          @lessons[index] = {}
          @o.each_key{ |k| 
            next if index > 0 && k == 'd'
            @lessons[index][k] = @o[k][index] unless @o[k][index].nil?
            if index == 0 then
              @lessons[0]['v'] = []
              @o['d'].each{ |d|
                @lessons[0]['v'] << d[0]
              }
              @lessons[0].delete('d')
            end
          }
        }
    
        #ingest arrays with elements adorned by 'el:correct'
        #replace by unadorned elements in standard order 
        #[correct_el, incorrect_el(s), ...]
        #These can be shuffled at runtime to vary placement
        @lessons.each{ |l|                   # lesson
          l.each_pair{ |k,v|                 # exp: w,[] (words)
            index = 0
            v.each{ |e|                      # [words].each
              if e.match(/:correct/) then
                el = e.sub(':correct', '')   # el is short-form correct word, f exp.
                v.delete(e)                  # remove long-form correct word from v
                v.unshift(el)                # prepend short-form correct word
              end
            }
          }
        }
    
        #report
        puts "\nlessons:"
        @lessons.each_index{ |i|
          puts "lesson #{i}:"
          @lessons[i].each_pair{ |k,v|
            puts "#{k} = #{v}"
          }
        }      
    
        #lessons
        @unit['lessons'] = @lessons;         #[2] lessons
    
        #callbacks                           #[3] callbacks
        puts "\n@unit['callbacks']:"
        cb = {}
        @lessons.each_index do |i|
          puts "i = #{i}"
          cb['o'] = 'audio'
          cb['m'] = 'play'
          cb['a'] = @lessons[i]['v']
          puts "cb['a'] = #{cb['a']}"
          @unit['callbacks'][i] = cb.clone
        end
    
        #@TODO                               #[4] directions - presently by hand
    
    
        #convert @unit to JSON - @json
        @json = @unit.to_json
        varname = ifile.gsub('-', '_');
        varname.slice!(".udf")
        @prefix = " var " + varname + " = "
        puts "@prefix = #{@prefix}"
        @json = @prefix + @json
    
        #report
        puts "\n@unit.to_json:"
        puts @json
        
        #write @json to ofile
        ofile = ifile.sub('.udf', '.json') 
        opath = @json_path+  '/' + t  
        opath = opath + '/' + ofile
        puts "\nopath = #{opath}"
        File.open(opath, "w") do |ofile|
          ofile.puts @json
        end
      end
    }
  end
end

# if run file by itself (>ruby udf2json.rb):
if __FILE__==$0 then
  puts "\nrunning #{__FILE__}"
  (Udf2json.new).process
end  

