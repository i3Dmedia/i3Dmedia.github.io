# udf2json.rb
# Batch translate all udfs associated with a particular template

require 'json'


class Udf2json

  def initialize
    #directories
    @units_path = File.expand_path("../.")
    @json_path = @units_path.clone
    @json_path.concat("/json")
    @directions_path = @units_path.clone
    @directions_path.concat("/directions")

    #if necessary create json directories
    @ta = []
    Dir.foreach(@directions_path) do |idir|
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
      @dpath= @directions_path + '/' + t
      puts "\nbatch processing udf-files in #{@upath}"
    
      #outer object
      @d = {}
      @d['scope'] = t + 'Scope';           #[1] scope             
      @d['directions'] = []                #[2] directions
    
      #read the directions-files one by one from the path directory
      Dir.foreach(@dpath) do |ifile|
        puts "ifile = #{ifile}"
        next if !ifile.match(/.dsl$/)
        dpath = @dpath + '/' + ifile
    
        #build tmp object @o with object entries of form:
        #{'o': 'oname', 'm': 'mname', 'a': 'aname' [, 't': ms-delay]}
        open(dpath).each do |l|
          if(l.length > 0) then
            a = l.strip.split(' ');
            next if a.length() < 3
            puts "\na = " + a.to_s 
          end
          if(!a[3]) then
            a[3] = "0"
          end
          @o = {}
          @o['o'] = a[0]
          @o['m'] = a[1]
          @o['a'] = a[2]
          @o['t'] = a[3]
          puts "@o = #{@o}"
          @d['directions'] << @o 
        end
    

        #convert @unit to JSON - @json
        @json = @d.to_json
        varname = ifile.gsub('-', '_');
        varname.slice!(".dsl")
        @prefix = " var " + varname + " = "
        puts "\n@prefix = #{@prefix}"
        @json = @prefix + @json
    
        #report
        puts "\n@unit.to_json:"
        puts @json
        
        #write @json to ofile
        puts "\nifile = " + ifile
        ofile = ifile.sub('.dsl', '.json') 
        puts "ofile = " + ofile
        opath = @json_path+  '/' + t  
        opath = opath + '/' + ofile
        puts "\nopath = #{opath}"
        File.open(opath, "w") do |ofile|
          ofile.puts @json
        end
      end
    }
  end
end #class

# if run file by itself (>ruby udf2json.rb):
if __FILE__==$0 then
  puts "\nrunning #{__FILE__}"
  (Udf2json.new).process
end  

