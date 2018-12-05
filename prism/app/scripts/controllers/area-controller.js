// * area-controller.js
// * dynamic controller for area-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('AreaController', function($scope, $state, Mediator, Chart, Mixin, Audio) {
    'use strict';
    var req_filter = "req:filter";
    var sD, root, p;
    var view;



    //Audio.speak("AreaController defined.");
    console.log("\nAreaController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // get reference to the template-root
    root = document.getElementById("area");
    console.log("root = " + root);
    console.log("sD.model['area'] = " + sD.model['area']);

    // render area
    Chart.render(sD.model['area'], {el: root, renderer: 'svg'});


    // resolve promise of view - then set eventListeners and handlers
    Chart.view('area').then(function(o){
      view = o;
      console.log("AreaController: view promise resolved to: " + view);
      // set eventListeners and handlers
      view.on('mouseover', function(e, item){
        //console.log("mouseover");
      })
      .on('click', function(e, item){
        console.log("click: item._svg = " + item._svg);
      })
      .on('dblclick', function(e, item){
        // send simulated filter request to a2
        console.log("click: item._svg = " + item._svg);
        console.log("dblclick: sending simulated filter request");
        //Mediator.emit(req_filter, $state.current.data.sD);
      });
    }, function(reason){
      console.log(reason);
    });
  });
