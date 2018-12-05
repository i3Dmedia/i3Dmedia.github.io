#dir walking
#see Ruby Cookbook Page 215


require 'find'  #module Find for traversal of dirs


#The simplest solution is to load all the files and directories 
#get directory root to walk - cut last char='\n'
puts "enter directory roots to traverse separated by commas:\n"
STDOUT.flush
roots=gets.chomp!.split(',')
puts "roots=#{roots}"

#Open the dir with Kernel#open
#pass in a code block that does the actual reading. 
#To read the entire file into a single string, 
#use IO#read:
puts "--------------------------------"
puts "expect the following:\n"
puts "Directory: root"
puts "Directory: root/Empty subdirectory"
puts "Directory: root/Subdirectory"
puts "File: root/Subdirectory/File in subdirectory"
puts "File: root/Subdirectory/Empty file in subdirectory"
puts "File: root/A file with contents"
puts "File: root/An empty file"
puts "Directory: root2"
puts "Directory: root2/Empty subdirectory"
puts "Directory: root2/Subdirectory"
puts "File: root2/Subdirectory/File in subdirectory"
puts "File: root2/Subdirectory/Empty file in subdirectory"
puts "File: root2/A file with contents"
puts "File: root2/An empty file"
puts "----------------------------------"
roots.each{|root|
  Find.find(root){ |f| type=case
      when File.file?(f):"File:"
      when File.directory?(f):"Directory:"
      else "?"
    end       
    puts "#{type} #{f}"
  }   
}  