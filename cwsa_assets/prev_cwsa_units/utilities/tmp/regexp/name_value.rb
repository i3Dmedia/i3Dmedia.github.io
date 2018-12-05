# test for match to name=value pair

pattern = /(\w+)\s*=\s*(.*?)$/
s0="a=b"
s1="abc = 123"
s2="   def =    456"

puts "\npattern = #{pattern}"
puts "\nmatch returns a MatchData object ('mtch' in this exp) with [] method:"
puts <<-MTCH
pattern.match(string) returns a MatchData object or nil if no match.
MatchData acts as an array, and may be accessed using the normal array 
indexing technique []. mtch[0] is equivalent to the special variable $&, 
and returns the entire matched string. mtch[1], mtch[2], and so on,
return the values of the matched backreferences 
(portions of the pattern between parentheses). 
In this case the backreferences are:
(\w+) and (.*?) from  (\w+)\\s*=\\s*(.*?)$    
MTCH
mtch = pattern.match(s0)
puts "\ns0='#{s0}' and mtch=pattern.match(s0)"
puts "string preceding match is ($-backtick) $` = '#{$`}'"
puts "string match is ($-ampersand) $& = '#{$&}'"
puts "string following match is ($-quote) $' = '#{$'}'"
puts "mtch[0] is $& = '#{mtch[0]}'"
puts "mtch[1] is (\w+) =  '#{mtch[1]}'"
puts "mtch[2] is (.*?) =  '#{mtch[2]}'"
puts "mtch[3] is  #{mtch[3]}"
puts "mtch[4] is  #{mtch[4]}"
puts "mtch[5] is  #{mtch[5]}"

mtch = pattern.match(s1)
puts "\ns1='#{s1}' and mtch=pattern.match(s1)"
puts "string preceding match is ($-backtick) $` = '#{$`}'"
puts "string match is ($-ampersand) $& = '#{$&}'"
puts "string following match is ($-quote) $' = '#{$'}'"
puts "mtch[0] is $& = '#{mtch[0]}'"
puts "mtch[1] is (\w+) =  '#{mtch[1]}'"
puts "mtch[2] is (.*?) =  '#{mtch[2]}'"
puts "mtch[3] is  #{mtch[3]}"
puts "mtch[4] is  #{mtch[4]}"
puts "mtch[5] is  #{mtch[5]}"


mtch = pattern.match(s2)
puts "\ns2='#{s2}' and mtch=pattern.match(s2)"
puts "string preceding match is ($-backtick) $` = '#{$`}'"
puts "string match is ($-ampersand) $& = '#{$&}'"
puts "string following match is ($-quote) $' = '#{$'}'"
puts "mtch[0] is $& = '#{mtch[0]}'"
puts "mtch[1] is (\w+) =  '#{mtch[1]}'"
puts "mtch[2] is (.*?) =  '#{mtch[2]}'"
puts "mtch[3] is  #{mtch[3]}"
puts "mtch[4] is  #{mtch[4]}"
puts "mtch[5] is  #{mtch[5]}"

