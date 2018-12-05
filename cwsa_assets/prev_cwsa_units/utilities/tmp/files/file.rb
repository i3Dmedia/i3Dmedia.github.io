#file reading
#see Ruby Cookbook Page 202



#get filename to read - cut last char='\n'
puts "enter file name to read:\n"
STDOUT.flush
gets.chomp!

#Open the file with Kernel#open
#pass in a code block that does the actual reading.
#To read the entire file into a single string,
#use IO#read:
puts "--------------------------------"
puts "read entire file into a string:"
f=open($_)
s=f.read
puts "s=#{s}"

#To read the file as an array of lines,
#use IO#readlines.
puts "--------------------------------"
puts "read one line at a time:"
lines=open($_) { |f| f.readlines }
puts "lines.length=#{lines.length}"
lines.each{|l| puts "l is #{l}"}

#To iterate over each line in the file, use IO#each.
#This technique loads only one line into memory
#at a time.
puts "--------------------------------"
puts "again, one line at a time:"
open($_).each { |x| p x }

