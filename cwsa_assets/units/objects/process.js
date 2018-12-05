
              /*
               * [1] process unit
               * all shared data is carried in $scope ViewModel
               * init View for directions/exercise - disable buttons
               */
              async.series([
                // <1a>
                function(callback){
                  console.log("initView");
                  Presentation.speak("initializing t2 view");
                  initView(unit['exercises']['words'][0]);
                  setTimeout(function(){
                    var id = setInterval(function(){
                      if(!$rootScope.idle){
                        window.clearInterval(id);
                        Presentation.pause(1000, callback);
                      }
                    }, 1000);
                  }, 5000);
                },
                
                // embed audio nodes in vo-div, background-images in divs
                // LATER - not needed - uX_Y_Z.html will be pre-populated
                // if a synchronous sequence of functions is needed for 
                // populateDOM - put populateDOM() in err-final and cascade
                // an additional async.series for populateDOM actions
                // <1b>
                function(callback){
                  console.log("populateDOM");
                  Presentation.speak("populate Document Object Model");

                  // append audio resources to t2View div id='unit'
                  //console.log(unit['resources']['audio']);
                  console.log("$('#unit') = " + $('#unit'));
                  $("#unit").append(unit['resources']['audio']);
                  console.log("$('#unit').html() = " + $('#unit').html());

                  // if necessary make model changes
                  $scope.safeApply(function(){
                    //@TODO
                  });
                  var id = setInterval(function(){
                    if(!$rootScope.idle){
                      window.clearInterval(id);
                      Presentation.pause(1000, callback);
                    }
                  }, 4000);
                },

                // <1c>
                function(callback){
                  // dummy to allow delay due to previous pause 
                  // prevent no-delay fall-through to directions
                  var id = setInterval(function(){
                    if(!$rootScope.idle){
                      window.clearInterval(id);
                      callback(null);
                    }
                  }, 1000);

                }],
                // err/final
                function(err, report){
                  if(err){
                    console.log(err);
                  }else{
                    console.log("err/final: initView and populateDOM complete");
                    // play directions or skip to exercises immediately
                    console.log("play_intro = " + $rootScope.play_intro);
                    if($rootScope.play_intro){
                      directions();
                    }else{
                      // reset backgroundController - skipIntro button
                      console.log("bgCtrlReset = " + $rootScope.bgCtrlReset);
                      $rootScope.bgCtrlReset();
                      exercises();
                    }
                  }
                }
              );//a.series

