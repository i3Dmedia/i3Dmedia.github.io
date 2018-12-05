// * audio-service.js
// * voice methods in the following languages and gender: 
// * english => english-male
// * francais => french-male
// * deutsch => german-male
// * englishF => english-female
// * francaisF => french-female
// * deutschF => german-female
// -------------------------

angular.module('app').factory('Audio', function(){
  "use strict";

  // auxiliary function to wrap single text as array
  var bracket = function(text){
    return Array.isArray(text) ? text : [text];
  };
  
  console.log("\nAudio service defined");

  return  {
    // english/englishF
    english: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "en/en-us", variant: "m3"};
      });
      meSpeak.speakMultipart(parts, {pitch: 30, speed: 120});
    },
    englishF: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "en/en-us", variant: "f5"};
      });
      meSpeak.speakMultipart(parts, {pitch: 60, speed: 100});
    },
 
    // francais/francaisF
    francais: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "fr", variant: "m3"};
      });
      meSpeak.speakMultipart(parts, {pitch: 30, speed: 120});
    },
    francaisF: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "fr", variant: "f5"};
      });
      meSpeak.speakMultipart(parts, {pitch: 60, speed: 100});
    },

    // deutsch/deutschF
    deutsch: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "de", variant: "m3"};
      });
      meSpeak.speakMultipart(parts, {pitch: 30, speed: 120});
    },
    deutschF: function(text){
      var parts = [];
      bracket(text).forEach(function(t, i){
        parts[i] = { text: t, voice: "de", variant: "f5"};
      });
      meSpeak.speakMultipart(parts, {pitch: 60, speed: 100});
    },

    // default - speak
    speak: function(text){
      this.english(text);
    }
  };//return Audio;
});


