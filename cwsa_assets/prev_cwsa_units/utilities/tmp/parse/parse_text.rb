#parse.rb - parse String by 'split' method
#String.split(delimiter(s))


s=<<EOL 
Generative Principles for Character Dialog in Non-Deterministic Narrative

Mark Rudolph PhD.	 
Peerworks.org
Ulitsa Dostoevskogo 4-30
St. Petersburg, Russia
E-mail: mark_rudolph@yahoo.com


  
Abstract

Generative arts are based on processes yielding a form in some intended style. Non-deterministic narrative is a process of storytelling with the end result being a set of dramatic scenes each contributing to understanding more deeply the evolving characters and plot. Non-deterministic narrative can effectively be built using a generative system of dialog with embedded 'stage direction' actions movement, lighting and cinematography, creating a continual flow of character development, conflicts, and resolutions. The system of dialog is a cluster of possible replies or interjections in response to classes of previous speeches and actions. Given the states of the narrative and characters, and given the form and meaning of the current speech, a reply and accompanying actions and stage directions are generated which advance the current dialog and scene, and the overall story. Implicit in generative non-deterministic narrative is the ability of characters to improvise replies and to synthesize new dialog given a sequence of realized events and previous dialog as 'memory.' The continual inner monologue for creating potential speeches is analogous to the inner voice of thought and self-reflection which appears to be necessary for intelligence and consciousness. The evidence for intelligence and self-awareness in human beings and in artificial entities is most commonly judged by the ability to improvise dialog with some narrative purpose. The so-called 'Turing test' is really a game of dialog by an artificial character in a dramatic role with the purpose of fooling a human observer as often as a human actor about what is ‘real’ and what is ‘pretended.’ It is essentially a test as to whether an artificial character can act as skillfully and convincingly as a human being. Due to the unique nature of generative non-deterministic narrative it has the greatest potential to simulate the essential dramatic events and inter-personal dynamics of life and the artificial life of stories. Additional factors include unlimited narrative duration to develop additions and modifications to the actions and dialog capabilities of the generative system, and an agreed story ‘contract’ between author(s) and viewers permitting optimal dramatic effect of the narrative performance. Given all constraints and possibilities of non-deterministic narrative, the deepest and most effective characters appear, by the appropriateness of dialog and actions in the context of a narrative, to be intelligent, alive and self-aware.



1. Introduction

One intriguing theory of waking consciousness is that underneath the vicissitudes of thought and experience is an inner dialog and flow of sensory memory [1] This inner 'voice' is the fundamental generative act which shapes the 'shine' of self-awareness on the ebb and flow of transitory experience. Many cognitive psychologists suggest that children lack more than momentary thought because they have yet to develop either language or a flow of comprehensible visual imagery with which to ground simple word and action references. 
EOL



puts "s=#{s}"
puts"-----------------------------------"
a1=s.split( /(\.+|\?+|\!+|\n+(?=\n+))(?![A-Za-z0-9])/ )
puts "a1.length=#{a1.length}"
i=-1
a2=a1.dup
a1.each do |a| 
  i+=1
  len=a.split.length
  if len < 8
    a2.delete(a)
    puts "#{i}:#{len} !!!deleted:#{a}\n\n\n"  
  else
    puts "#{i}:#{len}:#{a}\n\n\n" 
  end  
end  
puts"-----------------------------------"
puts "a2=#{a2.join('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}"
