/* narrative-controller.js
 * dynamic controller for dimensional svg data-visualization
 */
angular.module('app').controller('NarrativeController', function($scope,
$state, $location, Mixin, Clone, Mediator, Log, Audio) {
    'use strict';

    var req_state = "req:state";
    var change_state = "resp:state";
    var req_filter = "req:filter";
    var update_filter = "resp:filter";
    var sD;
    var _sD;
    var sD_no_data;
    var i, j, p, q, r, u, uri, url;
    var stateNames = ['circle', 'stocks', 'footprint'];  
    var test_sD = { name: "test",
               model: {
                 scene: {
                   filters: { 
                     year: {range: {a:0, b:'INF'}},
                     count: {range: {a:0, b:'INF'}}
                   }
                 }
               }
             };
//    var test_sD = { name: "test",
//               model: {
//                 scene: {
//                   filters: { 
//                     country: {range: {a:"*"}, hide_b: true, size:5},
//                     count: {range: {a:0, b:'INF'}}
//                   }
//                 }
//               }
//             };


    /*
     * initialize UI
     */
    // initialize next-state navigation by radio buttons
    var initChangeStateUI = function(stateNames){
      // iniitialize stateNames for building state-request UI
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
     * UI event-handlers: request-change-state, request-apply-filter
     */
    // $scope state event-handler - activated from DOM
    $scope.change_state = function(){
      console.log("\n^^^Narrative Controller $scope.change_state: new_state_name = " + $scope.state.name);
      
      //sD = Mediator.emit(req_state, {name: $scope.state.name});
      sD = sDs[$scope.state.name];
      
      if($scope.state.name === "footprint"){
        console.log("\n\n\n\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ footprint");
        Object.keys(sDs['footprint']['model']['scene']).forEach(function(sc){
          console.log("footprint scene has p = " + sc + " with val " + sDs['footprint']['model']['scene'][sc]);
        });
      }else{
        console.log("\n\n\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ NOT footprint");
      }



      // create a sD copy with all data.values removed - use to create uri
      sD_no_data = Clone.clone(sD);
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


      console.log("\n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ");
      Object.keys(sD_no_data).forEach(function(p){      
        console.log("[1] sD_no_data has property = " + p);
        console.log("[1] typeof " + sD_no_data[p] + " = " + typeof sD_no_data[p]);
        if(typeof sD_no_data[p] === 'object'){
          Object.keys(sD_no_data[p]).forEach(function(q){      
            console.log("[2]" + sD_no_data[p] + " has property = " + q);
            console.log("[2] typeof " + sD_no_data[p][q] + " = " + typeof sD_no_data[p][q]);
            if(typeof sD_no_data[p][q] === 'object'){
              Object.keys(sD_no_data[p][q]).forEach(function(r){      
                console.log("[3]" + sD_no_data[p][q] + " has property = " + r);
                console.log("[3] typeof " + sD_no_data[p][q][r] + " = " + typeof sD_no_data[p][q][r]);
              });
            }
          });
        }
      });
      uri = encodeURI(JSON.stringify(sD_no_data));
      
      // form url
      for(p in sD_no_data.model){
        console.log(sD_no_data.name + " has model component " + p);
        q = sD_no_data.model[p];
        console.log("expect sD_no_data.model[" + p + "].data = {}"); 
//        console.log("sD_no_data.model[" + p + "].data has " + Object.keys(q.data).length + " properties");
      }
      url = '/' + sD.name + '/' + uri;
      //console.log("url = " + url);

      // state-change or just display-update of same state
      if(sD.name !== $state.current.name){
        console.log("NarrativeController detected change-of-state!");
        console.log("previous state is: " + $state.current.name);
        console.log("new state will be: " + sD.name);
        //Log.log("new state is " + sD.name);

        // write sD to next-state stateConfig.data for use by associated <Scene>Controller
        $state.get(sD.name).data = {sD: sD};
        console.log("NC: $state.get(sD.name).data = " + $state.get(sD.name).data);

        // initialize NarrativeController $parent scope for next scene
        console.log("NC: initApplyFiltersUI");
        //initApplyFiltersUI(sD);

        // change state - by url! - not by $state.go
        // sD is written to the new state's stateConfig.data so is available to
        // the new <scene>Controller via $state.current.data
        // $stateParams contains the {uri} property
        // $state.go(sD.name, sD);
        //console.log("changing state via url change to " + url);
        $location.url(url);
      }else{
        console.log("NarrativeController detected update of state!");
        console.log("present state is: " + $state.current.name);
        // update present state
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

      //sD = Mediator.emit(req_filter, sD);  // to a2
      sD = JSON.parse(sDs[sD.name]);

      console.log("\nNarrativeController recvd on channel " + update_filter + " sD: " + sD);
      console.log("$scope.render(sD) ONLY for Footprint!");
      if($scope.render){
        $scope.render(sD);
      }
    };



    /*
     * initialize UI and set session start
     */
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
