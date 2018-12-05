#filename: test_string_regx.rb

# author: mark rudolph
# Copyright (c) 2009 i3dMedia
#
# Possession of a copy of this file grants no permission or license
# to use, modify, or create derivate works.
#
# Please contact mark_rudolph@yahoo.com for further information.


# purpose: tests of String manipulation



# prepend ../lib to __FILE__ as temporary part of $: loadpath
# so tests can find lib files - assumes a directory structure:
# parent/lib, parent/test
# Or else must use ../lib/template explicitly
$:.unshift File.join(File.dirname(__FILE__),"..","lib")


# requires:
require 'test/unit'




class TestStringRegx < Test::Unit::TestCase


  # setup
  def setup 
    # separate output
    puts "\n-----------------------------------------------"

  end


  # teardown
  def teardown 
  end


  # assertions:
  # [1] values returned by test method
  # assert(boolean, [message])
  # assert_equal(expected, actual, [message])
  # assert_not_equal(expected, actual, [message])
  # assert_in_delta(expected_float, actual_float, delta, [message])
  # assert_match(pattern, string, [message])
  # assert_no_match(pattern, string, [message])
  # assert_same(expected, actual, [message])
  # assert_not_same(expected, actual, [message])
  #
  #
  # [2] what type of object?
  # assert_nil(object, [message])
  # assert_not_nil(object, [message])
  # assert_instance_of(klass, object, [message])
  # assert_kind_of(klass, object, [message])
  #
  #
  # [3] duck typing
  # assert_respond_to(object, method, [message])
  # assert_operator(object1, operator, object2, [message])
  # assert_send([obj,method,*argss], [message])
  #
  #
  # [4] exception handling
  # assert_raise(*exceptions){||}  #exp: 
                                 #assert_raise(RunTimeError){A.foo(0)}
  # assert_nothing_raised(*exceptions){||}
  # assert_throws(expected_symbol, [message]){||} #exp:
                                 #assert_Throws(RunTimeError){A.foo(0)}
  # assert_nothing_thrown([message]){||}
  # NOTE: Exception.backtrace gives array of Strings as stack trace
  # NOTE: Kernal.caller does the same even when there is no Exception
  #


  # unit_tests
  #
  # casecmp
  def test_casecmp
    puts <<-TESTCMP
       'abc' <=> 'ABC' is #{'abc' <=> 'ABC'}
       'abc'.casecmp('ABC') is #{'abc'.casecmp('ABC')}
    TESTCMP
  end

end 






