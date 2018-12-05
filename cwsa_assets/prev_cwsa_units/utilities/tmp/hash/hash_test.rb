#filename: hash_test.rb

# author: mark rudolph
# Copyright (c) 2008 i3dMedia
#
# Possession of a copy of this file grants no permission or license
# to use, modify, or create derivate works.
#
# Please contact mark_rudolph@yahoo.com for further information.


#purpose: test hash operations


#prepend ../lib to __FILE__ as temporary part of $: loadpath
#so tests can find lib files - assumes a directory structure:
#parent/lib, parent/test
#Or else must use ../lib/template explicitly
$:.unshift File.join(File.dirname(__FILE__),"..","lib")


#requires:



class HashTest

  #includes


  #attributes



  #ctor
  def initialize()
  end



  #methods
  def testops
    h=Hash.new('nil')
    puts "\nafter initial creation of empty hash with default value='nil':" 
    0.upto(9){|i| puts "h[#{i}]=#{h[i]}"}
    0.upto(9){|i| h[i]=3}
    puts "\nafter assignment to 3:"
    0.upto(9){|i| puts "h[#{i}]=#{h[i]}"}
    puts "\nafter assignment h[0]='apple':"
    h[0]='apple'
    puts "h[0]=#{h[0]}"
    puts "\nafter assignment h[0]=[1,2] h[1]={:apple=>5}:"
    h[0]=[1,2]
    h[1]={:apple=>5}
    0.upto(9){|i| puts "h[#{i}]=#{h[i]}"} 
    b=h.delete(0)
    puts "\nafter b=h.delete(3) b and h are:"
    puts "b=#{b}"
    0.upto(9){|i| puts "h[#{i}]=#{h[i]}"}       
    c=h.delete(3)
    puts "\nafter c=h.delete(3) c and h are:"
    puts "c=#{c}"
    0.upto(9){|i| puts "h[#{i}]=#{h[i]}"}   
  end

end 




#if run file by itself (>ruby template.rb) a self-test is run:
if __FILE__==$0 then
  ht=HashTest.new
  ht.testops()
end        
