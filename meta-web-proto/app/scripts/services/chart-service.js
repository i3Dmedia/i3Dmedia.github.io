/**
 * chart-service.js
 *
 * renders by three means:
 * [1] 'template' (default) via Mixin.extend(scope.sD, sD)
 * [2] 'D3' via actions message on each chart translated to D3 chain
 *     NOTE: d3.select(selector) selects the first element that matches 
 *       the specified selector string, returning a single-element selection
 *       If no elements in the current document match the specified selector
 *       returns the empty selection. If multiple elements match the 
 *       selector, only the first matching element (in document traversal 
 *       order) will be selected. 
 * [3] 'vega' taking JSON model 'spec' and options object 
 *      and rendering chart to DOM
 *      NOTE: spec can be JSON-object-string or url reference
 *      NOTE: options = {
 *        el: css-selector/DOM-object-ref,  // required!!!!!
 *        data: {},
 *        renderer: 'svg'/'canvas',
 *        hover: t/f (default true) - f => chart will have no eventListeners
 *      }
 */
 // @TODO NarrativeController should run Chart.clearScene() at state change
angular.module('app').factory('Chart', ['$q', 'Mixin', function($q, Mixin){
  "use strict";
  
  // view is a closure var ref to 'views' - the generated charts
  var view = {};
  var p, r, seq;
  var scene = {
    assignVars: function(chart, vars){ 
      scene[chart] = scene[chart] || {};
      Mixin.extend(scene[chart], vars);
      console.log("scene(=o):");
      display_object(scene);
    },
    assignChain: function(chart, _var, seq){ 
      scene[chart] = scene[chart] || {};
      seq.forEach(function(s,i){
        console.log("chain " + i + ": " + s.m + "(" + s.a +")");
        // initialize method-target p at start of chain-seq
        if(i === 0){
          p = s['o'] || d3;
        }
        s.a = s.a || [];
        chain(s);
        if(i === seq.length-1){
          scene[chart][_var] = p;
          console.log("scene[" + chart + "][" + _var + "] = " + scene[chart][_var]);
        }
      });
    }
  };

  var exec = function(s){
    switch(s.a.length){
      case 0:
        return scene[s.m]();
        break;

      case 1:
        return scene[s.m](s.a[0]);
        break;

      case 2:
        return scene[s.m](s.a[0], s.a[1]);
        break;

      case 3:
        return scene[s.m](s.a[0], s.a[1], s.a[2]);
        break;

      case 4:
        return scene[s.m](s.a[0], s.a[1], s.a[2], s.a[3]);
        break;

      case 5:
        return scene[s.m](s.a[0], s.a[1], s.a[2], s.a[3], s.a[4]);
        break;

      default:
        console.log("helper method " + scene[s.m] + " has more than 5 args!!");
    }              
  };

  var chain = function(s){
    switch(s.a.length){
      case 0:
        p = p[s.m]();
        break;

      case 1:
        p = p[s.m](s.a[0]);
        break;

      case 2:
        p = p[s.m](s.a[0], s.a[1]);
        break;

      case 3:
        p = p[s.m](s.a[0], s.a[1], s.a[2]);
        break;

      case 4:
        p = p[s.m](s.a[0], s.a[1], s.a[2], s.a[3]);
        break;

      case 5:
        p = p[s.m](s.a[0], s.a[1], s.a[2], s.a[3], s.a[4]);
        break;

      default:
        console.log("D3 method " + s.m + " has more than 5 args!!");
    }              
  };



  // render renders the chart to the element or selection in options
  // Then eventListeners can be attached via view.on(e, f(e){})
  var chart = {

    render: function(actor, options){
 
      // apply specific rendering ('vega', 'D3') per chart if specified
      console.log("@@@ Chart: actor.name = " + actor.name);

      // initialize placeholder for view (Dom chart ref) for this actor
      view[actor.name] = {};

      // set default rendering to 'template'
      // Mixin.extend template rendering always done in controller anyway
      actor.rendering = actor.rendering || 'template'; 
      console.log("@@@ Chart: actor.rendering = " + actor.rendering);
      switch(actor.rendering){
        case 'template':
          // already achieved via Mixin.extend - i.e. 'template' is default
          break;

        case 'vega':
          console.log("case: 'vega'");
          vg.parse.spec(actor, function(chart){
            view[actor.name] = chart(options).update({duration:1000});
            view[actor.name].name = actor.name;
            console.log("\n*** Chart.render returns rendered view for " + actor.name);
            console.log("view = " + view[actor.name]);
          });
          break;

        case 'D3':
          // substitute abstract action-msg chaining
//          p = d3;
//          actor.actions.forEach(function(s){
//            console.log(s.m + "(" + s.a +")");
//            chain(s);
//          });
          console.log("actor.actions.length = " + actor.actions.length);
          actor.actions.forEach(function(seq){
            console.log("seq.length = " + seq.length);
            seq.forEach(function(s,i){

              // if non-default method-target (not d3) - exec(s)
              if(s['o']){
                s.a = s.a || [];
                console.log(s.o + "." + s.m + "(" + s.a +")");
                exec(s);
              }
              // initialize method-target p at start of chain-seq
              else{
                if(i === 0){
                  p = d3;
                }
                console.log(s.m + "(" + s.a +")");
                chain(s);
              }
            });
          });
          break;

          case 'h_barchart':
            console.log("case: 'h_barchart'");
            H_Barchart.render(actor, options);
            break;

          default:
            console.log("Chart: using default template rendering for " + p);
            console.log("       achiecved via Mixin.extend(scope.sD, sD)");
        }
    }, //render

    view: function(actor_name){
      var deferred = $q.defer();
      var i = 1;
      var si = setInterval(function(){
        if(view[actor_name]){
          console.log("view resolve attempt: " + i);
          clearInterval(si);
          deferred.resolve(view[actor_name]);
        }else{
          if(i++ === 20){
            clearInterval(si);
            deferred.reject("view for " + actor_name + " did not resolve after 2 secs.");
          }
        }
      }, 100);
      return deferred.promise;
    },//view

    clearScene: function(){
      var isFunction = function(f){
        return Object.prototype.toString.call(f) === '[object Function]';
      };

      Object.keys(scene).forEach(function(k){
        if(!isFunction(scene[k])){
          delete scene[k];
        }
      });
    }//clearScene
  }

  // return singleton factory object
  return chart;
}]);
