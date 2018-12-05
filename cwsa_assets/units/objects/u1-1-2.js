 unit = {
    unit : "u1-1-2.js",
       t:"t2",

       directions:[
                {o:"Presentation",m:"playall",a:["D010"]},
                {o:"hand",m:"moveTo",a:"hat"},
                {o:"Presentation",m:"playall",a:["hat"]},
                {o:"hand",m:"moveTo",a:"bat"},
                {o:"Presentation",m:"playall",a:["bat"]},
                {o:"hand",m:"moveTo",a:"offstage"}
       ],
       exercises: {
         words:[
            [ "bat","hat"],
            [ "fat","hat"],
            [ "mat","nat"],
            [ "pat","bat"],
            [ "rat","rap"],
            [ "cat","cot"],
            [ "sat","sap"]
         ],
         callbacks: [
            [],
            ["f", "a", "t", "fat"],
            ["m", "a", "t", "mat"],
            ["p", "a", "t", "pat"],
            ["r", "a", "t", "rat"],
            ["c", "a", "t", "cat"],
            ["s", "a", "t", "sat"]
         ]
       },

       wordIndices: [{hat:1, bat:2},
                       {hat:1, fat:2},
                       {mat:1, nat:2},
                       {bat:1, pat:2},
                       {rap:1, rat:2},
                       {cot:1, cat:2},
                       {sat:1, sap:2}
       ],
       reports: [{bat:0, hat:0},
                       {fat:0, hat:0},
                       {mat:0, nat:0},
                       {pat:0, bat:0},
                       {rat:0, rap:0},
                       {cat:0, cot:0},
                       {sat:0, sap:0}
       ],

       resources: {
         audio:"<div id='dvo'>\
  <audio id='directions' preload='auto' src='../../cwsa_assets/units/audio/t2/dvo/D010.mp3'></audio>\
  <audio id='incorrect' preload='auto' src='../../cwsa_assets/units/audio/dvo/incorrect.mp3'></audio>\
  <audio id='good_job' preload='auto' src='../../cwsa_assets/units/audio/dvo/good_job.mp3'></audio>\
  <audio id='your_turn' preload='auto' src='../../cwsa_assets/units/audio/dvo/your_turn.mp3'></audio>\
  <audio id='try_again' preload='auto' src='../../cwsa_assets/units/audio/dvo/try_again.mp3'></audio>\
</div>\
<div id='vo'>\
  <audio id='bat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/bat.mp3'></audio>\
  <audio id='fat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/fat.mp3'></audio>\
  <audio id='mat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/mat.mp3'></audio>\
  <audio id='pat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/pat.mp3'></audio>\
  <audio id='rat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/rat.mp3'></audio>\
  <audio id='cat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/cat.mp3'></audio>\
  <audio id='sat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/sat.mp3'></audio>\
  <audio id='a' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/a.mp3'></audio>\
  <audio id='b' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/b.mp3'></audio>\
  <audio id='f' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/f.mp3'></audio>\
  <audio id='m' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/m.mp3'></audio>\
  <audio id='p' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/p.mp3'></audio>\
  <audio id='r' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/r.mp3'></audio>\
  <audio id='c' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/c.mp3'></audio>\
  <audio id='s' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/s.mp3'></audio>\
  <audio id='t' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/t.mp3'></audio>\
</div>"
       },

       pictures: [
              {id:'p0', url: '../../cwsa_assets/img/pictures/bat_baseball_clr.jpg', 
                display:'block'},
              {id:'p1', url: '../../cwsa_assets/img/pictures/bat_baseball_gry.jpg', 
                display:'block'},
              {id:'p2', url: '../../cwsa_assets/img/pictures/bat_rodent_clr.jpg', 
                display:'block'},
              {id:'p3', url: '../../cwsa_assets/img/pictures/bat_rodent_gry.jpg',
                display:'block'}
            ]
  };
