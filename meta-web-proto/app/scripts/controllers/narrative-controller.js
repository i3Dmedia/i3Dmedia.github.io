/* narrative-controller.js
 * dynamic controller for dimensional svg data-visualization
 */
angular.module('app').controller('NarrativeController', function($scope, $state, $location, $templateCache, StateDescriptors, Mixin, Clone, Mediator, Log, Audio, Camera2D, Camera3D) {
    'use strict';

    // charts-states
    var req_state = "req:state";
    var change_state = "resp:state";
    var sd;
    var sD;
    var sD_no_data;
    var i, j, o, p, q, r, u, uri, url;
    var stateNames = ['circle', 'stocks', 'footprint'];  

    // interactivity
    var e;
    var mousedown = false;
    var target = null;
    var matrix_cfs = [];
    var matrix = [];
    var mx = 0.0;
    var my = 0.0;
    var dx = 0.0;
    var dy = 0.0;
    var unitX = 0.0;
    var unitY = 0.0;
    var zoom = 1.0;

    // webGL
    var scene;

    // UI
    $scope.ui = {};
    $scope.ui.zoom = 10.0;
    $scope.origin = {};
    $scope.origin.x = 0.0;
    $scope.origin.y = 0.0;
    $scope.ui.hide2Daxes = false;
    $scope.ui.hide2D = false;
    $scope.ui.hide3D = false;
    $scope.ui.hideBg = false;
    $scope.ui.HUD = false;
    
    // scene3D descriptors
    $scope.actors = {}; 
    $scope.billboards = {}; 


    console.log("\nnarrative-controller:");



    /*
     * initializeopening scene 
     */
    var initScene = function(name){
      console.log("opening scene sD name = " + name);
      sD = StateDescriptors.get(name);
      if(sD){
        $scope.actors = sD.scene3D.actors;
        $scope.billboards = sD.scene3D.actors.billboards;
//        console.log("$scope.billboards = " + $scope.billboards);
//        Object.keys($scope.billboards).forEach(function(bb,i){
//          Object.keys($scope.billboards[bb]).forEach(function(p){
//            console.log("## bb " + bb + " has property " + p + " and val " + 
//              $scope.billboards[bb][p]);
//          });
//        });
      }else{
        console.log("StateDescriptors returned undefined sD!");
      }
    }


    /*
     * initialize Cameras
     */
    var initCameras = function(){
      // Camera3D - for now webGL scene - later full i3D virtual cinematography
      // Scene is defined in views/shdmat-texplanebuf-scene3D.js - for Three.js
      // with a webGL customshaders defined Shadermaterial
      // *
      // place(canvasId, sD, _scope, _scene, _clearColor, _alpha, _fov)
      // NOTE: defaults:
      //    canvasId (no default - but expect index.html "3D")
      //    sD (no default but expect 'opening' sD from StateDescriptors service
      //    _scope (expect NarrativeController $scope for UI reference)
      //    _scene(=null => scene is declarative markup)
      //          (alternatively load procedural THREE.Scene _scene)
      //          scene = _scene || new THREE.Scene()
      //    clearColor(=0xffffff)
      //    alpha(=0.0))
      //    camera.fov(=90), 
      // *
      // NOTE! To use procedural scene load ./views/<name>-scene3D.js
      // Exp: ./views/minimal-scene3D.js - only returns new THREE.Scene()
      Camera3D.place("3D", sD, $scope);

      // Camera2D - control over zoom, dolly via ng-sliders
      Camera2D.initUI();     
      // Camera2D - control over actor animation and visibility
      // Camera2D.place(svg_id, stage_id, sD, [position default{x:0, y:0}])
      Camera2D.place("#s", "#stage", sD);
    }



    /*
     * initialize UI
     */
    // initialize next-state navigation by radio buttons
    var initChangeStateUI = function(stateNames){
      // initialize stateNames for building state-request UI
      $scope.states = [];
      stateNames.forEach(function(sN,i){
        $scope.states[i] = sN;
      });
      $scope.state = {name: 'opening'};    // initial implicit state
    };



    // toggle use of HUD (heads-up display) on/off
    // HUD => svg 2D layer is fixed on Camera3D near clip-plane so does NOT move
    // NOTE! zoom scales both the 2D and 3D spaces isometrically
    $scope.changeHUD = function(){
      $scope.ui.HUD = !$scope.ui.HUD;
      console.log("changeHUD(): $scope.ui.HUD = " + $scope.ui.HUD);
    }

    // toggle 2D axes on/off
    $scope.change2Daxes = function(){
      $scope.ui.hide2Daxes = !$scope.ui.hide2Daxes;
    }

    // toggle 2D scene (all svg-items) on/off
    $scope.change2D = function(){
      $scope.ui.hide2D = !$scope.ui.hide2D;
    }

    // toggle 3D visibility on/off
    $scope.change3D = function(){
      $scope.ui.hide3D = !$scope.ui.hide3D;
    }

    // toggle pixi-Bg visibility on/off
    $scope.changeBg = function(){
      $scope.ui.hideBg = !$scope.ui.hideBg;
    }

    // go to center - synchronize navigation params
    // if norm_zoom=true reset zoom=1.0 and $scope.ui.zoom=10.0
    $scope.home = function(norm_zoom){
      console.log("narrative-controller.home() norm_zoom = " + norm_zoom);
      // sync
      $scope.origin.x = 0.0;
      $scope.origin.y = 0.0;
      if(norm_zoom){
        $scope.ui.zoom = 10.0;
        zoom = 1.0;
      }
      Camera2D.home(norm_zoom);
      Camera3D.home(norm_zoom);
    }


    // zoom/scale with arbitrary center
    // monitor slider to change svg scale
    $scope.$watch("ui.zoom", function(_zoom){
      zoom = 0.1 * _zoom;
      if($scope.ui.HUD === false){
        Camera2D.zoom(_zoom);
      }
      Camera3D.dilateRadiusTo(zoom);
    });

    // monitor slider to change origin.x
    $scope.$watch("origin.x", function(_x){
      if($scope.ui.HUD === false){
        Camera2D.dollyX(_x, $scope.origin.y);
      }
      Camera3D.dollyXTo(_x);
    });

    // monitor slider to change origin.y
    $scope.$watch("origin.y", function(_y){
      if($scope.ui.HUD === false){
        Camera2D.dollyY(_y, $scope.origin.x);
      }
      Camera3D.dollyYTo(_y);
    });



    // interactivity
    // [1] drag - touch
    $scope.drag = function($event){
      console.log("n-c drag: $event = " + $event);
//      console.log("n-c drag: $event.gesture = " + $event.gesture);
//      // all these vals are undefined !!
//      Object.keys($event).forEach(function(p, i){
//        console.log("$event has property p= " + p + " val= " + $event.p);
//      });
//      Object.keys($event.gesture).forEach(function(p, i){
//        console.log("$event.gesture has property p= " + p + " val= " + $event.gesture.p);
//      });
    }

    // [2] drag - mouse
    $scope.mousedown = function(e){
      mousedown = true;
      target = e.target.parentNode;
      console.log("n-c m-down: target = " + target );
      console.log("n-c m-down: target id = " + target.getAttributeNS(null, "id"));
      matrix_cfs = target.getAttributeNS(null,"transform").slice(7, -1).split(' ');

      // record starting matrix (for scale) and mousedown location mx, my
      matrix_cfs.forEach(function(_x, i){
        matrix[i] = parseFloat(_x);
      });
      mx = (2*e.clientX/window.innerWidth - 1.0) * 50;
      my = (2*e.clientY/window.innerWidth - 1.0) * 50;
      unitX = mx;
      unitY = my;
      //console.log("n-c m-down: el= " + target + " matrix_cfs= " + matrix_cfs);
      //console.log("n-c m-down: w.iW= " + window.innerWidth + " w.iH= " + window.innerHeight);
      console.log("n-c mousedown: mx= " + mx + " my= " + my);
      //console.log("n-c m-down: scrX= " + e.screenX + " scrY= " + e.screenY);
      //console.log("n-c unitX= " + unitX + " unitY= " + unitY);
      //console.log("n-c vw= " + $('.mediaweb').width() + " vh= " + $('.mediaweb').height());
      console.log("mousedown - putting group target on top of render stack"); 
      target.parentNode.appendChild(target);
    }

    $scope.mousemove = function(e){
      if(mousedown){
        mx = (2*e.clientX/window.innerWidth - 1.0) * 50;
        my = (2*e.clientY/window.innerWidth - 1.0) * 50;
        dx = zoom * (mx - unitX);
        dy = zoom * (my - unitY);
        unitX = mx;
        unitY = my;
        matrix_cfs = "matrix(" + matrix.join(' ') + ")";
        //console.log("n-c m-move: init-m = " + matrix_cfs);
        matrix[4] += dx; // add to translate cfs of matrix 
        matrix[5] += dy;
        matrix_cfs = "matrix(" + matrix.join(' ') + ")";
        //console.log("n-c m-move: tr-m = " + matrix_cfs);
        target.setAttributeNS(null, "transform", matrix_cfs);
        e.stopPropagation();
      }
    }

    $scope.mouseout = function(e){
      mousedown = false;
    }

    $scope.mouseup = function(e){
      mousedown = false;
    }



    /*
     * UI event-handlers: request-change-state, request-apply-filter
     */
    // $scope state event-handler - activated from DOM
    $scope.change_state = function(){
      console.log("\n^^^Narrative Controller $scope.change_state: new_state_name = " + $scope.state.name);
      sd = StateDescriptors.get($scope.state.name);
      if(sd){
        // found in cache
        console.log("sd " + $scope.state.name + " found in StateDescriptors!");

        // clear previous custom i3d-svg els
        console.log("\n @@ Camera3D.clearScene()  !!!!!!!!!!!!!!!!!!");
        Camera3D.clearScene();

        // change state
        processDescriptor(sd);
      }else{
        // request from server
        console.log("requesting sD " + $scope.state.name + " from a2");
        Mediator.emit(req_state, {name: $scope.state.name});
      };
    };


    /*
     * Mediator event-handlers: state-change-response, update-filter-response
     */
    // listen for a2 state changes
    Mediator.on(change_state, function(_sD){
      console.log("\n^^^M.on(change_state) receievd _sD:" + _sD);
      console.log("_sD.name = " + _sD.name);

      // clear previous custom i3d-svg els
      console.log("\n @@ Camera3D.clearScene()  !!!!!!!!!!!!!!!!!!");
      Camera3D.clearScene();

      // cache locally for possible future fetch
      StateDescriptors.put(_sD.name, _sD);

      // change state
      processDescriptor(_sD);
    });




    /*
     * initialize UI and set session start
     */
    // initialize opening scene
    // var OPENING_SCENE defined in index.html final inline script
    console.log("initScene: opening scene = " + OPENING_SCENE);
    initScene(OPENING_SCENE);

    // initialize Camera3D, Camera2D
    console.log("initCameras:");
    initCameras();

    // initialize state change UI
    console.log("initChangeStateUI:");
    initChangeStateUI(stateNames);

    // shared scope data - Date of session start
    $scope.date = new Date();
    console.log("$scope.date = " + $scope.date);
  });
