#successors
#test of Range


('aa'..'zz').each{|w| print("\nw=",w)}
puts "\n----------------------------------"
a=[]
('aa'..'az').each{|w| a<<w}
a.each{|w| print("\nw=",w)}
puts "\n----------------------------------"
("a".."e").to_a.reverse_each { |x| puts x }