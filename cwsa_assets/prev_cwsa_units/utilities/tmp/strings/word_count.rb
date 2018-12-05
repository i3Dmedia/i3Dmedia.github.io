#words.rb
#parsing String to words

class String
  def word_count
    frequencies = Hash.new(0)
    downcase.scan(/\w+/) { |word| frequencies[word] += 1 }
    return frequencies
  end
end

#test1
puts "%{Dogs dogs dog dog dogs.}.word_count=#{%{Dogs dogs dog dog dogs.}.word_count}"
puts "-----------------------------------"

#test2
s=%w{a b c a d a e a f e d g g i d h i j}.join(" ")
puts "s=#{s}"
puts "s.word_count=#{s.word_count}"