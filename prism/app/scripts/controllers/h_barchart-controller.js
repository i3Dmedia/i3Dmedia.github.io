// * h_barchart-controller.js
// * dynamic controller for h_barchart-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('H_BarchartController', function($scope, $state, Mixin, Chart, Audio) {
    'use strict';
    var sD;
    var h_barchart, bars;


    //Audio.speak("H_BarchartController defined.");
    console.log("\nH_BarchartController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // write $state.current.data.sD to $scope.sD using Chart-Mixin service
    Chart.render(sD.model['h_barchart'] , {});

    // get scene element for interactivity
    d3.select("#" + $state.current.name).on('click', function(e){
      console.log("click h_barchart()!!");
    });
    //d3.selectAll("#" + $state.current.name + " > rect").each(function(bar,i){

// no syntax error but no events!
//    d3.select("#" + $state.current.name).selectAll("rect").on('click', function(e){
//      console.log("e = " + e);
//      console.log("bar has attr y = " + this.attr('y'));
//      this.attr('fill', Math.random().toString(16).slice(2, 8));
//    });

// syntax error!
//    d3.select("#" + $state.current.name).selectAll("rect").each(function(bar){
//      bar.on('click', function(e){
//        console.log("e = " + e);
//        console.log("bar has attr y = " + this.attr('y'));
//        this.attr('fill', Math.random().toString(16).slice(2, 8));
//      });
//    });

  });
