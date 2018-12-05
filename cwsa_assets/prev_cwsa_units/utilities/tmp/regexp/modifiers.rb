#modifiers.rb

extended = %r{ \ was # Match " was"
\s # Match one whitespace character
a # Match "a" }xi
puts "\nextended=#{extended}"
puts "i.e. ' was a'"

#extended =~ "What was Alfred doing here?" # => 4
#extended =~ "My, that was a yummy mango." # => 8
#extended =~ "It was\n\n\na fool's errand" # => nil
s="What was Alfred doing here?" # => 4
puts "\ns=#{s}"
puts "  012345678"
puts "extended =~ s #-> #{extended =~ s}"
puts "Regexp.last_match #-> #{Regexp.last_match}"

s="My, that was a yummy mango."
puts "\ns=#{s}"
puts "  012345678"
puts "extended =~ s #-> #{extended =~ s}"
puts "Regexp.last_match #-> #{Regexp.last_match}"

s="It was  a fool's errand"
puts "\ns=#{s}"
puts "  012345678"
puts "extended =~ s #-> #{extended =~ s}"
puts "Regexp.last_match #-> #{Regexp.last_match}"
puts"\n--------------------------------------------"


case_insensitive = /mangy/i
puts "case_insensitive=#{case_insensitive}"
#case_insensitive =~ "I'm mangy!" # => 4
#case_insensitive =~ "Mangy Jones, at your service." # => 0
s="I'm mangy!"
puts "\ns=#{s}"
puts "  012345678"
puts "case_insensitive =~ s #-> #{case_insensitive =~ s}"
s="Mangy Jones, at your service!"
puts "\ns=#{s}"
puts "  012345678"
puts "case_insensitive =~ s #-> #{case_insensitive =~ s}"
puts"\n--------------------------------------------"



multiline = /a.b/m
puts "multiline=#{multiline}"
#multiline =~ "banana\nbanana" # => 5
s="banana\nbanana" 
puts "\ns=#{s}"
puts "  012345678"
/a.b/ =~ "banana\nbanana" # => nil
puts "/a.b/ =~ s #-> #{/a.b/ =~ s}"
# But note:
puts "\nBut note:"
s="banana\nbanana"
puts "\ns=#{s}"
puts "  012345678"
puts "/a\\nb/ =~ s #-> #{/a\nb/ =~ s }"


