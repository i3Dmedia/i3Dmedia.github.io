# back-quotes and %x{} indicate OS command
puts `ls`.split
puts "************"
puts "exit status of \`ls\`.split was ",$?
puts "************"
puts "NOTE:%x is command expansion"
puts %x{grep -n split *.*}.split
puts "************"
puts "exit status of grep was ",$?

puts "************"
class Test
	def name=(n)
	  @name=n
		print("test#name is ",@name)
  end
end	
t=Test.new.name="jack"
puts "\n************"


puts "enter filename to read:\n"
f=File.open(name=gets.chomp)
puts "reading file #{name}:","\n\n"

begin
  while line=f.readline
	  puts line
  end		
  rescue EOFError
    puts "\neof\n"
end	
puts "************"
