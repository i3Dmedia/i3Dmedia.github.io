unit = {
       unit : "u1-1-6.js",
       t: "t6",

       directions: [
                {o:"Presentation",m:"playall",a:["D018", "D013"]}
       ],

       exercises: {
         words: [
            [ "bat","bad","fat"],
            [ "rat","ran","tar"],
            [ "Nat","nap","tan"],
            [ "pat","bat","pad"],
            [ "cat","can","cab"],
            [ "mat","man","tam"],
            [ "sat","cat","sad"]
         ],
         callbacks: [
            [],
            ["r", "a", "t", "rat"],
            ["n", "a", "t", "nat"],
            ["p", "a", "t", "pat"],
            ["c", "a", "t", "cat"],
            ["m", "a", "t", "mat"],
            ["s", "a", "t", "sat"]
         ]
       },

       wordIndices: [
            { bad:1,fat:2,bat:3},
            { rat:1,ran:2,tar:3},
            { nap:1,tan:2,Nat:3},
            { pat:1,bat:2,pad:3},
            { can:1,cat:2,cab:3},
            { man:1,tam:2,mat:3},
            { cat:1,sad:2,sat:3}
       ],
       reports: [
            { bat:0,bad:0,fat:0},
            { rat:0,ran:0,tar:0},
            { Nat:0,nap:0,tan:0},
            { pat:0,bat:0,pad:0},
            { cat:0,can:0,cab:0},
            { mat:0,man:0,tam:0},
            { sat:0,cat:0,sad:0}
       ],

       pictures: [
         {id:'p0', url: '../../cwsa_assets/units/pictures/short_a/bat_baseball_gry.jpg', display:'block'},
         {id:'p1', url: '../../cwsa_assets/units/pictures/short_a/bat_baseball_clr.jpg', display:'none'},
         {id:'p2', url: '../../cwsa_assets/units/pictures/short_a/rat_gry.jpg', display:'none'},
         {id:'p3', url: '../../cwsa_assets/units/pictures/short_a/rat_clr.jpg', display:'none'},
         {id:'p4', url: '../../cwsa_assets/units/pictures/short_a/Nat_gry.jpg', display:'none'},
         {id:'p5', url: '../../cwsa_assets/units/pictures/short_a/Nat_clr.jpg', display:'none'},
         {id:'p6', url: '../../cwsa_assets/units/pictures/short_a/pat_gry.jpg', display:'none'},
         {id:'p7', url: '../../cwsa_assets/units/pictures/short_a/pat_clr.jpg', display:'none'},
         {id:'p8', url: '../../cwsa_assets/units/pictures/short_a/cat_gry.jpg', display:'none'},
         {id:'p9', url: '../../cwsa_assets/units/pictures/short_a/cat_clr.jpg', display:'none'},
         {id:'p10', url: '../../cwsa_assets/units/pictures/short_a/mat_gry.jpg', display:'none'},
         {id:'p11', url: '../../cwsa_assets/units/pictures/short_a/mat_clr.jpg', display:'none'},
         {id:'p12', url: '../../cwsa_assets/units/pictures/short_a/sat_gry.jpg', display:'none'},
         {id:'p13', url: '../../cwsa_assets/units/pictures/short_a/sat_clr.jpg', display:'none'}
       ],


       resources: {
         audio: "<div id='dvo'>\
  <audio id='D018' preload='auto' src='../../cwsa_assets/units/audio/t6/dvo/D018.mp3'></audio>\
  <audio id='D013' preload='auto' src='../../cwsa_assets/units/audio/t6/dvo/D013.mp3'></audio>\
  <audio id='incorrect' preload='auto' src='../../cwsa_assets/units/audio/dvo/incorrect.mp3'></audio>\
  <audio id='good_job' preload='auto' src='../../cwsa_assets/units/audio/dvo/good_job.mp3'></audio>\
  <audio id='your_turn' preload='auto' src='../../cwsa_assets/units/audio/dvo/your_turn.mp3'></audio>\
  <audio id='try_again' preload='auto' src='../../cwsa_assets/units/audio/dvo/try_again.mp3'></audio>\
</div>\
<div id='vo'>\
  <audio id='bat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/bat.mp3'></audio>\
  <audio id='rat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/rat.mp3'></audio>\
  <audio id='nat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/nat.mp3'></audio>\
  <audio id='pat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/pat.mp3'></audio>\
  <audio id='cat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/cat.mp3'></audio>\
  <audio id='mat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/mat.mp3'></audio>\
  <audio id='sat' preload='auto' src='../../cwsa_assets/units/audio/short_a_words/sat.mp3'></audio>\
  <audio id='a' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/a.mp3'></audio>\
  <audio id='b' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/b.mp3'></audio>\
  <audio id='r' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/r.mp3'></audio>\
  <audio id='n' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/n.mp3'></audio>\
  <audio id='p' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/p.mp3'></audio>\
  <audio id='c' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/c.mp3'></audio>\
  <audio id='m' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/m.mp3'></audio>\
  <audio id='s' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/s.mp3'></audio>\
  <audio id='t' preload='auto' src='../../cwsa_assets/units/audio/letter_sounds/t.mp3'></audio>\
</div>"
       }
  };
