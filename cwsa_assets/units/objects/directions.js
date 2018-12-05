              /*
               * [2] directions
               * animations and voiceovers
               */
              var directions = function(){
                $scope.safeApply(function(){
                  //@TODO - if necessary
                });
                var action;
                async.waterfall([
                  // <2a>
                  function(callback){
                    console.log("callback recvd - speak directions")
                    action = {o:"Presentation",m:"speak",a:"directions, introductory explanation", t:4000};

                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  },
  
                  // <2b> play introductory directions
                  function(callback){
                    console.log("callback recvd - play directions")
                    var audio = document.getElementById('directions');
                    console.log("audio.currentSrc = " + audio.currentSrc);
                    console.log("audio node = " + audio);
                    //console.log("div-dvo = " + $("#dvo").html());
                    audio.addEventListener("ended", function(e){
                      console.log('onended');
                      
                      //Presentation.pause(1000, callback);
                      var id = setInterval(function(){
                        console.log("rootScope.idle = " + $rootScope.idle);
                        if(!$rootScope.idle){
                          window.clearInterval(id);
                          Presentation.pause(1000, callback);
                        }
                      }, 1000);
                    }, false);
                    console.log("audio.play = " + audio.play);
                    audio.play();
                  },
  
                  // <2c> hand animates to hat - incorrect word 
                  function(callback){
                    console.log("callback recvd - hand animates to hat")
                    action = {o:"Presentation",m:"speak",a:"directions, hand animates to hat", t:3000};
                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  },
  
                  // <2d> speak hat - incorrect
                  function(callback){
                    console.log("callback recvd - speak hat")
                    action = {o:"Presentation",m:"speak",a:"directions, hat, incorrect", t:3000};
                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  },
  
                  // <2e> play incorrect
                  function(callback){
                    console.log("callback recvd - play incorrect")
                    var audio = document.getElementById('incorrect');
                    console.log("audio node = " + audio);
                    audio.addEventListener("ended", function(e){
                      console.log('onended');

                      //Presentation.pause(1000, callback);
                      var id = setInterval(function(){
                        if(!$rootScope.idle){
                          window.clearInterval(id);
                          Presentation.pause(1000, callback);
                        }
                      }, 1000);
                    }, false);
                    audio.play();
                  },
  
                  // <2f> hand animates to bat - correct word
                  function(callback){
                    console.log("callback recvd - hand animates to bat")
                    action = {o:"Presentation",m:"speak",a:"directions, hand animates to bat", t:3000};

                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  },
  
                  // <2g> speak bat - correct
                  function(callback){
                    console.log("callback recvd - speak bat")
                    action = {o:"Presentation",m:"speak",a:"directions, bat, correct", t:3000};

                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  },
  
                  // <2h> play correct
                  function(callback){
                    console.log("callback recvd - play correct")
                    var audio = document.getElementById('correct');
                    console.log("audio node = " + audio);
                    audio.addEventListener("ended", function(e){
                      console.log('onended');

                      //Presentation.pause(1000, callback);
                      var id = setInterval(function(){
                        if(!$rootScope.idle){
                          window.clearInterval(id);
                          Presentation.pause(1000, callback);
                        }
                      }, 1000);
                    }, false);
                    audio.play();
                  },
  
                  // <2i> hand animates offscreen
                  function(callback){
                    console.log("callback recvd - hand animates offscreen")
                    action = {o:"Presentation",m:"speak",a:"directions, hand animates off screen", t:5000};

                    //Presentation.execute(action, callback);
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.execute(action, callback);
                      }
                    }, 1000);
                  }],
  
                  // error or final - no result
                  function(err, result){
                    console.log("callback recvd - error/final")
                    if(err){
                      console.log(err);
                    }else{
                      console.log("directions finished");
                      exercises();
                    }
                  }
                );
              }//directions

