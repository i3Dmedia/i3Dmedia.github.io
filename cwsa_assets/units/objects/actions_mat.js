actions = function (callback){
          id = id.trim();
          console.log("id = " + id);
          var audio = document.getElementById(id);
          audio.addEventListener("ended", function(){
            window.setTimeout(function(){
              audio.removeEventListener("ended", this);
              console.log("after 1000ms calling callback...");
              callback(null);
            }, 1000);
          });
          console.log("audio.play() id = " + id);
          audio.play();
        },function (callback){
          id = id.trim();
          console.log("id = " + id);
          var audio = document.getElementById(id);
          audio.addEventListener("ended", function(){
            window.setTimeout(function(){
              audio.removeEventListener("ended", this);
              console.log("after 1000ms calling callback...");
              callback(null);
            }, 1000);
          });
          console.log("audio.play() id = " + id);
          audio.play();
        },function (callback){
          id = id.trim();
          console.log("id = " + id);
          var audio = document.getElementById(id);
          audio.addEventListener("ended", function(){
            window.setTimeout(function(){
              audio.removeEventListener("ended", this);
              console.log("after 1000ms calling callback...");
              callback(null);
            }, 1000);
          });
          console.log("audio.play() id = " + id);
          audio.play();
        },function (callback){
          id = id.trim();
          console.log("id = " + id);
          var audio = document.getElementById(id);
          audio.addEventListener("ended", function(){
            window.setTimeout(function(){
              audio.removeEventListener("ended", this);
              console.log("after 1000ms calling callback...");
              callback(null);
            }, 1000);
          });
          console.log("audio.play() id = " + id);
          audio.play();
        } 

