#parse.rb - parse String by 'split' method
#String.split(delimiter(s))


s="{a(1),b(2),c(3)[c(4)[],d(5)[]]}{r(6),t(7),y(8)[b(9),c(10)[x(11)[],y(12)[]}]}"
puts "s=#{s}"
puts"-----------------------------------"
a1=s.split(/\{|\}|,/)
puts "a1.length=#{a1.length}"
i=-1
a1.each{|a| i+=1; puts "#{i}:#{a}\n"}
puts"-----------------------------------"
a2=s.split(/,\s*|\{/)
puts "a2.length=#{a2.length}"
i=-1
a2.each{|a| i+=1; puts "#{i}:#{a}\n"}
puts"-----------------------------------"
a3=s.split(/,\s*|\}|\[|\]|!~\{\}/)
puts "a3.length=#{a3.length}"
i=-1
a3.each{|a| i+=1; puts "#{i}:#{a}\n"}
puts"-----------------------------------"
a4=s.split(/,\s*|\}|!~\{\}/)
puts "a4.length=#{a4.length}"
i=-1
a4.each{|a| i+=1; puts "#{i}:#{a}\n"}
puts"-----------------------------------"
a5=s.split(/,\s*|/)
puts "a5.length=#{a5.length}"
i=-1
a5.each{|a| i+=1; puts "#{i}:#{a}\n"}