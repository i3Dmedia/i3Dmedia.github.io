// * payments-controller.js
// * dynamic controller for payments dc-template
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('PaymentsController', function($scope, $state, Mixin, Chart, Audio) {
    'use strict';
    var req_filter = "req:filter";
    var sD, root, p, options;
    var view;


    //Audio.speak("PaymentsController defined.");
    console.log("\nPaymentsController: current state is " + $state.current.name);
    sD = $state.current.data.sD;

    // apply shot (and whatever other data) to template
    $scope.sD = $scope.sD || {};
    Mixin.extend($scope.sD, sD);


    // since this is complex template root is irrelevant - no write to DOM
    // get reference to the template-root
    root = document.getElementById("barchart");
    console.log("root = " + root);

    // render map
    // since this is complex template actor-name is irrelevant - pick one
    options = {el: root, renderer: 'svg'};
    Chart.render(sD.model['barchart'], options);
  });
