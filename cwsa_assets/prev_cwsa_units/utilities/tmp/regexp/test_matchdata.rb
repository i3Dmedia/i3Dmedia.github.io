#filename: matchdata.rb

# author: mark rudolph
# Copyright (c) 2009 i3dMedia
#
# Possession of a copy of this file grants no permission or license
# to use, modify, or create derivate works.
#
# Please contact mark_rudolph@yahoo.com for further information.


# purpose:
# understand return object from Regexp::match.
# Matchdata object also placed in $~ after regexp =~ string


# prepend File.dirname(__FILE__)/../../package/lib temporarily to $: loadpath
# so loader can find $RLA/package files in $RLA/package/lib. 
# assumes a standard directory structure: 
# package/lib, package/test (,package/doc, ...) 
# or else must $RLA/package/lib explicitly in $RUBYLIB
$:.unshift File.join(File.dirname(__FILE__),"../../package/","lib")

# NOTE: Exception.backtrace gives array of Strings as stack trace
# NOTE: Kernel.caller does the same even when there is no Exception
# NOTE: STDERR.puts "#{__FILE__}:#{__LINE__}: [message]" inserts
# a message at the given location
#
# NOTE: the following global constant allows the actual line of code to be
# printed when an error occurs, or at any point in the by using:
# SCRIPT_LINES__[__FILE__][__LINE__-1] (see Matz/Flannigan p280)

# global constants
SCRIPT_LINES__ = {__FILE__ => File.readlines(__FILE__)}



# requires:
begin
  #require 'rubygems'
  #require_gem 'Bijou' ">= 1.0"
rescue LoadError
  #require 'bijou'
end
require 'test/unit'




# named Match-d-ata to avoid conflict with class MatchData
class TestMatchData < Test::Unit::TestCase

  # includes


  # attributes



  #
  # ctor
  def setup
    puts "\n-------------------------------------"
  end

  def teardown
    $~=nil
  end    


  #
  # class methods
  #
  # called when class is 'inherited from' by a child class c
  def self.inherited c
    # modify child class c(?), or prevent(?)
    # modify: c.add_method :name {#body}
    # prevent: raise Exception, 
    #   "Attempt to create child class #{c} of final class #{self}"
  end

  #
  # called when method 'name' is added to this class
  def self.method_added name
    # example1 report
    #puts "\n\n#{self}.method_added: method #{name} added to class #{self} at trace:"
    #::Kernel.caller.each{|line| puts "#{line}"}
    # example1: prevent adding method
    # eigenclass = class << self; self; end
    # eigenclass.class_eval{remove_method name}
  end

  #
  # called when singleton_method 'name' is added to this class
  def self.singleton_method_added name
    # report or prevent(?) (see method above)
  end



  #
  # instance methods
  #
  # test1
  def test1 
    @regexp=/sit/
    @s="insensitive"
    begin
      puts "test1:"
      md = @regexp =~ @s
      puts "\n#{@regexp} =~ #{@s} yields #{@regexp =~ @s} and $~=#{$~.inspect}"
      puts "$~=#{$~}"
      puts "$'=#{$'}"
      puts "$`=#{$`}"

      puts "\n$~.class = #{$~.class}"
      puts "$~.length = #{$~.length}"
      puts "\n$~.captures.class = #{$~.captures.class}"      
      puts "$~.captures.length = #{$~.length}"
      i=0      
      $~.captures.each do |m| 
        puts "matchdata[#{i}] is #{m}" 
        i+=1
      end  
    rescue => e
      $stderr.print e.message      
      $stderr.print e.backtrace.join("\n")
      raise  #re-raise
    end  
  end


  # test2
  def test2
    @regexp=/(.)(.)(\d+)(\d)/
    @s="THX1138"  
    begin
      puts "test2:"
      md = @regexp =~ @s
      puts "\n$~.class = #{$~.class}"
      puts "$~.length = #{$~.length}"
      puts "$~.captures.class = #{$~.captures.class}"      
      puts "$~.captures.length = #{$~.length}"      
      puts "md = #{md} the position in the string of the first chacter in the match"
      puts "'THX1138'[#{md}] = #{'THX1138'[md]} and #{'THX1138'[md]}.chr is #{'TXH1138'[md].chr}"
      puts "\n\n\n#{@regexp} =~ #{@s} returns #{@regexp =~ @s} and $~=#{$~.inspect}"
      puts "NOTE: \#{$~} is $~.to_s" 
      puts "$~=#{$~}"
      puts "$'=#{$'} - 'post_match' is nil since the match goes to EOL"
      puts "$`=#{$`} - 'pre_match' since 'T' is three chars from the first digit, not two as required"
      puts "***** in other words:"
      puts "$~.to_s == default $~, the entire string match: $~.to_s = #{$~.to_s}" 
      puts "$~.pre_match == $` = #{$~.pre_match}"
      puts "$~.post_match == $' = #{$~.post_match}     ... i.e. nil"
      puts "\nEXPLANATION:"
      puts "$~ holds the MatchData object corresponding to the =~ operation."
      puts "$~.to_s gives the default $~ the full 'greedy string match"
      puts "$~.pre_match gives $` the string preceding the match string"
      puts "$~.post_match gives $' the string following the match string"

      puts "\n\n\n\n"
      puts "recall: regexp is /(.)(.)(\d+)(\d)/ and string is 'THX1138'"      
      i=0      
      $~.captures.each do |m| 
        puts "matchdata[#{i}] is #{m}" 
        i+=1
      end  
      puts "\nEXPLANATION:"
      puts "~$[] == matchdata[] returns the back-references for each ()-group L-R"
      puts "\n$~[0] is the first () which matches #{$~[0]}"
      puts "$~[1] is the second () which matches #{$~[1]}"
      puts "$~[2] s the third () which matches #{$~[2]}"
      puts "$~[3] is the fourth () which matches #{$~[3]}"
      puts "\n\n\n"

    rescue => e
      $stderr.print e.message      
      $stderr.print e.backtrace.join("\n")
      raise  #re-raise
    end  
  end

end 




# if run file by itself (>ruby template.rb) a self-test is run:
if __FILE__==$0 then
  puts "command line (ARGV) args:" unless ARGV.length==0
  ARGV.each{|arg| p arg}  
  
end        
