/*
 * i3d-ambient-light-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dAmbientlight", function(Camera3D){
  "use strict";

  console.log("\ni3d-ambient-light-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-ambient-light-directive link-f running!");

      // add the light to the scene
      console.log("alight color = " + attrs.i3dColor);
      var light = new THREE.AmbientLight(attrs.i3dColor);

      // add the Object3D to the scene and store in Camera3D actors by id
      Camera3D.addActorToScene(attrs.id, light);


      // cleanup
      elem.on("$destroy", function() {
        console.log("AMBIENT-LIGHT DESTROYED!");
        Camera3D.removeActorFromScene(attrs.id, light);
        light = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

