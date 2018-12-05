/*
 * i3d-cube-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dCube", function(Camera3D){
  "use strict";

  console.log("\ni3d-cube-directive running! ");



  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-cube-directive link-f running!");
    

      // vars
      // NOTE! attrs.i3d:~ are all strings! - for safety convert!
      var w = attrs.i3dWidth || 5.0;
      var h = attrs.i3dHeight || 5.0;
      var d = attrs.i3dDepth || 5.0;
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;
      var cubeGeometry;
      var cube;
      var cubeMaterial;
      var shaderMaterial;
      var texture;


      // tmp - diagnostics!!!
//      console.log("i3d-cube-directive 'attrs' properties:");
//      for(var p in attrs){
//        if(p.toString().match(/^i3d[a-zA-z]+/)){
//          console.log("cube attrs." + p + " = " + attrs[p.toString()]);
//        }else{
//          console.log("cube attrs has non xmlns-i3d property: " + p);
//        }
//      }

      // attrs.i3d:~ are all strings!
      // strings do NOT work as float values - convert to fl
      w = parseFloat(w);
      h = parseFloat(h);
      d = parseFloat(d);
      x = parseFloat(x);
      y = parseFloat(y);
      z = parseFloat(z);

      // geometry
      cubeGeometry = new THREE.BoxGeometry(w,h,d);

      // texture map
      /*
      .loadTexture (url, mapping, onLoad, onError)
        url -- the url of the texture
        mapping -- Can be an instance of THREE.UVMapping, 
          THREE.CubeReflectionMapping, 
          THREE.SphericalReflectionMapping, or 
          THREE.SphericalRefractionMapping. 
          Describes how the image is applied to the object.
          Use undefined instead of null as a default value. 
          See mapping property of texture for more details. 
        onLoad -- callback function
        onError -- callback function
      */
      if(attrs.i3dTextureurl){
        texture = THREE.ImageUtils.loadTexture(attrs.i3dTextureurl, THREE.UVMapping, function(){       
          // filters
          texture.magFilter = THREE.LinearFilter;
          texture.minFilter = THREE.LinearMipMapLinearFilter;
      
          // assuming you want the texture to repeat in both directions:
          // how many times to repeat in each direction; the default is (1,1),
          texture.wrapS = THREE.RepeatWrapping; 
          texture.wrapT = THREE.RepeatWrapping;
          //console.log("cube texture loaded!");
          //console.log("cube texture = " + texture);
          //console.log("cube texture.magFilter = " + texture.magFilter);
            
          // shaderMaterial
          //shaderMaterial = new THREE.MeshLambertMaterial({ map : texture });
          // color is defined by one float (!?) => f f f ? so 1.0 => white ?
          shaderMaterial = new THREE.ShaderMaterial({ 
            uniforms: {
              color: {type: 'f', value: 1.0},
              map: {type: 't', value: texture}
            },
            vertexShader: document.getElementById("vsh").text,
            fragmentShader: document.getElementById("fsh").text,
            transparent: true
          });
          console.log("cube shaderMaterial = " + shaderMaterial);    

          // three.js blending
          // NOTE! - brightening of opaque image intersections 
          // sometimes occurs (?!)
          // This should NOT occur with the following:
          // shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
          // NOTE! brightening does occur with:
          //shaderMaterial.blendDst = THREE.DstAlphaFactor;
          //
          //shaderMaterial.depthTest = false;
          //shaderMaterial.blending = THREE.CustomBlending;
          shaderMaterial.blendSrc = THREE.SrcAlphaFactor; // default
          //shaderMaterial.blendDst = THREE.DstAlphaFactor;
          shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor; // default
          shaderMaterial.blendEquation = THREE.AddEquation; // default


          // mesh
          cube = new THREE.Mesh(cubeGeometry,shaderMaterial);
          cube.material.side = THREE.DoubleSide;
      
          // position the plane
          // NOTE: plane.position.z<0 so x-axis is unambiguously visible
          cube.position.x = x;
          cube.position.y = y;
          cube.position.z = z;

          // add the Object3D to the scene and store in Camera3D actors by id
          Camera3D.addActorToScene(attrs.id, cube);
        });//onLoad
      }
      else{
        // material
        // [1] color but depth problems
        //cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false});

        // [2] no color but correct depth and alpha-blend
        console.log("cube color = " + attrs.i3dColor);
        cubeMaterial = new THREE.MeshBasicMaterial({color: attrs.i3dColor, 
           transparent: attrs.i3dTransparent, opacity: attrs.i3dOpacity });
        console.log("cube MeshBasicMaterial = " + cubeMaterial);
        // three.js blending
        // NOTE! - brightening of opaque image intersections 
        // sometimes occurs (?!)
        // This should NOT occur with the following:
        // cubeMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        // NOTE! brightening does occur with:
        //cubeMaterial.blendDst = THREE.DstAlphaFactor;
        //
        cubeMaterial.depthTest = false;
        cubeMaterial.blending = THREE.CustomBlending;
        cubeMaterial.blendSrc = THREE.SrcAlphaFactor;
        //cubeMaterial.blendDst = THREE.DstAlphaFactor;
        cubeMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        cubeMaterial.blendEquation = THREE.AddEquation; // default


        // create a cube
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.material.side = THREE.DoubleSide;
        
        // position the cube
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;

        // add the Object3D to the scene and store in Camera3D actors by id
        Camera3D.addActorToScene(attrs.id, cube);
      }


      // cleanup
      elem.on("$destroy", function() {
        console.log("CUBE DESTROYED! id = " + attrs.id + " cube = " + cube);
        Camera3D.removeActorFromScene(attrs.id, cube);
        cube = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

