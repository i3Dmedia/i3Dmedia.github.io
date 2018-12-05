/* narrative-controller.js
 * dynamic controller for dimensional svg data-visualization
 * @TODO - inject Chart and Camera2D services
 */
angular.module('app').controller('NarrativeController', function($scope, $interval, $timeout, $state, $urlRouter, $location, Mediator, Mixin, Audio) {
    'use strict';

    var change_state = "change:state";
    var req_filter = "req:filter";
    var resp_filter = "resp:filter";
    var filter_sD;
    var change_sD;
    var uri, url;
    // audio
    //var prefix = "message ";
    //var index = 1;
    //var msg;
 

    // diagnostics
    console.log("\nNarrativeController defined");
    //Audio.speak("NarrativeController defined.");
    console.log("$scope = " + $scope);
    console.log("Mediator = " + Mediator);
    console.log("Mixin = " + Mixin);
    console.log("Audio = " + Audio);

    // shared scope data - Date of session start
    $scope.date = new Date();
    console.log("'date' defined on 'narrative' scope");
    console.log("$scope.date = " + $scope.date);


    // connect to a2 - listen for state change
    Mediator.on(change_state, function(change_sD){
      console.log("\n### narrativeController recvd on channel " + change_state + " change_sD: " + change_sD);
      //display_object(change_sD);

      // create uri and url - write url to stateConfig
      uri = encodeURI(JSON.stringify(change_sD));
      url = '/' + change_sD.name + '/' + uri;
      $state.get(change_sD.name).url = url;
      console.log("new url = " + $state.get(change_sD.name).url);

      if(change_sD.name !== $state.current.name){
        console.log("NarrativeController detected change-of-state!");
        console.log("previous state is: " + $state.current.name);
        console.log("new state will be: " + change_sD.name);
        $state.get(change_sD.name).data = {sD: change_sD};
        // $stateParams should be written with change_sD but NOT found by controller
        $state.go(change_sD.name, change_sD);
      }else{
        console.log("NarrativeController detected update of state!");
        console.log("present state is: " + $state.current.name);
        // update present state
      }

      // change address bar 
      $location.url(url);
      $urlRouter.sync();
    });

    // connect to a2 - listen for filtered data updates
    Mediator.on(resp_filter, function(filter_sD){
      console.log("narrativeController recvd on channel " + resp_filter + " filter_sD: " + filter_sD);

      // update scene charts with new filtered datasets
      // Chart.filter(filter_sD);
      // ...
    })



    //console.log("beginning message sequence");
//    $timeout(function(){
//      $interval(function(){
//        msg = prefix + index;
//        switch(index) {
//          /*
//          case 1:
//            Audio.english(["Attention! message " + index, "The object is defined"]);
//            console.log("Audio.english");
//            break;
//          case 2:
//            Audio.englishF(["Attention! message " + index, "The object is defined"]);
//            console.log("Audio.englishF");
//            break;
//          case 3:
//            Audio.deutsch(["Achtung! Nachricht " + index, "Das Objekt ist definiert"]);
//            console.log("Audio.deutsch");
//            break;
//          case 4:
//            Audio.deutschF(["Achtung! Nachricht " + index, "Das Objekt ist definiert"]);
//            console.log("Audio.deutschF");
//            break;
//          case 5:
//            Audio.francais(["Attention! message " + index, "L'objet est definee"]);
//            console.log("Audio.francais");
//            break;
//          case 6:
//            Audio.francaisF(["Attention! message " + index, "L'objet est definee"]);
//            console.log("Audio.francaisF");
//            break;
//          default:
//            Audio.deutsch(["Achtung! Nachricht " + index, "Das Objekt ist definiert"]);
//            console.log("Audio.deutsch");
//          */
//        }
//        index += 1;
//        //Mediator.emit(send_channel, msg);
//      }, 8000, 7);
//    }, 4000);
  });
