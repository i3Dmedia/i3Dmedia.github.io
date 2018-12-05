// * scene-controller.js
// * dynamic controller for scene-template based states
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('SceneController', function($scope, $state, Mixin, Chart, Audio) {
    'use strict';
    var sD;


    //Audio.speak("SceneController defined.");
    console.log("\nSceneController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // write $state.current.data.sD to $scope.sD using Chart-Mixin service
    Chart.render(sD.model['scene'], {});
  });
