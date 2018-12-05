/*
 * i3d-axes-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dAxes", function(Camera3D){
  "use strict";

  console.log("\ni3d-axes-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-axes-directive link-f running!");

      // coordinate axes - default length 3000.0
      var length = attrs.i3dLength || 3000.0;
      var axes = new THREE.AxisHelper(parseFloat(length));
  
      // add the Object3D to the scene and store in Camera3D actors by id
      Camera3D.addActorToScene(attrs.id, axes);


      // cleanup
      elem.on("$destroy", function() {
        console.log("AXES DESTROYED!");
        Camera3D.removeActorFromScene(attrs.id, axes);
        axes = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

