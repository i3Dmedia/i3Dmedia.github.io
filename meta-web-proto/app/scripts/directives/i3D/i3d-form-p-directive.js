/*
 * i3d-sphere-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dForm", 
  ['$templateCache', 'Camera3D', function($templateCache, Camera3D){
  "use strict";

  console.log("\ni3d-form-directive running! ");


  // return DDO
  return {
    restrict: 'EA',
    scope: 'true',
    replace: 'false', // default and deprecated in >=1.3
    templateUrl: function(elem, attrs){
      return attrs.i3dTemplate;
    },
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-form-directive link-f running!");


      // vars
      // NOTE - maybe use later to give starting location for node offsets
      // NOTE! attrs.i3d:~ are all strings! - for safety must convert!
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;


      // tmp - diagnostics!!!
//      console.log("i3d-form-directive 'attrs' properties:");
//      for(var p in attrs){
//        if(p.toString().match(/^i3d[a-zA-z]+/)){
//          console.log("form attrs." + p + " = " + attrs[p.toString()]);
//        }else{
//          console.log("form attrs has non xmlns-i3d property: " + p);
//        }
//      }


      // cleanup
      elem.on("$destroy", function() {
        console.log("FORM DESTROYED! id = " + attrs.id);
        $scope = null;
      });
    }//link-f
  }//return DDO
}]);

