// * circle-controller.js
// * dynamic controller for svg circle template
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('CircleController', function($scope, $state, Mixin, Chart, Audio) {
    'use strict';
     var sD;

    //Audio.speak("CircleController defined.");
    console.log("\nCircleController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // write $state.current.data.sD to $scope.sD using Chart-Mixin service
    Chart.render(sD.model['scene'], {});

  });
