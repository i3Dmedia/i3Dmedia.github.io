// shadermat-texplane-scene3D.js
// plane
var Scene = (function(){
  'use strict';

  var canvas;
  var scene;
  var w, h;
  // shaded plane
  var planeGeometry;
  var shaderMaterial;
  var texture;
  var plane;
  // 3D objects, lights
  var axes;
  var cubeGeometry;
  var cubeMaterial;
  var cube;
  var sphereGeometry;
  var sphereMaterial;
  var sphere;
  var geometry;
  var material;
  var mesh;
  var light;


  // canvas
  canvas = document.getElementById("3D");   
  w = 0.5 * canvas.width;                         // %
  h = 0.5 * canvas.height;
  console.log("******* textured-plane-scene3D: canvas.w = " + w + " canvas.h = " + h);

  // scene
  scene = new THREE.Scene();

  // coordinate axes 
  axes = new THREE.AxisHelper( 500 );
  scene.add(axes);


  // create the XY plane
  // texture map
  /*
.loadTexture (url, mapping, onLoad, onError)

url -- the url of the texture
mapping -- Can be an instance of THREE.UVMapping, THREE.CubeReflectionMapping, THREE.SphericalReflectionMapping or THREE.SphericalRefractionMapping. Describes how the image is applied to the object.
Use undefined instead of null as a default value. See mapping property of texture for more details. onLoad -- callback function
onError -- callback function
  */
  texture = THREE.ImageUtils.loadTexture( "./images/1.png", THREE.UVMapping, function(){ 
    // geometry
    planeGeometry = new THREE.PlaneGeometry(w,h); // 50,50

    // filters
    //texture.magFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    // assuming you want the texture to repeat in both directions:
    texture.wrapS = THREE.RepeatWrapping; 
    texture.wrapT = THREE.RepeatWrapping;
    // how many times to repeat in each direction; the default is (1,1),
    //texture.repeat.set( 4, 4 ); 
     
    console.log("texture loaded!");
    console.log("texture = " + texture);
    console.log("texture.magFilter = " + texture.magFilter);


    // shaderMaterial
    //shaderMaterial = new THREE.MeshLambertMaterial({ map : texture });
    shaderMaterial = new THREE.ShaderMaterial({ 
      uniforms: {
        color: {type: 'f', value: 0.5},
        map: {type: 't', value: texture}
      },
      vertexShader: document.getElementById("vsh").text,
      fragmentShader: document.getElementById("fsh").text,
      transparent: true
    });
    console.log("shaderMaterial = " + shaderMaterial);

    // mesh
    plane = new THREE.Mesh(planeGeometry,shaderMaterial);
    plane.material.side = THREE.DoubleSide;
  
    // rotate and position the plane
    //plane.rotation.x=-0.5*Math.PI;
    plane.position.x=0;
    plane.position.y=0;
    plane.position.z=-0.1; // so x-axis is unambiguously visible
    // add the plane to the scene
    scene.add(plane);
  
    // create a cube
    cubeGeometry = new THREE.BoxGeometry(4,4,4);
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // position the cube
    cube.position.x=-4;
    cube.position.y=3;
    cube.position.z=20;
    // add the cube to the scene
    scene.add(cube);
  
    // create a sphere
    sphereGeometry = new THREE.SphereGeometry(4,20,20);
    sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
    sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    // position the sphere
    sphere.position.x=20;
    sphere.position.y=4;
    sphere.position.z=2;
    // add the sphere to the scene
    scene.add(sphere);
  
    // fog
    //scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
  
    // lights
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );
  
    light = new THREE.DirectionalLight( 0x002288 );
    light.position.set( -1, -1, -1 );
    scene.add( light );
  
    light = new THREE.AmbientLight( 0x222222 );
    scene.add( light );
  });//onLoad

  // return composed scene
  return scene;
})();


