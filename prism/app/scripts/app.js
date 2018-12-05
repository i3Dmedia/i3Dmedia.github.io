/*
 * app.js
 * central module for angular components
 * app is put into global namespace but can be eliminated.
 * After initial definition angular.module('app') returns app ref
 */

// Declare app module
var app = angular.module("app", ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    'use strict'; 


    $locationProvider.html5Mode(true);
    console.log("app.config: html5mode is " + $locationProvider.html5Mode());

    $stateProvider
      .state('circle', {
        url: '/circle/{uri}',
        templateUrl: "circle.svg",
        controller: "CircleController",   // defined in circle-controller.js  
        data: {},
      })
      .state('scene', {
        url: '/scene/{uri}', 
        templateUrl: "scene.svg",
        controller: "SceneController",   // defined in scene-controller.js
        data: {}
      })
      .state('barchart', {
        url: '/barchart/{uri}',
        // dynamically loaded template root for scene 
        // also clears the previous state-scene
        templateUrl: "barchart.svg",
        controller: "BarchartController",   // defined in barchart-controller.js
        data: {}
      })
      .state('scale', {
        url: '/scale/{uri}',
        // dynamically loaded template root for scene 
        // also clears the previous state-scene
        // explicit generative code for 'scale'
        //            d3.select('#scale')      
        //              .append('ellipse')
        //              .attr('cx', 50)
        //              .attr('cy', 50)
        //              .attr('rx', q.scale.rx)
        //              .attr('ry', q.scale.ry)
        //              .attr('fill', 'black');
        templateUrl: "scale.svg",
        controller: "ScaleController",   // defined in scale-controller.js
        data: {}
      })
      .state('map', {
        url: '/map/{uri}',
        // dynamically loaded template root for scene 
        // also clears the previous state-scene
        templateUrl: "map.svg",
        controller: "MapController",   // defined in map-controller.js
        data: {}
      })
      .state('stocks', {
        url: '/stocks/{uri}',
        // dynamically loaded template root for scene 
        // also clears the previous state-scene
        templateUrl: "stocks.svg",
        controller: "StocksController",   // defined in stocks-controller.js
        data: {}
      })
      .state('payments', {
        url: '/payments/{uri}',
        templateUrl: "payments.svg",
        controller: "PaymentsController",   // defined in payments-controller.js
        data: {}
      })
      .state('h_barchart', {
        url: '/h_barchart/{uri}',
        templateUrl: "h_barchart.svg",
        controller: "H_BarchartController",   // defined in h_barchart-controller.js
        data: {}
      })
      .state('area', {
        url: '/area/{uri}',
        templateUrl: "area.svg",
        controller: "AreaController",   // defined in area-controller.js
        data: {}
      })
      .state('footprint', {
        url: '/footprint/{uri}',
        templateUrl: "footprint.svg",
        controller: "FootprintController",   // defined in footprint-controller.js
        data: {}
      })
      .state('footprint_gb', {
        url: '/footprint_gb/{uri}',
        templateUrl: "footprint_gb.svg",
        controller: "FootprintGBController",   // defined in footprint-controller.js
        data: {}
      });

  }]) //config
  .run(['$rootScope', function( $rootScope){
    'use strict'; 
    console.log("app.run: prizm running...");
  }]); // run

