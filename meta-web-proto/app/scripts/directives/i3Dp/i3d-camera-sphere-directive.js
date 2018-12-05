/*
 * i3d-camera-sphere-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
// NOTE! csphere has no parent in scenegraph (other than 'root') so
//       local csphere.matrix === csphere.matrixWorld (world) and
//       csphere.matrixUpdate = true so csphere.matrix (=csphere.matrixWorld)
//       is updated for every transform of csphere.
angular.module('app').directive("i3dCamerasphere", function(Camera3D){
  "use strict";

  console.log("\ni3d-camera-sphere-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-camera-sphere-directive link-f running!");


      // vars
      // NOTE! attrs.i3d:~ are all strings! for safety must convert!
      var radius;
      var sphereGeometry;  
      var visible = attrs.i3dVisible || "false";  // default NOT visible
      // NOTE: use visible=true for debug and test:
      // NOTE: if visible, default is opaque red wireframe
      var transparent = attrs.i3dTransparent || "false";
      var wireframe = attrs.i3dWireframe || "true";
      var opacity = attrs.i3dOpacity || 1.0;
      var color = attrs.i3dColor || "red";
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;
      var radius = attrs.i3dR || 50.0;
      var sphereMaterial;
      var csphere;


      // tmp - diagnostics!!!
      for(var p in attrs){
        //console.log("attrs has property " + p);
        if(p.toString().match(/^i3d[a-zA-z]+/)){
          console.log("p = " + p + " typeof p is " + typeof p);
          console.log("csphere attrs." + p + " = " + attrs[p].toString());
        }else{
          console.log("csphere attrs has non xmlns-i3d property: " + p);
        }
      }
      console.log("attrs.i3dVisible = " + attrs.i3dVisible);
      console.log("before conversion visible = " + visible);


      // attrs.i3d:~ are all strings!
      // strings do NOT work as boolean values in Material - convert to b!
      visible = (/true/i).test(visible);
      transparent = (/true/i).test(transparent);
      wireframe = (/true/i).test(wireframe);

      // attrs.i3d:~ are all strings!
      // set floats - strings do NOT work as float values - convert to fl
      x = parseFloat(x);
      y = parseFloat(y);
      z = parseFloat(z);
      radius = parseFloat(radius);


      // create sphere geometry
      // [1] SphereGeometry(radius, widthSegments, heightSegments, 
      //   phiStart, phiLength, thetaStart, thetaLength)
      //   defaults: wS=8 (min=3), hS=9 (min=2), phiS=0, phiL=2PI, tS=0, tL=PI)
      console.log("camera-sphere radius = " + radius);
      sphereGeometry = new THREE.SphereGeometry(radius);

      // [2] MeshBasicMaterial
      console.log("sphere visible = " + visible);
      console.log("sphere transparent = " + transparent);
      console.log("sphere wireframe = " + wireframe);
      console.log("sphere opacity = " + opacity);
      console.log("sphere color = >" + color + "<");
      sphereMaterial = new THREE.MeshBasicMaterial({
        visible: visible, 
        transparent: transparent,
        opacity: opacity,
        wireframe: wireframe, 
        color: color});
      console.log("sphere MeshBasicMaterial = " + sphereMaterial);


      // mesh
      csphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
      csphere.material.side = THREE.DoubleSide;  // default=FrontSide
      
      // position the camera-sphere
      csphere.position.x = x;
      csphere.position.y = y;
      csphere.position.z = z;

      // attach Camera3D.camera as child of csphere and set its
      // position on the surface of csphere in the positive-z direction
      // from the center of csphere.position (i.e at radius distance
      // in the positive-z direction). Thus:
      // Camera3D.camera.position.x = csphere.position.x
      // Camera3D.camera.position.y = csphere.position.y
      // Camera3D.camera.position.z = csphere.position.z + radius
      // Finally: Camera3D.camera.lookAt(csphere.position) - center of csphere
      Camera3D.attachAsSurfaceChild(csphere, radius);
  
      // add the Object3D to the scene and store in Camera3D actors by id
      Camera3D.addActorToScene(attrs.id, csphere);


      // cleanup
      elem.on("$destroy", function() {
        console.log("CAMERA-SPHERE DESTROYED!");
        Camera3D.removeFromScene(attrs.id, csphere);
        csphere = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

