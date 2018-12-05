              /*
               * [3] exercises
               */
              var exercises = function(){
  
                // vars for closure cycle()
                var wordsets = unit['exercises']['words'];
                var nwordsets = wordsets.length;
                var voiceovers = unit['exercises']['callbacks'];
                var correctChoice = false;
                var index = 1; // wordsets[0] used for directions
                var refreshView = true;
                
                /*
                 * {3} recursive interaction per exercise wordset
                 */
                var cycle = function(){
                  correctChoice = false;
                  async.waterfall([
                    // {3-alpha} initView
                    function(callback){
                      $scope.callback = callback; 
                      $scope.safeApply(function(){
                        // enable word buttons for exercises   
                        $scope.disabled = false;
                      });
                      if(refreshView){
                        initView(wordsets[index]);
                      }
                    },

                    // after choice - disable buttons, score
                    // NOTE: onchosen() writes chose word to $scope.chosenWord
                    // and the correct word to $scope.correct - not affected
                    // by subsequent shuffling of wordset[]
                    // {3-beta}
                    function(callback){
                      $scope.safeApply(function(){
                        $scope.disabled = true;
                      });
                      reports[index][$scope.chosenWord] += 1;
                      if($scope.chosenWord === $scope.correct){
                        //index++;
                        refreshView = true;
                        correctChoice = true;
                      }else{
                        refreshView = false;
                        correctchoice = false;
                      }

                      //callback(null);
                      var id = setInterval(function(){
                        if(!$rootScope.idle){
                          window.clearInterval(id);
                          callback(null);
                        }
                      }, 1000);
                    },


                    // wait for choice !!!!!!! 
                    // NOTE: Nothing will happen until user clicks a word button!
                    // {3-gamma} speak
                    function(callback){
                      console.log("callback recvd - speak correct/not correct")
                      if(correctChoice){
                        Presentation.speak($scope.chosenWord + " is correct");
                      }else{
                        Presentation.speak($scope.chosenWord + " is NOT correct");
                      }

                      //Presentation.pause(3000, callback);
                      var id = setInterval(function(){
                        if(!$rootScope.idle){
                          window.clearInterval(id);
                          Presentation.pause(3000, callback);
                        }
                      }, 1000);
                    },
                    // {3-delta} audio
                    function(callback){
                      console.log("callback recvd - if correct - play audio")
                      // set $rootScope.exercises_started = true
                      // from now on, if bgCtrl stop_pressed - tkC sendReports()
                      $rootScope.exercises_started = true;
                      if(correctChoice){
                        console.log("callback recvd - play correct")
                        console.log("index = " + index)
                        //var audio = document.getElementById('w' + index.toString());
                        // correct word for each index
                        console.log("current correct sequence is " + correct_sequence[index]);
                        Presentation.playall(correct_sequence[index], callback);
                      }else{
                        console.log("incorrect choice");
                        //callback(null);
                        var id = setInterval(function(){
                          if(!$rootScope.idle){
                            window.clearInterval(id);
                            callback(null);
                          }
                        }, 1000);
                      }
                    },
                    function(callback){
                      console.log("^^^^^^^^^^^^^^^^^ final function - after playall");
                      setTimeout(function(){
                        console.log("^^^^^^^^^^^^^^^^^ final callback - to function(err)");
                        callback(null);
                      }, 2000);
                    }],
                    function(err, result){
                      console.log("^^^^^^^^^^^^^^^ callback recvd - error/final")
                      if(err){
                        console.log(err);
                      }else{
                        index++;
                        console.log("^^^^^^^^^^^^^ cycle finished. new index = " + index);
                        if(index < nwordsets){
                          console.log("index = " + index + " nwordsets = " + nwordsets);
                          cycle();  // recurse
                        }else{
                          console.log("cycle finished");
                          // send reports & request next unit/rewards
                          sendReports();
                        }
                      }
                    }  
                  );//a.waterfall
                }//cycle

