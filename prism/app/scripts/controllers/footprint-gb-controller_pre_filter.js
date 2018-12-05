// * footprint-gb-controller.js
// * dynamic controller for footprint-gb-state
// * NOTE: temporary - for testing
// ---------------------------
angular.module('app').controller('FootprintGBController', function($scope, $state, Mixin, Chart, Countries, Mediator, Audio) {
   'use strict';
   var req_filter = "req:filter";
   var sD, options;
   var actor = {};
   var root = {};
   var label = [];
   var value = [];
   var pairOfChoices;
   var p, q, r, name, si, i, j, k, l;
   var a, b, tmp;


   var render = function(_sD){
     console.log("\n&&& footprint-gb-controller.render:")
     sD = _sD;

     // apply shot (and whatever other data) to template
     $scope.sD = $scope.sD || {};
     Mixin.extend($scope.sD, sD);
  
     // render actor-charts (properties 0f sD.model - but skip 'scene')
     for(p in sD.model){
       console.log("\niterating through sD.model p = " + p);
       actor[p] = sD.model[p] || {name: "unknown", update:"false"};
       actor[p]['update'] = actor[p]['update'] || 'false'; // update or default f
       console.log("^^^^^ actor["+p+"]['update'] = " + actor[p]['update']);

       // if actor update is false do not render but maintain a true view-flag
       // signifying that the reference to the actor DOM-object has been (and is)
       // established - then actors which are updated are permitted to reset
       // their event listeners and handlers. Otherwise updated actors would
       // wait forever for non-updated actors to define their view references
       if(actor[p]['update'] === 'false'){ 
         actor[p].view = actor[p].view || true;
         continue; 
       }
  
       // actor-root in Dom - where Chart will render the actor
       console.log("actor[" + p + "].name = " + actor[p].name);
       root[p] = document.getElementById(actor[p].name);
       console.log("root[" + p + "] = " + root[p]);
  
       // if rendering: 'template' (textboxes only) write data.values to actor
       // before writing sD.model.actor to $scope to valuate template
       if(p === 'textboxes'){
         actor[p]['data'][0]['values'].forEach(function(v,i){
           for(q in v){
             label[i] = q;
             value[i] = v[q];
             console.log("label[" + i + "] = " + label[i]);
             console.log("value[" + i + "] = " + value[i]);
           }
         });
         actor[p]['textboxes'].forEach(function(tb, i){
           tb['label'] = label[i];
           tb['value'] = value[i];
         });
         actor[p].view = root[p];
       }
  
       // render
       options = {el: root[p], renderer: 'svg'};
       Chart.render(actor[p], options);
       console.log("FootprintGBC: Chart service rendered " + actor[p].name);
       if(actor[p].rendering === 'template'){ continue; }
  
       // interactivity
       Chart.view(actor[p].name).then(function(v){
         console.log("\nview-promise resolved: view.name = " + v.name);
         actor[v.name]['view'] = v;
         pairOfChoices = false;
  
         // explicit condition
         console.log("grouped_bar.view = " + actor['grouped_bar'].view);
         console.log("map.view = " + actor['map'].view);
         if(actor['grouped_bar'].view && actor['map'].view ){
           console.log("!!!!!!!!!! grouped_bar and map are active ");
  
           if(actor['map']['update'] === true){
             // all chart interactivity - set in passes for each actor on view ready
             actor['map'].view.on('click', function(e, item){
               console.log("click: item._svg = " + item._svg);
               Object.keys(item).forEach(function(key){
                 if(key === "datum"){
                   console.log("item has property 'datum' with val = " + item.key);
                   console.log("country = " + Countries.nameByIndex(item.key));
                   console.log("abbrv = " + Countries.abbreviationByIndex(item.key));
                   console.log("geomtery = " + Countries.geometryTypeByIndex(item.key));
                   //console.log("coordinates = " + 
                   //  Countries.geometryCoordinatesByIndex(item.key));
                 }
               });
               // write country name into filter range.a (only one 'country' range variable)
               console.log("before click: $scope.$parent.filters['country'].range.a = " + $scope.$parent.filters['country'].range.a);
               $scope.$apply(function(){ 
                 // writes to parent scope via prototype inh
                 $scope.filters['country'].range.a = Countries.abbreviationByIndex(item.key);
               });
               console.log("after click: $scope.$parent.filters['country'].range.a = " + $scope.$parent.filters['country'].range.a);
             })
             .on('dblclick', function(e, item){
               // send simulated filter request to a2
               console.log("map dblclick: sending simulated filter request");
               $scope.apply_filter();
               //Mediator.emit(req_filter, $state.current.data.sD);
             });
           }
    
           // grouped_bar updates each end-to-end and 
           // wires event listeners/handlers each update
           actor['grouped_bar'].view.on('mouseover', function(e, item){
             console.log("grouped_bar mouseover " + p);
           })
           .on('click', function(e, item){
             Object.keys(item).forEach(function(key){
               //console.log("g_bar: item has property " + key + " with val = " + item[key]);
               if(key === "datum"){
                 console.log("g_bar: item['datum']['data']['category'] = " + item['datum']['data']['category']);
                 console.log("g_bar: item['datum']['index'] = " + item['datum']['index']);
               }
             });
             console.log("++++++ pairOfChoices = " + pairOfChoices);
             if(pairOfChoices){
               b = item['datum']['data']['category'];
               if(b < a){
                 tmp = a;
                 a = b;
                 b = tmp;
               }
               console.log("writing a and b to $scope");
               $scope.$apply(function(){
                 $scope.filters['count'].range.b = b;
                 $scope.filters['count'].range.a = a;
               })
             }else{
               a = item['datum']['data']['category'];
               console.log("writing a to $scope");
               $scope.$apply(function(){
                 $scope.filters['count'].range.a = a;
               })
             }
             pairOfChoices = !pairOfChoices;
           })
           .on('dblclick', function(e, item){
             // send simulated filter request to a2
             //console.log("grouped_bar dblclick: sending simulated filter request");
             //$scope.apply_filter();
             //Mediator.emit(req_filter, $state.current.data.sD);
           });
         }
       }, function(reason){
         console.log("unfulfilled promise for view: " + reason);
       });
     }
   };//render()


   // render initial sD
   //Audio.speak("FootprintGBController defined.");
   console.log("\nFootprintGBController: current state is " + $state.current.name);
   sD = $state.current.data.sD || {};

   // attach a self-reference to the parent NarrativeController scope
   $scope.$parent.render = render;
   console.log("typeof $scope.$parent.render = " + typeof $scope.$parent.render);
   render(sD);

 });
