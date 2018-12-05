/*
 * i3d-ground-directive.js
 * uses shaders ShaderMaterial to texture three.js PlaneBufferedGeometry
 */

// returns directive definition object DDO
// get scene from Camera3D
// pass in params as attrs
angular.module('app').directive("i3dGround", function(Camera3D){
  "use strict";

  console.log("\ni3d-ground-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-ground-directive link-f running!");


      // vars
      // NOTE! attrs.i3d:~ are all strings! - for safety must convert!
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;
      var w = attrs.i3dWidth || 50.0;
      var h = attrs.i3dHeight || 50.0;
      var transparent = attrs.i3dTransparent || true;
      var opacity = attrs.i3dOpacity || 1.0;
      var planeGeometry;
      var plane;
      var planeMaterial;
      var shaderMaterial;
      var texture;


      // tmp - diagnostics!!!
//      console.log("i3d-ground-directive 'attrs' properties:");
//      for(var p in attrs){
//        if(p.toString().match(/^i3d[a-zA-z]+/)){
//          console.log("ground attrs." + p + " = " + attrs[p.toString()]);
//        }else{
//          console.log("ground attrs has non xmlns-i3d property: " + p);
//        }
//      }

      // attrs.i3d:~ are all strings!
      // strings do NOT work as float values - convert to fl
      x = parseFloat(x);
      y = parseFloat(y);
      z = parseFloat(z);
      w = parseFloat(w);
      h = parseFloat(h);
      opacity = parseFloat(opacity);

      // attrs.i3d:~ are all strings!
      // strings do NOT work as boolean values in Material - convert to b
      transparent = (/true/i).test(transparent);
      //console.log("(/true/i).test(true) = " + (/true/i).test(true)); 



      // geometry - optimized using webGL buffers
      planeGeometry = new THREE.PlaneBufferGeometry(w,h,1,1); 

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
          //console.log("ground texture loaded!");
          //console.log("ground texture = " + texture);
          //console.log("ground texture.magFilter = " + texture.magFilter);
      
          
          // shaderMaterial
          //shaderMaterial = new THREE.MeshLambertMaterial({map : texture});
          // color is defined by one float (!?) => f f f ? so 1.0 => white ?
          shaderMaterial = new THREE.ShaderMaterial({ 
            uniforms: {
              color: {type: 'f', value: 0.0},
              map: {type: 't', value: texture}
            },
            vertexShader: document.getElementById("vsh").text,
            fragmentShader: document.getElementById("fsh").text,
            transparent: true
          });
          console.log("ground shaderMaterial = " + shaderMaterial);

          // three.js blending
          // default blending is THREE.NormalBlending
          // NOTE! - brightening of opaque image intersections 
          // sometimes occurs (?!)
          // This should NOT occur with the following:
          // shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
          // NOTE! brightening does occur with:
          //shaderMaterial.blendDst = THREE.DstAlphaFactor;
          //
          //shaderMaterial.depthTest = false;
          //shaderMaterial.blending = THREE.CustomBlending;
          //shaderMaterial.blending = THREE.AdditiveAlphaBlending;
          shaderMaterial.blendSrc = THREE.SrcAlphaFactor; // default
          //shaderMaterial.blendSrc = THREE.SrcAlphaFactor;
          shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor; // default
          shaderMaterial.blendEquation = THREE.AddEquation; // default
          //shaderMaterial.alphaTest = 0.5; // default=0
          //shaderMaterial.depthWrite = false; // default=true

      
          // mesh
          plane = new THREE.Mesh(planeGeometry,shaderMaterial);
          plane.material.side = THREE.DoubleSide;
        
          // rotate the plane to comprise XZ plane
          plane.rotation.x=-0.5*Math.PI;
  
          // position the plane
          plane.position.x = x;
          plane.position.y = y;
          plane.position.z = z;

          // add the Object3D to the scene and store in Camera3D actors by id
          Camera3D.addActorToScene(attrs.id, plane);
        });//onLoad
      }else{
        // material
        // [1] color but depth problems
        //planeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff0a, wireframe: false});

        // [2] no color but correct depth and alpha-blend
        console.log("ground color = " + attrs.i3dColor);
        planeMaterial = new THREE.MeshBasicMaterial({color: attrs.i3dColor, 
           transparent: transparent, opacity: opacity });
        console.log("ground MeshBasicMaterial = " + planeMaterial);
        // three.js blending
        // NOTE! - brightening of opaque image intersections 
        // sometimes occurs (?!)
        // This should NOT occur with the following:
        // planeMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        // NOTE! brightening does occur with:
        //planeMaterial.blendDst = THREE.DstAlphaFactor;
        //
        planeMaterial.depthTest = false;
        planeMaterial.blending = THREE.CustomBlending;
        planeMaterial.blendSrc = THREE.SrcAlphaFactor;
        //planeMaterial.blendDst = THREE.DstAlphaFactor;
        planeMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        planeMaterial.blendEquation = THREE.AddEquation; // default

         
        // mesh
        plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.material.side = THREE.DoubleSide;
        
        // rotate the plane to comprise XZ plane
        plane.rotation.x=-0.5*Math.PI;

        // position the plane
        plane.position.x = x;
        plane.position.y = y;
        plane.position.z = z;

        // add the Object3D to the scene and store in Camera3D actors by id
        Camera3D.addActorToScene(attrs.id, plane);
      }
  

      // cleanup
      elem.on("$destroy", function() {
        console.log("GROUND DESTROYED!");
        Camera3D.removeActorFromScene(attrs.id, plane);
        plane = null;
        $scope = null;
        Camera3D.removeActor(attrs.id);
      });
    }//link-f
  }//return DDO
});

