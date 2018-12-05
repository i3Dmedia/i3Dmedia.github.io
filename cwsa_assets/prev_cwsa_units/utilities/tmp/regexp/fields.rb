def show_regexp(a,re)
  if a =~ re
	  "#{$`}<<#{$&}>>#{$'}"
	else
	  "no match"
	end
end	

puts "\n\n"
puts "match c or a, thus match is <<c>>"
puts "\"cat\"=~/(c|a)/ yields position " 
puts "cat"=~/(c|a)/
puts show_regexp('cat',/(c|a)/)


puts "\n\n"
puts "match t or z, thus match is <<t>>"
puts "\"cat\"=~/(t|z)/ yields position "
puts "cat"=~/(t|z)/
puts show_regexp('cat',/(t|z)/)


puts "\n\n"
puts "match c or a followed by t or z "
puts "note:c is not followed by t or z, but a is followed by t"
puts "thus the match is <<at>>"
puts "\"cat\"=~/(c|a)(t|z)/ yields position " 
puts "cat"=~/(c|a)(t|z)/
puts show_regexp('cat',/(c|a)(t|z)/)


puts "\n\n"
puts "$0=#{$0}"
puts "$1=#{$1}"
puts "$2=#{$2}"
puts "$3=#{$3}"
puts "$4=#{$4}"


puts "\n\n"
line="(batch foo.clp)"
puts "#{line} =~ /(batch [a-zA-Z0-9]*.clp)/"
puts show_regexp(line,/(batch [a-zA-Z0-9]*.clp)/)
if line =~ /(batch [a-zA-Z0-9]*.clp)/ 
	puts "CLIPS Command #{line}"
else
	puts "should not be in here!"
	if line =~ /[A-Za-z0-9]*.rb$/ 
		puts "ruby script: #{line}"
	  #File.open(line,"r") do |file|
		#	 while s=file.gets					
		#	 eval s
	else
		puts "nonsense!"
	end
end	


puts "\n\n"
line="hello.rb"
if line =~ /(batch [a-zA-Z0-9]*.clp)/
	puts "should not be in here!"		
	puts "CLIPS Command #{line}"
else
  puts "#{line} =~ /[a-zA-Z0-9]*.rb$/"	
  puts show_regexp(line,/[A-Za-z0-9]*.rb$/)		
	if line =~ /[A-Za-z0-9]*.rb$/ 
		puts "ruby script: #{line}"
    #File.open(line,"r") do |file|
		#	 while s=file.gets					
		#	 eval s
	else
	  puts "nonsense!"
	end
end	


puts "\n\n"
s="cow"
if s=~/c*/ 
	puts "cow"
  puts show_regexp(s,/c*/)			
else
	puts "not cow"
  puts show_regexp(s,/c*/)				
end	

