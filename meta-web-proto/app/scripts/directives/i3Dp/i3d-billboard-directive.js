/*
 * i3d-billboard-directive.js
 * uses shaders ShaderMaterial to texture three.js PlaneBufferedGeometry
 */

// returns directive definition object DDO
// get scene, camera.position from Camera3D 
// pass in params as attrs
angular.module('app').directive("i3dBillboard", function(Camera3D){
  "use strict";

  console.log("\ni3d-billboard-directive running!");


  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-billboard-directive link-f running!");

      // vars
      // NOTE!! attrs.i3d:~ are all strings! - for safety must convert!
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;
      var w = attrs.i3dW || 50.0;
      var h = attrs.i3dH || 50.0;
      var use_aspect = (/true/i).test(attrs.i3dAspect); // s->boolean
      var aspect = window.innerWidth/window.innerHeight;
      var planeGeometry;
      var plane;
      var shaderMaterial;
      var texture;

      // tmp - diagnostc!!
      // test types of i3d-svg attrs:
//      console.log("test types of i3d-svg attrs:");
//      console.log("typeof attrs.i3dAspect is: " + typeof attrs.i3dAspect);
//      console.log("typeof use_aspect(s->b) is: " + typeof use_aspect);
//      console.log("(/true/i).test('TRUE') = " + (/true/i).test('TRUE'));
//      console.log("typeof attrs.i3dX is: " + typeof attrs.i3dX);
//      console.log("typeof attrs.i3dWidth is: " + typeof attrs.i3dWidth);

      // tmp - diagnostics!!!
//        console.log("i3d-billboard-directive 'attrs' properties:");
//        for(var p in attrs){
//          if(p.toString().match(/^i3d[a-zA-z]+/)){
//            console.log("attrs." + p + " = " + attrs[p.toString()]);
//          }else{
//            console.log("attrs has non xmlns-i3d property: " + p);
//          }
//        }

      // attrs.i3d:~ are all strings!
      // set floats - strings do NOT work as float values
      x = parseFloat(x);
      y = parseFloat(y);
      z = parseFloat(z);
      w = parseFloat(w);
      h = parseFloat(h);


      // texture map
      /*
      .loadTexture (url, mapping, onLoad, onError)
        url -- the url of the texture
        mapping -- Can be an instance of 
          THREE.UVMapping, 
          THREE.CubeReflectionMapping, 
          THREE.SphericalReflectionMapping, or 
          THREE.SphericalRefractionMapping. 
          Describes how the image is applied to the object.
          Use undefined instead of null as a default value. 
          See mapping property of texture for more details. 
        onLoad -- callback function
        onError -- callback function
      */
      texture = THREE.ImageUtils.loadTexture(attrs.i3dTextureurl, THREE.UVMapping, function(){ 

        // geometry - optimized using webGL buffers
        console.log("w = " + w + " h = " + h);
        planeGeometry = new THREE.PlaneBufferGeometry(w,h,1,1); // 50,50
    
        // filters
        texture.magFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;
    
        // assuming you want the texture to repeat in both directions:
        // texture.wrapS = THREE.RepeatWrapping; 
        // how many times to repeat in each direction; the default is (1,1),
        texture.wrapT = THREE.RepeatWrapping;         
        //console.log("texture loaded!");
        //console.log("texture = " + texture);
        //console.log("texture.magFilter = " + texture.magFilter);
    
    
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
        //shaderMaterial.blending = THREE["AdditiveAlphaBlending"];
        //console.log("billboard shaderMaterial = " + shaderMaterial);

        // three.js blending
        // default blending is THREE.NormalBlending
        // NOTE! - brightening of opaque image intersections sometimes occurs (?!)
        // This should NOT occur with the following:
        // shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        // NOTE! brightening does occur with:
        //shaderMaterial.blendDst = THREE.DstAlphaFactor;
        //
        //shaderMaterial.depthTest = false;
        //shaderMaterial.blending = THREE.CustomBlending;
        //shaderMaterial.blending = THREE.AdditiveAlphaBlending;
        shaderMaterial.blendSrc = THREE.SrcAlphaFactor;  // default
        //shaderMaterial.blendSrc = THREE.SrcAlphaFactor;
        shaderMaterial.blendDst = THREE.OneMinusSrcAlphaFactor; // default
        shaderMaterial.blendEquation = THREE.AddEquation; // default
        //shaderMaterial.alphaTest = 0.5; // default=0
        //shaderMaterial.depthWrite = false; // default=true


        // mesh
        plane = new THREE.Mesh(planeGeometry,shaderMaterial);
        plane.material.side = THREE.DoubleSide;
      
        // position the plane
        // NOTE: plane.position.z<0 so x-axis is unambiguously visible
        // attrs.i3dAspect true => factor position.x to center at grid vertex
        // Exp: y=z=0 x=100*aspect puts image at (0,1) on the coordinate grid
        if(use_aspect){
          plane.position.x = x*aspect;
        }else{
          plane.position.x = x;
        }
        plane.position.y = y;
        plane.position.z = z;

        // billboard
        // @TODO - update at each Camera3D transform !!
        //plane.lookAt(Camera3D.position());

        // add the Object3D to the scene and store in billboards by id
        Camera3D.addBillboardToScene(attrs.id, plane);
      });//onLoad

      
      // cleanup
      elem.on("$destroy", function() {
        console.log("BILLBOARD DESTROYED!");
        $scope = null;
        texture = null;
        Camera3D.removeBillboardFromScene(attrs.id);
        plane = null;
        attrs.i3dTextureurl = null;
        console.log("C3D.billboards = " + Camera3D.reportBillboards());
      });
    }//link-f
  }//return DDO
});

