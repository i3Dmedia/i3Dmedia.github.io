/*
 * i3d-directional-light-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dDirectionallight", function(Camera3D){
  "use strict";

  console.log("\ni3d-directional-light-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-directional-light-directive link-f running!");

      // vars - default direction is vertical down (-Y)
      // NOTE! attrs.i3d:~ are all strings! - for safety must convert!
      var dirX = attrs.i3dDirectionx || 0.0;
      var dirY = attrs.i3dDirectiony || -1.0;
      var dirZ = attrs.i3dDirectionz || 0.0;

      // attrs.i3d:~ are all strings!
      // strings do NOT work as float values - convert to fl
      dirX = parseFloat(dirX);
      dirY = parseFloat(dirY);
      dirZ = parseFloat(dirZ);


      // light
      var light = new THREE.DirectionalLight(attrs.i3dColor );
      console.log("dlight color = " + attrs.i3dColor);
      //console.log("direction.x = " + dirX);
      //console.log("direction.y = " + dirY);
      //console.log("direction.z = " + dirZ);
      light.position.set(dirX, dirY, dirZ);

      // add the Object3D to the scene and store in Camera3D actors by id
      Camera3D.addActorToScene(attrs.id, light);


      // cleanup
      elem.on("$destroy", function() {
        console.log("DIRECTIONAL-LIGHT DESTROYED!");
        Camera3D.removeActorFromScene(attrs.id, light);
        light = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

