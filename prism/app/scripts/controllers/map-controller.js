// * map-controller.js
// * dynamic controller for map-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('MapController', function($scope, $state, Mediator, Mixin, Chart, Countries, Audio) {
    'use strict';
    var req_filter = "req:filter";
    var sD, root, p, options;
    var view;



    //Audio.speak("MapController defined.");
    console.log("\nMapController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // get reference to the template-root
    root = document.getElementById("map");
    console.log("root = " + root);

    // render map
    options = {el: root, renderer: 'svg'};
    Chart.render(sD.model['map'], options);


    // resolve promise of view - then set eventListeners and handlers
    Chart.view().then(function(o){
      view = o;
      console.log("MapController: view promise resolved to: " + view);
      console.log("view._el.id = " + view._el.id);
      // set eventListeners and handlers
      view.on('mouseover', function(e, item){
        console.log("mouseover");
      })
      .on('click', function(e, item){
        console.log("click: item._svg = " + item._svg);
        Object.keys(item).forEach(function(key){
          if(key === "datum"){
            console.log("item has property 'datum' with val = " + item.key);
            console.log("country = " + Countries.nameByIndex(item.key));
            console.log("abbrv = " + Countries.abbreviationByIndex(item.key));
            console.log("geomtery = " + Countries.geometryTypeByIndex(item.key));
            //console.log("coordinates = " + Countries.geometryCoordinatesByIndex(item.key));
          }
        });
      })
      .on('dblclick', function(e, item){
        // send simulated filter request to a2
        console.log("dblclick: sending simulated filter request");
        //Mediator.emit(req_filter, $state.current.data.sD);
      });
    }, function(reason){
      console.log(reason);
    });
  });
