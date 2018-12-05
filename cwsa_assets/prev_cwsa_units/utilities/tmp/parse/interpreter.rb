class Interpreter
  def s() print "Jack and Jill "; end
  def o() print " a pail of water. "; end 
  def v() print " went "; end   
  def p() print " up the hill"; end
  def i() print " to fetch"; end

  Map={
    ?s => instance_method(:s),  
    ?o => instance_method(:o),   
    ?v => instance_method(:v),  
    ?p => instance_method(:p),  
    ?i => instance_method(:i)                
  }
  
  def interpret(string)
    string.each_byte{|b| Map[b].bind(self).call}
  end
end


parser=Interpreter.new
parser.interpret("svpio")
#puts "parser.interpret(\"svpio\") = #{parser.interpret("svpio")}"
    

