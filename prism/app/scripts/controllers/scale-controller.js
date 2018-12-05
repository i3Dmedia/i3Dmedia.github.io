// * scale-controller.js
// * dynamic controller for scale-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('ScaleController', function($scope, $state, Mixin, Chart, Audio) {
    'use strict';
    var sD;
    var ellipse;


    //Audio.speak("ScaleController defined.");
    console.log("\nScaleController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // write $state.current.data.sD to $scope.sD using Chart-Mixin service
    Chart.render(sD.model['scene'] , {});

    // get scene element for interactivity
    ellipse = d3.select("#" + $state.current.name + " ellipse");
    console.log("ellipse = " + ellipse);
    ellipse.on('click', function(e){
                console.log("click black circle - rescale()!!");
                ellipse.attr('rx', 20*(Math.random()+0.5))
                 .attr('ry', 20*(Math.random()+0.5));
              });

  });
