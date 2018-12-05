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
    @regexp=/sit/
    @s="insensitive"
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
  # template for instance methods  
  def test_match 
    begin
      md = @regexp =~ @s
      puts "\n#{regexp} =~ #{@s} yields #{@regexp =~ @s} and $~=#{$~.inspect}"

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
