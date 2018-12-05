/* narrative-controller.js
 * dynamic controller for dimensional svg data-visualization
 */
angular.module('app').controller('NarrativeController', function($scope, $state, $location, $templateCache, StateDescriptors, Mixin, Clone, Mediator, Log, Audio, Camera2D, Camera3D) {
    'use strict';

    // charts-states
    var req_state = "req:state";
    var change_state = "resp:state";
    var req_filter = "req:filter";
    var update_filter = "resp:filter";
    var sd;
    var sD;
    var sD_no_data;
    var i, j, o, p, q, r, u, uri, url;
    var stateNames = ['circle', 'stocks', 'footprint'];  
    var test_sD = { name: "test",
               model: {
                 scene: {
                   filters: { 
                   }
                 }
               }
             };

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
    
    // opening state descriptor
    $scope.billboards = {}; 


    console.log("\nnarrative-controller:");



    /*
     * initializeopening scene 
     */
    var initScene = function(name){
      console.log("scene sD name = " + name);
      sD = StateDescriptors.get(name);
      if(sD){
        $scope.actors = sD.scene3D.actors;
        $scope.billboards = sD.scene3D.billboards;
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
//      setTimeout(function(){
//        console.log("$templateCache = " + $templateCache);
//        console.log($templateCache.get("circle.svg"));
//        console.log($templateCache.get("opening.json"));
//      }, 10000);
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

    // initialize filter selections and application UI
    var initApplyFiltersUI = function(_sD){ 
      // filter selection by radio buttons
      $scope.filters = _sD.model.scene.filters || {}; 
      $scope.filterNames = [];
      // initialize $scope.filterNames which drive ng-repeat of radio buttons
      Object.keys($scope.filters).forEach(function(filter,i){
        $scope.filterNames[i] = filter;
        $scope.filters[filter].range = $scope.filters[filter].range || {a:0,b:'INF'};
        $scope.filters[filter].size = $scope.filters[filter].size || 2;
      });
    };



    /*
     * processDescriptor
     */
    // make change of state
    var processDescriptor = function(_sD){
      // create a sD copy with all data.values removed - use to create uri
      sD = _sD;
      sD_no_data = Clone.clone(_sD);
      sD_no_data.model = sD_no_data.model || {};
      for(p in sD_no_data.model){
        console.log(sD_no_data.name + " has model component " + p);
        q = sD_no_data.model[p] || {};
        q['data'] = q['data']  || [{}];
        for(r in q['data'][0]){
          console.log("sD_no_data.model[" + p + "]['data'][0][" + r + "] = " + q['data'][0][r]);
          if(typeof q['data'][0][r] === 'object'){
            for(u in  q['data'][0][r]){
              console.log("sD.model[" + p + "]['data'][0][" + r + "][" + u + "] = " + q['data'][0][r][u]);
            }
          }
        }

        // if sD_no_data['data'] has a property 'values' (data payload) 
        // then set it to [] to remove the data payload for uri creation
        // and for use as filter_sD when making filter requests to a2
        if(q['data'][0]){
          q['data'][0]['values'] = [];
        }
      }
      console.log("typeof sD_no_data is " + typeof sD_no_data);
      uri = encodeURI(JSON.stringify(sD_no_data));
      
      // form url
      for(p in sD_no_data.model){
        console.log(sD_no_data.name + " has model component " + p);
        q = sD_no_data.model[p];
        console.log("expect sD_no_data.model[" + p + "].data = {}"); 
        console.log("sD_no_data.model[" + p + "].data has " + Object.keys(q.data).length + " properties");
      }
      url = '/' + sD.name + '/' + uri;
      //console.log("url = " + url);

      // state-change or just display-update of same state
      if(sD.name !== $state.current.name){
        console.log("NarrativeController detected change-of-state!");
        console.log("previous state is: " + $state.current.name);
        console.log("new state will be: " + sD.name);
        Log.log("new state is " + sD.name);

        // write sD to next-state stateConfig.data for use by associated <Scene>Controller
        $state.get(sD.name).data = {sD: sD};
        console.log("NC: $state.get(sD.name).data = " + $state.get(sD.name).data);

        // initialize NarrativeController $parent scope for next scene
        console.log("NC: initApplyFiltersUI");
        initApplyFiltersUI(sD);

        // change state - by url! - not by $state.go
        // sD is written to the new state's stateConfig.data so is available to
        // the new <scene>Controller via $state.current.data
        // $stateParams contains the {uri} property
        // $state.go(sD.name, sD);
        console.log("changing state via url change to " + url);
        $location.url(url);
      }else{
        console.log("NarrativeController detected update of state!");
        console.log("present state is: " + $state.current.name);
        // update present state
      }
    }//processDescriptor()




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
      Camera2D.zoom(_zoom);
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
        sD = Mediator.emit(req_state, {name: $scope.state.name});
     
        // cache locally for possible future fetch
        StateDescriptors.put(sD.name, sD);

        // clear previous custom i3d-svg els
        console.log("\n @@ Camera3D.clearScene()  !!!!!!!!!!!!!!!!!!");
        Camera3D.clearScene();

        // change state
        processDescriptor(sD);
      }
    };




    // $scope filter event-handler - activated from DOM
    $scope.apply_filter = function(){
      console.log("\n^^^NarrativeController apply_filter"); 
      for(p in $scope.filters){
        q = $scope.filters[p];
        console.log("filter by " + p + ": a = " + q.range.a + " b = " + q.range.b); 
      };

      sD = sD_no_data || {};
      sD.name = sD.name || 'unknown';
      console.log("sD.name = " + sD.name);
      sD.model = sD.model || {};
      sD.model.scene = sD.model.scene || {};
      sD.model.scene.filters = sD.model.scene.filters || {};
      Mixin.extend(sD.model.scene.filters, $scope.filters);
      sD = Mediator.emit(req_filter, sD);  // to a2
      console.log("$scope.render(sD)");
      $scope.render(sD);
    };



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

    // initialize filter application UI - use test-set before first state change
    console.log("initApplyFiltersUI:");
    initApplyFiltersUI(test_sD);


    // shared scope data - Date of session start
    $scope.date = new Date();
    console.log("$scope.date = " + $scope.date);
  });
