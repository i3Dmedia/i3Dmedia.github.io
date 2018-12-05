
    // playall
    // audio.play will call resume when 'ended' !!!!
    playall: function(audioIds, _callback){
      _callback = _callback || function(){};
      if(!Array.isArray(audioIds)){
        audioIds = [audioIds];
      }
      console.log("audioIds = " + audioIds);
      console.log("audioIds.length = " + audioIds.length);
      // actions is new mapped array of async.series-actions formed from audioIds
      var actions = audioIds.map(function(id){
        return function(callback){
          id = id.trim();
          console.log("id = " + id);
          var audio = document.getElementById(id);
          audio.addEventListener("ended", function(){
            window.setTimeout(function(){
              console.log("after 1500ms calling callback...");
              callback(null);
            }, 1500);
          });
          console.log("audio.play() id = " + id);
          audio.play();
        };
      });
      console.log("starting async");
      async.series(actions, function(err){
        console.log("tail function f of async.series(actions,f) called");
        _callback(null);
      });
    },


