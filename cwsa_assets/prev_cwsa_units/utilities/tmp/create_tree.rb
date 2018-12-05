# create_tree.rb


require 'find'


def create_tree(directories, parent=".")
  directories.each_pair do |dir, files|
  path = File.join(parent, dir)
  Dir.mkdir path unless File.exists? path
  files.each do |filename, contents|
      if filename.respond_to? :each_pair # It's a subdirectory
        create_tree filename, path
      else # It's a file
        open(File.join(path, filename), 'w') { |f| f << contents || "" }
      end
    end
  end
end   

#Now we can present the directory structure 
#as a data structure and create it with a single method call:
create_tree 'root' =>
  [ 'An empty file',
  ['A file with contents', 'Contents of file'],
    { 'Subdirectory' => ['Empty file in subdirectory',
    ['File in subdirectory', 'Contents of file'] ] },
    { 'Empty subdirectory' => [] }
  ]


puts "read the the new directory structure and files:"
puts "expect the following:\n"
puts "root"
puts "root/Empty subdirectory"
puts "root/Subdirectory"
puts "root/Subdirectory/File in subdirectory"
puts "root/Subdirectory/Empty file in subdirectory"
puts "root/A file with contents"
puts "root/An empty file"
puts "----------------------------------"
Find.find('root') { |f| puts f }
File.read('root/Subdirectory/File in subdirectory')
# => "Contents of file"