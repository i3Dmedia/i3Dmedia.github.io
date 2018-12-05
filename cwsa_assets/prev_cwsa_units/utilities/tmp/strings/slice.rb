#slice.rb
#selecting parts of strings

puts "\nslice(n,m) -> start at char n - take m chars"
puts "s[n.m] -> start at char n - take m chars\n\n"
s = 'My kingdom for a string!'
puts "\ns=#{s}"
puts "  0123456789abcdef"
s.slice(3,7) # => "kingdom"
puts "\ns.slice(3,7)=#{s.slice(3,7)}"

s[3,7] # => "kingdom"
puts "\ns[3,7]=#{s[3,7]}"
puts "s[3,7].length=#{s[3,7].length}"

s[11, 5] # => "for a"
puts "\ns[11,5]=#{s[11,5]}"
puts "s[11, 5].length=#{s[11,5].length}"

s[11, 17] # => "for a string!"
puts "\ns[11,17]=#{s[11,17]}"
puts "s[11, 17].length=#{s[11, 17].length}"

puts "\n\nTo get the first portion of a string that matches a regexp:"
#s[/.ing/] # => "king"
puts "\ns[/.ing/]=#{s[/.ing/]}"

s[/str.*/] # => "string!"
puts "\ns[/str.*/]=#{s[/str.*/]}"