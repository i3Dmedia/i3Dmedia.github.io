// * barchart-controller.js
// * dynamic controller for barchart-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('BarchartController', function($scope, $state, Mediator, Chart, Mixin, Audio) {
    'use strict';
    var req_filter = "req:filter";
    var sD, root, p;
    var view;



    //Audio.speak("BarchartController defined.");
    console.log("\nBarchartController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // get reference to the template-root
    root = document.getElementById("barchart");
    console.log("root = " + root);

    // render barchart
    Chart.render(sD.model['barchart'], {el: root, renderer: 'svg'});


    // resolve promise of view - then set eventListeners and handlers
    Chart.view().then(function(o){
      view = o;
      console.log("BarchartController: view promise resolved to: " + view);
      console.log("view._el.id = " + view._el.id);
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
        Mediator.emit(req_filter, $state.current.data.sD);
      });
    }, function(reason){
      console.log(reason);
    });
  });
