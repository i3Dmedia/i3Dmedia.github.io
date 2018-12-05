// * stocks-controller.js
// * dynamic controller for stocks-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('StocksController', function($scope, $state, Mixin, Chart, Mediator, Audio) {
    'use strict';
    var req_filter = "req:filter";
    var sD, options, root, p;
    var view;



    //Audio.speak("StocksController defined.");
    console.log("\nStocksController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // get reference to the template-root
    root = document.getElementById("stocks");
    console.log("root = " + root);

    // render map
    options = {el: root, renderer: 'svg'};
    Chart.render(sD.model['stocks'], options);


    // resolve promise of view - then set eventListeners and handlers
    Chart.view().then(function(o){
      view = o;
      console.log("StocksController: view promise resolved to: " + view);
      console.log("view._el.id = " + view._el.id);
      // set eventListeners and handlers
      view.on('mouseover', function(e, item){
        console.log("mouseover");
      })
      .on('click', function(e, item){
        console.log("click: item._svg = " + item._svg);
      })
      .on('dblclick', function(e, item){
        // send simulated filter request to a2
        console.log("click: item._svg = " + item._svg);
      });
    }, function(reason){
      console.log(reason);
    });
  });
