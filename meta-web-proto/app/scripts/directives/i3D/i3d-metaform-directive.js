/*
 * i3d-metaform-directive.js
 */

// returns directive definition object DDO
// obtain scene from Camera3D service 
// pass in params as attrs
angular.module('app').directive("i3dMetaform", function(Camera3D){
  "use strict";

  console.log("\ni3d-metaform-directive running! ");



  // return DDO
  return {
    restrict: 'E',
    scope: 'true',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ni3d-metaform-directive link-f running!");

      // test
      console.log("elem.parent() = " + elem.parent());
      console.log("elem.parent().attr('id') = " + elem.parent().attr('id'));
      console.log("elem.parent().prop('id') = " + elem.parent().prop('id'));


      // vars
      // NOTE! attrs.i3d:~ are all strings! - for safety must convert!
      var x = attrs.i3dX || 0.0;
      var y = attrs.i3dY || 0.0;
      var z = attrs.i3dZ || 0.0;
      var radius = attrs.i3dR || 5.0;
      var wsegments = attrs.i3dWsegments || 8.0;
      var hsegments = attrs.i3dHsegments || 9.0;
      var transparent = attrs.i3dTransparent || true;
      var opacity = attrs.i3dOpacity || 1.0;
      var sphereGeometry;  
      var sphere;
      var sphereMaterial;
      var shaderMaterial;
      var texture;
      var root;


      // tmp - diagnostics!!!
//      console.log("i3d-metaform-directive 'attrs' properties:");
//      for(var p in attrs){
//        if(p.toString().match(/^i3d[a-zA-z]+/)){
//          console.log("metaform sphere attrs." + p + " = " + attrs[p.toString()]);
//        }else{
//          console.log("metaform sphere attrs has non xmlns-i3d property: " + p);
//        }
//      }

      // attrs.i3d:~ are all strings!
      // strings do NOT work as boolean values in Material - convert to b
      transparent = (/true/i).test(transparent);

      // attrs.i3d:~ are all strings!
      // strings do NOT work as float values - convert to fl
      x = parseFloat(x);
      y = parseFloat(y);
      z = parseFloat(z);
      radius = parseFloat(radius);
      wsegments = parseFloat(wsegments);
      hsegments = parseFloat(hsegments);
      opacity = parseFloat(opacity);


      // create metaform sphere geometry
      // SphereGeometry(radius, widthSegments, heightSegments, 
      //   phiStart, phiLength, thetaStart, thetaLength)
      sphereGeometry = new THREE.SphereGeometry(radius,wsegments,hsegments);

      // texture map
      /*
      .loadTexture (url, mapping, onLoad, onError)
        url -- the url of the texture
        mapping -- Can be an instance of THREE.UVMapping, 
          THREE.SphereReflectionMapping, 
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
          //console.log("metaform sphere texture loaded!");
          //console.log("metaform sphere texture = " + texture);
          //console.log("metaform sphere texture.magFilter = " + texture.magFilter);
            
          // shaderMaterial - vsh/fsh interferes with billboard transparency(?)
          //shaderMaterial = new THREE.MeshLambertMaterial({ map : texture });
          //console.log("metaform sphere meshLambertMaterial = " + shaderMaterial);    
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
          console.log("metaform sphere shaderMaterial = " + shaderMaterial);    

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
          sphere = new THREE.Mesh(sphereGeometry,shaderMaterial);
          sphere.material.side = THREE.DoubleSide;
      
          // position the plane
          // NOTE: plane.position.z<0 so x-axis is unambiguously visible
          sphere.position.x = x;
          sphere.position.y = y;
          sphere.position.z = z;

          // add the Object3D to the scene and store in Camera3D actors by id
          Camera3D.addActorToScene(attrs.id, sphere);
        });//onLoad
      }
      else{
        // material
        // [1] color but depth problems
        //sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: false});

        // [2] no color but correct depth and alpha-blend
        console.log("metaform sphere color = " + attrs.i3dColor);
        console.log("metaform sphere transp = " + transparent);
        console.log("metaform sphere opacity = " + opacity);
        sphereMaterial = new THREE.MeshBasicMaterial({color: attrs.i3dColor, 
           transparent: transparent, opacity: opacity });
        console.log("metaform sphere MeshBasicMaterial = " + sphereMaterial);
        // three.js blending
        // NOTE! - brightening of opaque image intersections 
        // sometimes occurs (?!)
        // This should NOT occur with the following:
        // sphereMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        // NOTE! brightening does occur with:
        //sphereMaterial.blendDst = THREE.DstAlphaFactor;
        //
        sphereMaterial.depthTest = false;
        sphereMaterial.blending = THREE.CustomBlending;
        sphereMaterial.blendSrc = THREE.SrcAlphaFactor;
        //sphereMaterial.blendDst = THREE.DstAlphaFactor;
        sphereMaterial.blendDst = THREE.OneMinusSrcAlphaFactor;
        sphereMaterial.blendEquation = THREE.AddEquation; // default


        // create metaform sphere
        sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        sphere.material.side = THREE.DoubleSide;

        // position the metaform sphere
        sphere.position.x = x;
        sphere.position.y = y;
        sphere.position.z = z;

        // add the Object3D to the scene and store in Camera3D actors by id
        Camera3D.addActorToScene(attrs.id, sphere);
      }


      // cleanup
      elem.on("$destroy", function() {
        console.log("METAFORM DESTROYED! id = " + attrs.id + " sph = " + sphere);
        Camera3D.removeActorFromScene(attrs.id, sphere);
        sphere = null;
        $scope = null;
      });
    }//link-f
  }//return DDO
});

