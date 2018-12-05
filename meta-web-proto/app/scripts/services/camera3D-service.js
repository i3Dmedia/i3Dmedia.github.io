// * camera3D-service.js
// creates api for three.js 3D perspective-camera with custom controls
// place() injects canvasId and stateDescriptor and possible non-default
//         values for procedurally created scene, and clearColor and alpha
// attachAsSurfaceChild() injects camerasphere and locates camera
//         on its surface looking in a positive-z direction at the center 
//         of camerasphere at a distance of radius (of camerasphere) 
//         camerasphere is stored as a var reference 'csphere'
//
// Camera3D is wired to use UI controls for dollyXTo/dollyYTo 
//         each with linear scale [-110,110] which maps 1-1 at zoom=1
//         amd maps 10-1 at zoom=10 allowing full view of coordinate space
//         These are implemented to to set camerasphere.position.x/y
// Camera3D also has a zoom slider with linear scale [1,100] which is read
//         and immediately multiplied by 0.1 to give zoom scale [.1,10]
//         zoom=0.1 corresponds to camera distance (given default csphere
//         radius=50) to a camera distance of 5 units (radius*zoom) (near)
//         Similarly zoom=10 yields a camera distance of 500 units (far)
//         dilateRadiusTo(zoom) is implemented via modifying the csphere
//         radius and thus changing the camera distance since camera is a
//         transform child of csphere.
//
// Camera3D also uses the arrow keys for pan (left/right) which moves the
//         camera about its local y-axis (yaw), and tilt (up/down) which 
//         moves camera about its local x-axis (pitch).
//         Arrow keys with ctrl key down rotates the csphere (and thus the
//         camera attached on its surface) either around the csphere local
//         y-axis (ctrl left/right - pitch) x-axis (ctrl up/down - yaw)
//
// csphere information is dynamically updated and always available:
//         'current radius' (not a var) = radius * zoom (vars)
//         'current radius' = csphere.scale.z/y/z (assuming uniform scaling)
//         scale: csphere.scale (Vector3)
//         position: csphere.position (Vector3)
//         rotation: csphere.rotation (Vector3) (Euler)
//         quaternion: csphere.quaternion (Vector4)
//         NOTE: examine_matrix(csphere.matrix) returns:
//         translation Vector3 (tx,ty,tz)
//         quaternion Vector4 (qx,qy,qz,qw)
//         scale Vector3 (sx,sy,sz)
//
// camera information is also dynamically updated and always available
//         NOTE! camera is a child of csphere so camera.matrix is local
//         but NOT world!  Generally the camera is moved around by csphere
//         so usually shows camera.matrix = identity
//         scale: camera.scale (Vector3)
//         position: camera.position (Vector3)
//         rotation: camera.rotation (Vector3) (Euler)
//         quaternion: camera.quaternion (Vector4)
//         NOTE: examine_matrix(camera.matrix) returns:
//         translation Vector3 (tx,ty,tz)
//         quaternion Vector4 (qx,qy,qz,qw)
//         scale Vector3 (sx,sy,sz)
//
// Camera3D transform methods follow a naming convention by which <function>To
//         denotes a jump-cut, i.e absolute and idempotent transform.
//         For example dollyTo(6,7,-5) jump-cuts to world location (6,7,-5)
//         since transforms on defined on csphere whose parent is the root of the
//         scenegraph and therefore its local matrix equals its world matrix
//         NOTE also that matrixAutoUpdate() is true.
//         
//         Camera3D absolute/idempotent transform methods:
//           dollyXTo: function(_x)
//           dollyYTo: function(_y)
//           dollyZTo: function(_z)
//           dollyTo: function(x,y,z)
//           dilateRadiusTo: function(_zoom)
//
//         Camera3D relative/cumulative transform methods:
//           dolly: function(x,y,z)
//           translateX: function(d)
//           translateY: function(d)
//           translateZ: function(d)
//           translateAxisDistance: function(axis, d)
//           zoom: function(degree_incr)
//        
//           // NOTE: params = pitch:p, yaw:y, roll:r}
//           rotate: function(params)          
//        
//           rotateX: function(angle)
//           rotateY: function(angle)
//           rotateZ: function(angle)
//           rotateAxisAngle: function(axis, angle)
//        
//           NOTE: params =  tx:x, ty:y, tz:z, pitch:p, yaw:y, roll:r, zoom:z}
//           transform: function(params)
//
// -------------------------
angular.module('app').service('Camera3D', function(){
  "use strict";

  console.log("\nCamera3D-service defined");

  var active = true;
  var canvas;
  var gl;
  var scope;           // NarrativeController scope - for UI sync
  var scene;
  var stage;
  var billboardsFace = false;  // true => billboards lookAt camera (world pos)
                               // false => billboards are static
  var billboardsTarget = new THREE.Vector3(); // csphere.pos + camera.pos, i.e.
                                              // world position of camera

  var billboards = {}; // hash of objects in sD keyed by directive id
  var actors = {};     // hash of objects in sD keyed by directive id
                       // Both these collections {id, Object3D} are filled as
                       // objects are created by their respective directives
                       // and added to the scene via Camera3D.addToScene()
  var score = [];      // array of timed Actions - set in initScene()
  var camera;    // ref to THREE.PerspectiveCamera
  var csphere;   // scenegraph parent of camera - 'camerasphere' injected as arg
                 // to Camera3D.attachAsSurfaceChild(camerasphere, radius) 
  var renderer;  // THREE.WebGLRenderer
  var clearColor;
  var alpha;
  var fov = 90.0;      // default - can be set by Camera3D.place()
  var radius = 50.0;   // default camera z-distance set by radius of camerasphere
  
  // zoom - dynamic tracking
  var zoom = 1.0;
  var prev_zoom = 1.0;

  // for dollyXTo translation factor
  var aspect;          // w.innerW/w.innerH

  // fps meter
  var stats = null;

  // Vector3
  var x_axis = new THREE.Vector3(1.0, 0.0, 0.0);
  var y_axis = new THREE.Vector3(0.0, 1.0, 0.0);

  // 4x4 matrices in column-order(!)
  // dynamic copy of csphere.matrix
  var csphere_matrix = new THREE.Matrix4();
  // tmp
  var matrix = new THREE.Matrix4();
  var matrixa = new THREE.Matrix4();
  var matrixb = new THREE.Matrix4();
  var matrixc = new THREE.Matrix4();
  var matrixz = new THREE.Matrix4();
  var rotation_matrix; // string for CSS3D matrix3d transform of div id 'stage'
  var report_matrix = false;


  // diagnostics
  // camera information
  var report_camera = function(report_matrix){
      var i;
      console.log("camera.fov is: " + camera.fov);
      console.log("camera.position is: ");
      console.log("x = " + camera.position.x);
      console.log("y = " + camera.position.y);
      console.log("z = " + camera.position.z);
      console.log("camera.rotation is: ");
      console.log("x = " + camera.rotation.x);
      console.log("y = " + camera.rotation.y);
      console.log("z = " + camera.rotation.z);
      console.log("camera.rotation._order is: " + camera.rotation._order);
      console.log("camera.up is: ");
      console.log("x = " + camera.up.x);
      console.log("y = " + camera.up.y);
      console.log("z = " + camera.up.z);
      if(report_matrix){
        console.log("camera.matrix (in column-order): ");
        for(i=0; i<camera.matrix.elements.length; i++){
          console.log("camera.matrix.e[" + i + "] = " + camera.matrix.elements[i]);
        };
      }
  };

  // diagnostics
  // examine information from o3D.matrix - local matrix unless world=true
  // Then examine o3D.matrixWorld
  // NOTE: if o3D has no object parent (i.e is at the root of the scenegraph)
  //       then o3D.matrix === o3D.matrixWorld
  //       This is true for csphere (camerasphere) for example
  // reports:
  //   translation Vector3
  //   rotation    Quatrnion
  //   scalar      Vector3
  var examine_matrix = function(m){
    console.log("caution! matrix decomposition is NOT always well-defined!");
    for(var i=0; i<16; i++){
      console.log("matrix[" + i + "] = " + m.elements[i]);
    }

    var t = new THREE.Vector3();
    var q = new THREE.Quaternion();
    var s = new THREE.Vector3();
    m.decompose(t,q,s);
    console.log("s.x = " + s.x);
    console.log("s.y = " + s.y);
    console.log("s.z = " + s.z);
    console.log("t.x = " + t.x);
    console.log("t.y = " + t.y);
    console.log("t.z = " + t.z);
    console.log("q.x = " + q.x);
    console.log("q.y = " + q.y);
    console.log("q.z = " + q.z);
    console.log("q.w = " + q.w);
  };


  
  // start stats tracking - fps  
  $(window).load(function(){ 
    // fps
    stats = (function(){
      var stats = new Stats();
      console.log("stats = " + stats);
      stats.setMode(0); // 0: fps, 1: ms
      // Align top-left
      stats.domElement.style.position = 'relative';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      console.log("stats.domElement = " + stats.domElement);
      $("#stats").append( stats.domElement );
      return stats;
    })(); 
  });

  // change camera.aspect on window resize and render w. new projection matrix
  var onWindowResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
  };


  // possibly orient billboards to actor target - render scene
  var render = function() {
    if(active){
      if(billboardsFace){
        billboardsTarget.addVectors(csphere.position, camera.position);
        billboardsTarget.z *= zoom;  // world camera.pos.z follows the radius
                                     // of csphere which corresponds to z*zoom
        Object.keys(billboards).forEach(function(id){
          billboards[id].lookAt(billboardsTarget);
        });
        //console.log("bddT.x = " + billboardsTarget.x + "bddT.y = " + billboardsTarget.y + "bddT.z = " + billboardsTarget.z);
      }
      renderer.render( scene, camera );
    }
  };




  // return factory object Camera3D
  var Camera3D = {

    // start rendering cycle
    animate: function() {
      requestAnimationFrame(Camera3D.animate);
      render();
      if(stats){
        stats.update();
      }
    },

    // activate updates during rendering
    activate: function(){ 
      active = true;
      console.log("Camera3D.activate()");
    },

    // ignore updates during rendering
    freeze: function(){ 
      active = false;
      console.log("Camera3D.freeze()");
    },


    // initialize scene - 'place' camera in scene
    place: function(canvasId, sD, _scope, _scene, _clearColor, _alpha, _fov) {
      console.log("\nCamera3D.place() ");

      // canvas via passed in canvasId, and passed in scene
      canvas = document.getElementById(canvasId);
      gl = getWebGLContext(canvas);  // libs/webGL/cuon-utils.js
      //gl = canvas.getContext("webgl", {premultipliedAlpha: false});
      //gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

      // initialize score from sD passed in by NarrativeController
      score = sD.scene3D.score;

      // initialize reference to NarrativeController scope - for UI sync
      scope = _scope;
      console.log("scope = " + scope);

      // pass in procedural Scene or use declarative i3d-svg scene in index.html
      // adds scene to actors - does NOT call scene.add(scene) => error!
      scene = _scene || new THREE.Scene();
      Camera3D.addActorToScene(sD.scene3D.id, scene);

      // clearColor - default white-transparent
      clearColor = _clearColor || 'transparent'; 
      alpha = _alpha || 0.0;
      console.log("Camera3D: clCol = " + clearColor + " alpha = " + alpha);

      // camera
      fov = _fov || 90.0;
      camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 1000 );

      // default camera.position - could be changed by camera_sphere
      // NOTE! camera.position = {x:csph.pos.x, y:csph.pos.y, z:csph.pos.z + 50}
      camera.position.x = 0.0;
      camera.position.y = 0.0;
      camera.position.z = 50.0;

      // diagnostics
      //report_camera();
    
      // renderer - uses passed in clearColor
      renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: false, alpha: true});

      // setClearColor(color, alpha)
      renderer.setClearColor(clearColor, alpha);
      renderer.setSize( window.innerWidth, window.innerHeight );

      // listen for and handle resize event
      window.addEventListener( 'resize', onWindowResize, false );
  

      // rotate camerasphere (csphere) via CTRL + arrow-keys
      // camera pan/tilt via arrow-keys ONLY
      /*
       * NOTE!!!! These are relative rotations and/or pan/tilt 
       *          They increment a state and are NOT idempotent!!
       *          (every action has an inverse action !!!!!)
       */
      window.addEventListener("keyup", function(e){
        switch(e.keyCode){
          case 38: // up
            if(e.ctrlKey){
              csphere.rotateX(-0.05);
              //Camera3D.rotate(-0.05, 0.0, 0.0);
            }else{
              camera.rotateX(0.05);
            }
            break;

          case 40: // down
            if(e.ctrlKey){
              csphere.rotateX(0.05);
              //Camera3D.rotate(0.05, 0.0, 0.0);
            }else{
              camera.rotateX(-0.05);
            }
            break;

          case 37: // left
            if(e.ctrlKey){
              csphere.rotateY(-0.05);
              //Camera3D.rotate(0.0, -0.05, 0.0);
            }else{
              camera.rotateY(0.05);
            }
            break;

          case 39: // right
            if(e.ctrlKey){
              csphere.rotateY(0.05);
              //Camera3D.rotate(0.0, 0.05, 0.0);
            }else{
              camera.rotateY(-0.05);
            }
            break;


          // test ONLY - verifies that each of C3D.transform(), C3D.rotate() 
          //             and Camera3D.dolly() are absolute and idempotent
          case 81: // q 
            console.log("q: Camera3d.zoom(5) !!");
            Camera3D.zoom(5);
            break;

          case 87: // w
            console.log("w: Camera3d.zoom(-5) !!");
            Camera3D.zoom(-5);   
            break;

          case 90: // z 
            console.log("z: Camera3d.dollyTo(20,0,0) !!");
            Camera3D.dollyTo(20.0, 0.0, 0.0);      // in sync with sliders
            break;

          case 88: // x
            console.log("x: Camera3d.dollyTo(-20,0,0) !!");
            Camera3D.dollyTo(-20.0, 0.0, 0.0);      // in sync with sliders
            break;

          case 67: // c 
            console.log("c: Camera3d.dollyXTo(20) !!");
            Camera3D.dollyXTo(20.0);      // in sync with sliders
            break;

          case 86: // v
            console.log("v: Camera3d.dollyXTo(0) !!");
            Camera3D.dollyXTo(0.0);      // in sync with sliders
            break;

          case 78: // n 
            console.log("n: Camera3d.dollyYTo(20) !!");
            Camera3D.dollyYTo(20.0);      // in sync with sliders
            break;

          case 77: // m
            console.log("m: Camera3d.dollyYTo(0) !!");
            Camera3D.dollyYTo(0.0);      // in sync with sliders
            break;

          case 65: // a 
            console.log("a: Camera3d.dollyZTo(20) !!");
            Camera3D.dollyZTo(20.0);      // in sync with sliders
            break;

          case 83: // s
            console.log("s: Camera3d.dollyZTo(0) !!");
            Camera3D.dollyZTo(0.0);      // in sync with sliders
            break;


          // rotation
          case 68: // d
            if(e.shiftKey){
              Camera3D.rotate({pitch:0.0, yaw:0.05, roll:0.0});
            }else{
              Camera3D.rotate({pitch:0.0, yaw:-0.05, roll:0.0});
            }
            break;

          case 70: // f
            if(e.shiftKey){
              Camera3D.rotateX(0.5);
            }else{
              Camera3D.rotateX(-0.5);
            }
            break;

          case 71: // g
            if(e.shiftKey){
              Camera3D.rotateY(-0.5);
            }else{
              Camera3D.rotateY(0.5);
            }
            break;

          case 72: // h
            if(e.shiftKey){
              Camera3D.rotateZ(-0.5);
            }else{
              Camera3D.rotateZ(0.5);
            }
            break;

          case 74: // j
            if(e.shiftKey){
              Camera3D.rotateAxisAngle(1,0,0, 0.5);
            }else{
              Camera3D.rotateAxisAngle(1,0,0, -0.5);
            }
            break;



          // translation
          case 69: // e
            console.log("e: Camera3d.dolly(20.,20.) !!");
            Camera3D.dolly(20.,20.);
            break;

          case 82: // r
            console.log("r: Camera3d.dolly(-20.,-20.) !!");
            Camera3D.dolly(-20.,-20.);   
            break;

          case 84: // t
            console.log("t: Camera3d.translateX(20.) !!");
            Camera3D.translateX(20.);
            break;

          case 89: // y
            console.log("y: Camera3d.translateX(-20.) !!");
            Camera3D.translateX(-20.);   
            break;

          case 85: // u
            console.log("u: Camera3d.translateY(20.) !!");
            Camera3D.translateY(20.);
            break;

          case 73: // i
            console.log("i: Camera3d.translateY(-20.) !!");
            Camera3D.translateY(-20.);   
            break;

          case 79: // o
            console.log("u: Camera3d.translateZ(20.) !!");
            Camera3D.translateZ(20.);
            break;

          case 80: // p
            console.log("i: Camera3d.translateZ(-20.) !!");
            Camera3D.translateZ(-20.);   
            break;


          case 96: // numpad-0 (+ ctrl)
            if(e.ctrlKey){
              Camera3D.relRotateScale({yaw:-1.0, zoom:0.5});    
            }else{
              Camera3D.relRotateScale({yaw:1.0, zoom:2.0});    
            }
            break;

          // pan/tilt - yaw/pitch
          case 32: // spacebar (+ ctrl)
            if(e.ctrlKey){
              //console.log("spacebar + ctrl: Camera3d.transform({yaw:0.2}) !!");
              //Camera3D.transform({tx:0.0, yaw:-1.0, zoom:0.5});    
              //Camera3D.transform({tx:-20.0});    
              Camera3D.relTranslate(-20.0, -5.0, -100.0);    

              //Camera3D.transform({zoom:0.5});    
              //Camera3D.transform({yaw:0.2});    
              //Camera3D.dollyTo(0.0, 0.0, 0.0);
              //Camera3D.dolly(-10.0, 0.0, 0.0);
              //Camera3D.rotate({yaw:-0.1});
              //Camera3D.rotate({roll:-0.2});
              //Camera3D.rotateAxisAngle(new THREE.Vector3(1,1,0), -0.1);
              //Camera3D.translateZ(5.0); 
              //Camera3D.translateAxisDistance(new THREE.Vector3(1,0,0), 10.0);
            }else{
              //console.log("spacebar: Camera3d.transform({tx:20}) !!");
              //Camera3D.transform({tx:20.0, yaw:1.0, zoom:2.0});    
              //Camera3D.transform({tx:20.0});    
              Camera3D.relTranslate(20.0, 5.0, 100.0);    

              //Camera3D.transform({zoom:2.0});    
              //Camera3D.transform({tx:20.0});     // in sync with sliders
              //Camera3D.dollyTo(10.0, 0.0, 0.0);  // in sync with sliders
              //Camera3D.dolly(10.0, 0.0, 0.0);    // in sync with sliders
              //Camera3D.rotate({yaw:0.1});        // in sync with sliders
              //Camera3D.rotate({roll:0.2});       // in sync with sliders
              //Camera3D.rotateAxisAngle(new THREE.Vector3(1,1,0), 0.1);
              //Camera3D.translateZ(-5.0);    
              //Camera3D.translateAxisDistance(new THREE.Vector3(1,0,0), -10.0);
            }
            break;


          // lookAt
          case 66: // b (+ ctrl)
            if(e.ctrlKey){
              console.log("b + ctrl: Camera3d.billboardsFree() !!");
              Camera3D.billboardsFree();    
            }else{
              console.log("b: Camera3d.billBoardsFaceCamera() !!");
              Camera3D.billboardsFaceCamera();
            }
            break;

          case 76: // l
            console.log("l: Camera3d.lookAt('bb2') above at (0,100,0) !!");
            Camera3D.lookAt("bb2");
            break;

          case 75: // k
            console.log("k: Camera3d.lookAt() => csphere !!");
            Camera3D.lookAt();    
            break;


          case 186: // ;
            console.log(";: Camera3d.clearScene() !!!!!!!!!!!!!!!!!!!!!!");
            Camera3D.clearScene();    
            break;

          default:
            console.log("non-arrow key!");
        }
      });

      // initial render
      setTimeout(function(){
        render();
      }, 1000);
      
      // begin camera control animation
      this.animate();
    },


    // normalize position orientation of csphere and camera
    home: function(norm_zoom){
      console.log("\nCamera3D.home(norm_zoom = " + norm_zoom + ")");
      camera.position.x = 0.0;
      camera.position.y = 0.0;
      camera.up.x = 0.0;
      camera.up.y = 1.0;
      camera.up.z = 0.0;
      camera.rotation.x = 0.0;
      camera.rotation.y = 0.0;
      camera.rotation.z = 0.0;
      camera.fov = fov;
      camera.updateProjectionMatrix();
      console.log("home(): camera.fov = " + camera.fov);

      csphere.position.x = 0.0;
      csphere.position.y = 0.0;
      csphere.position.z = 0.0;
      csphere.rotation.x = 0.0;
      csphere.rotation.y = 0.0;
      csphere.rotation.z = 0.0;

      if(norm_zoom){
        //Camera3D.transform({zoom: 1.0});  // absolute zoom! - wrong
        csphere.radius = radius;            // good - final
      }

      // apparently lookAt NOT needed
      //camera.lookAt(csphere.position);
      csphere.updateMatrix();

      console.log("home(): csphere.matrix:");
      examine_matrix(csphere.matrix);
     
      render();
    },


    // translation of csphere-camera in x-direction:
    // NOTE: transform is jump-cut so absolute and idempotent
    // NOTE: svg uses abstract 100x100 unit viewport whereas webGL
    // uses percentage of screen - both are 100 units.
    // However svg viewbox is independent of viewport scale whereas 
    // webGL translation is scale-sensitive.
    // Therefore webGL translation must be multiplied by zoom
    // In addition, 100% applies to the minimum of the viewport dimensions
    // so the maximum must be scaled by aspect ratio.
    dollyXTo: function(_x){
      console.log("\ndollyXTo _x = " + _x);
      console.log("dollyXTo _x*zoom = " + _x*zoom);
      _x = _x*zoom;
      aspect = window.innerWidth/window.innerHeight;
      csphere.position.x = _x*aspect;
    },

    // translation of csphere-camera in y-direction:
    // NOTE: transform is jump-cut so absolute and idempotent
    // NOTE: svg Y-axis positive direction is down wheras webGL Y-axis
    // positive direction is up
    // Therefore webGL dollyYTo is opposite sign to svg
    dollyYTo: function(_y){
      console.log("\ndollyYTo _y = " + _y);
      console.log("dollyYTo _y*zoom = " + _y*zoom);
      _y = _y*zoom;
      // svg and webGL differ in y-axis orientation
      csphere.position.y = -_y;
    },

    // translation of csphere-camera in z-direction:
    // NOTE: transform is jump-cut so absolute and idempotent
    dollyZTo: function(_z){
      _z = -_z*zoom;
      csphere.position.z = _z;
    },

    // translation of csphere-camera to (x,y,z), i.e. in arbitrary direction:
    // NOTE: transform is jump-cut so absolute and idempotent
    dollyTo: function(x,y,z){
      console.log("\ndollyTo: x = " + x + " y = " + y + " z = " + z);

      matrixb.makeTranslation(x, y, z);
      console.log("dollyTo: initially csphere.matrix is:");
      examine_matrix(matrixb);

      console.log("dollyTo: matrixb:");
      examine_matrix(matrixb);

      csphere.applyMatrix(matrixb);
      console.log("dollyTo: afyer applying matrixb, csphere.matrix is:");
      examine_matrix(csphere.matrix);

      // sync slider_dollyx/y - must force angular ui update by $apply!
      scope.$apply(function(){
        scope.origin.x = x/zoom;
        scope.origin.y = y/zoom;
        console.log("scope.origin.x = " + scope.origin.x);
        console.log("scope.origin.y = " + scope.origin.y);
      });
    },


    // change length of csphere radius:
    // moves camera closer/further from viewing target at center of csphere
    // NOTE: transform is jump-cut so absolute and idempotent
    // NOTE: use for zoom
    // NOTE: 1 <= _zoom <= 100, so .1 <= zoom <= 10 
    // NOTE: zoom = 1 => no effect on camera.position.z (=== z)
    // NOTE: radius is a constant (default is 50)
    dilateRadiusTo: function(_zoom){
      zoom = _zoom;  // NarrativeController sends 0.1*slider_reading !
      var s = zoom/prev_zoom;
      console.log("\ndilateToRadius zoom = " + zoom + " s = " + s);

      // prev!
      //console.log("zoom = " + zoom + "zoom/prev_zoom = " + zoom/prev_zoom);
      //camera.position.z = radius*zoom;  // good
      //csphere.position.z = radius*zoom - radius;  // good
      matrixz.identity();
      matrixz.multiplyScalar(s);
      csphere.applyMatrix(matrixz);       // good - final
      prev_zoom = zoom;

      // new - expt - doesn't work with ctrl-arrow csphere rotation
      //csphere.radius = radius*zoom;   
      csphere.updateMatrix();
      console.log("dilateRadiusToZoom: zoom = " + zoom + " csph.r = " + radius*zoom); 
      console.log("csphere.matrix:");
      //examine_matrix(csphere.matrix);
      //report_camera(true); // NO change since prps are local - rel to csphere
    },



    // translation of csphere-camera to (x,y,z), i.e. in arbitrary direction:
    // transform is relative and cumulative!!
    dolly: function(_x,_y,_z){
      var x = _x || 0.0;
      var y = _y || 0.0;
      var z = _z || 0.0;

      console.log("\n&&&dolly: x = " + x + " y = " + y + " z = " + z);
      matrixb.makeTranslation(x, y, z);
      console.log("dolly: matrixb:");
      examine_matrix(matrixb);
      csphere.applyMatrix(matrixb);
      console.log("dolly: after applyMatrix(matrixb) csphere.matrix:");
      examine_matrix(csphere.matrix);

      // syncUI
      scope.$apply(function(){
        scope.origin.x = parseFloat(scope.origin.x) + parseFloat(x/zoom);
        scope.origin.y = parseFloat(scope.origin.y) + parseFloat(y/zoom);
      });
    },

    // translation on x-axis
    // transform is relative and cumulative!!
    translateX: function(d){
      csphere.translateX(d);
      scope.$apply(function(){  // sync dolly-x slider
        scope.origin.x = parseFloat(scope.origin.x) + parseFloat(d/zoom);
      });
    },

    // translation on y-axis
    // transform is relative and cumulative!!
    translateY: function(d){
      csphere.translateY(d);
      scope.$apply(function(){  // sync dolly-x slider
        scope.origin.y = parseFloat(scope.origin.y) + parseFloat(d/zoom);
      });
    },

    // translation on z-axis
    // transform is relative and cumulative!!
    translateZ: function(d){
      csphere.translateZ(d);    // no sync - no dolly-z slider
    },

    // translation on arbitrary axis
    // transform is relative and cumulative!!
    // axis is Vector3 - will be normalized if not already
    translateAxisDistance: function(axis, d){
      console.log("\ntranslateAxisDistance:");
      axis.normalize();
      csphere.translateOnAxis(axis, d);
      var ax = x_axis.dot(axis);
      var ay = y_axis.dot(axis);

      // diagnostics
      console.log("axis: x=" + axis.x + " y="+axis.y+" z="+axis.z);
      console.log("ax = " + ax + " ay = " + ay + " d = " + d);

      // sync UI
      scope.$apply(function(){  // sync dolly-x slider
        scope.origin.x = parseFloat(scope.origin.x) + parseFloat(ax * d/zoom);
        scope.origin.y = parseFloat(scope.origin.y) + parseFloat(ay * d/zoom);
      });
    },



    // modify camera.fov
    // Operation is relative and cumulative!
    // NOTE: Using dilateRadiusToZoom for zoom-slider
    //       Therefore do NOT update zoom-slider !!!!!!!!!!!!!!!!!!
    // using test keys q=> w=>-5 for incrementing camera.fov
    zoom: function(degree_incr){
      var z = camera.fov;
      z = z + degree_incr;
      if(z >170 || z < 10) return;  // limit fov extremes
      camera.fov = z; 
      camera.updateProjectionMatrix();
    },


    // rotate the camerasphere csphere by ordered pitch, yaw, roll
    // NOTE: roll is seldom needed
    // exp: makerotationFromEuler(new THREE.Euler( Math.PI / 2, Math.PI, 0 ));
    // NOTE! transform is relative and cumulative!!
    rotate: function(params){
      var pitch = params.pitch || 0.0;
      var yaw = params.yaw || 0.0;
      var roll = params.roll || 0.0;
      console.log("camera3D.rotate: p= " + pitch + " y= " + yaw + " r= " + roll);

      matrixa.makeRotationFromEuler(new THREE.Euler(pitch, yaw, roll));
      csphere.applyMatrix(matrixa);
    },

    // pitch
    // NOTE! transform is relative and cumulative!!
    rotateX: function(angle){
      csphere.rotateX(angle);
    },

    // yaw
    // NOTE! transform is relative and cumulative!!
    rotateY: function(angle){
      csphere.rotateY(angle);
    },

    // roll
    // NOTE! transform is relative and cumulative!!
    rotateZ: function(angle){
      csphere.rotateZ(angle);
    },


    // rotation around arbitraray axis
    // NOTE! transform is relative and cumulative!!
    // axis is Vector3 - will be normalized if not already
    rotateAxisAngle: function(x,y,z, angle){
      var axis = new THREE.Vector3(x,y,z);
      axis.normalize();
      csphere.rotateOnAxis(axis, angle);
    },



    // relative translation
    relTranslate: function(x, y, z){
      console.log("\n\n@@@@ Camera3D.relTranslation:");
      console.log("before relTranslate: csphere.pos.x = " + csphere.position.x);
      console.log("before relTranslate: csphere.pos.y = " + csphere.position.y);
      console.log("before relTranslate: csphere.pos.z = " + csphere.position.z);
      csphere.position.x += x;
      csphere.position.y += y;
      csphere.position.z += z;
      console.log("after relTranslate: csphere.pos.x = " + csphere.position.x);
      console.log("after relTranslate: csphere.pos.y = " + csphere.position.y);
      console.log("after relTranslate: csphere.pos.z = " + csphere.position.z);
    },
    

    // relative rotation/scale
    relRotateScale: function(params){
      console.log("\n\n@@@@ Camera3D.relRotationScale:");
      Object.keys(params).forEach(function(p){
        console.log("params." + p + " has val = " + params[p]);
      });
      var pitch = params.pitch || 0.0;
      var yaw = params.yaw || 0.0;
      var roll = params.roll || 0.0;
      var scale = params.zoom || 1.0;

      // all vals
      //console.log("x= " + x + " y= " + y + " z= " + z);
      //console.log("p= " + pitch + " y= " + yaw + " r= " + roll);
      //console.log("scale = " + scale);

      console.log(" initially: csphere.position.x = " + csphere.position.x);
      console.log(" initially: csphere.position.y = " + csphere.position.y);
      console.log(" initially: csphere.position.z = " + csphere.position.z);
      console.log(" initially: csphere.rotation.x = " + csphere.rotation.x);
      console.log(" initially: csphere.rotation.y = " + csphere.rotation.y);
      console.log(" initially: csphere.rotation.z = " + csphere.rotation.z);
      console.log(" initially: csphere.scale.x = " + csphere.scale.x);
      console.log(" initially: csphere.scale.y = " + csphere.scale.y);
      console.log(" initially: csphere.scale.z = " + csphere.scale.z);

      // rotate-scale-translate (by x/y/z* scale)
      matrixa.makeRotationFromEuler(new THREE.Euler(pitch, yaw, roll));
      matrixa.multiplyScalar(scale);  // scale
      //console.log("before applyMatrix, rot-scale matrixa:");
      //examine_matrix(matrixa);
            
      // apply relative rotation-scale to csphere
      csphere.applyMatrix(matrixa);
      console.log("after csphere.applyMatrix(matrixa) final csphere.matrix:");
      //examine_matrix(csphere.matrix);
      console.log("after rel r-s: csphere.position.x = " + csphere.position.x);
      console.log("after rel r-s: csphere.position.y = " + csphere.position.y);
      console.log("after rel r-s: csphere.position.z = " + csphere.position.z);
      console.log("after rel r-s: csphere.rotation.x = " + csphere.rotation.x);
      console.log("after rel r-s: csphere.rotation.y = " + csphere.rotation.y);
      console.log("after rel r-s: csphere.rotation.z = " + csphere.rotation.z);
      console.log("after rel r-s: csphere.scale.x = " + csphere.scale.x);
      console.log("after rel r-s: csphere.scale.y = " + csphere.scale.y);
      console.log("after rel r-s: csphere.scale.z = " + csphere.scale.z);
    },


    // transform the camerasphere csphere by combination of translation,
    // rotation and zoom
    // NOTE: params = { tx:x, ty:y, tz:z, pitch:p, yaw:y, roll:r, zoom:z}
    // NOTE: zoom should be in [.1, 10] with zoom=1 being the identity and
    //       values approaching .1 zooming in (less image shown - details larger) 
    //       and values approaching 10 zooming out (more image revealed - details smaller)
    /*
     *  NOTE!!! transform ROTATION and SCALE are relative to csphere initial matrix
     *  NOTE!!! POSITION is absolute and idempotent!
     *          The (tx,ty,tz) vector passed in is a position target for
     *          a jump cut!
     *  NOTE: usage: <1> choose position target for shot
     *               <2a> use C3D.lookAt(id) to orient camera OR
     *               <2b> calculate desired rotation increment from present
     *               <3> check present csphere radius (camera d to target)
     *                   (look at csphere.scale.x/y/z or use 
     *                    examine_matrix(csp.m) to get s.x/y/z)
     *                   Then since shot d = transf-zoom * zoom * radius
     *                   transf-zoom = (desired shot d)/(zoom*radius)
     *                   RECALL: zoom is a var which tracks zoom (.1-10) with
     *                           .1 smallest d to target, 1 'norm', 10 farthest d
     *                           radius is a const var string the initial 'norm
     *                           csphere radius corresponding to zoom=1 
     *                           The default radius = 50 which together with
     *                           default fov=90 should see exactly a 100x100
     *                           svg-viewbox/webGL-clipspace
     */              
    transform: function(params){
      console.log("\n\n@@@@ Camera3D.transform:");
      Object.keys(params).forEach(function(p){
        console.log("params." + p + " has val = " + params[p]);
      });
      var x = params.tx || 0.0;
      var y = params.ty || 0.0;
      var z = params.tz || 0.0;
      var pitch = params.pitch || 0.0;
      var yaw = params.yaw || 0.0;
      var roll = params.roll || 0.0;
      var scale = params.zoom || 1.0;

      // all vals
      //console.log("x= " + x + " y= " + y + " z= " + z);
      //console.log("p= " + pitch + " y= " + yaw + " r= " + roll);
      //console.log("scale = " + scale);

      // examine initial csphere matrix
      //console.log("initial csphere.matrix:");
      //examine_matrix(csphere.matrix);
      console.log("initial: csphere.position.x = " + csphere.position.x);
      console.log("initial: csphere.position.y = " + csphere.position.y);
      console.log("initial: csphere.position.z = " + csphere.position.z);
      console.log("initial: csphere.rotation.x = " + csphere.rotation.x);
      console.log("initial: csphere.rotation.y = " + csphere.rotation.y);
      console.log("initial: csphere.rotation.z = " + csphere.rotation.z);
      console.log("initial: csphere.scale.x = " + csphere.scale.x);
      console.log("initial: csphere.scale.y = " + csphere.scale.y);
      console.log("initial: csphere.scale.z = " + csphere.scale.z);


      // absolute translation - matrixb
      console.log("before applyMatrix: csphere.pos.x = " + csphere.position.x);
      matrixb.makeTranslation(zoom*x, zoom*y, zoom*z);
      //console.log("before applyMatrix, translation matrixb:");
      examine_matrix(matrixb);
      
      // apply absolute translation to csphere
      csphere.applyMatrix(matrixb);
      console.log("after applyMatrix: csphere.pos.x = " + csphere.position.x);
      //console.log("after csphere.applyMatrix(matrixb) csphere.matrix:");
      //examine_matrix(csphere.matrix);
      console.log("after abs tr: csphere.position.x = " + csphere.position.x);
      console.log("after abs tr: csphere.position.y = " + csphere.position.y);
      console.log("after abs tr: csphere.position.z = " + csphere.position.z);
      console.log("after abs tr: csphere.rotation.x = " + csphere.rotation.x);
      console.log("after abs tr: csphere.rotation.y = " + csphere.rotation.y);
      console.log("after abs tr: csphere.rotation.z = " + csphere.rotation.z);
      console.log("after abs tr: csphere.scale.x = " + csphere.scale.x);
      console.log("after abs tr: csphere.scale.y = " + csphere.scale.y);
      console.log("after abs tr: csphere.scale.z = " + csphere.scale.z);

      // rotate-scale-translate (by x/y/z* scale)
      matrixa.makeRotationFromEuler(new THREE.Euler(pitch, yaw, roll));
      matrixa.multiplyScalar(scale);  // scale
      //console.log("before applyMatrix, rot-scale matrixa:");
      //examine_matrix(matrixa);
            
      // apply relative rotation-scale to csphere
      csphere.applyMatrix(matrixa);
      console.log("after csphere.applyMatrix(matrixa) final csphere.matrix:");
      //examine_matrix(csphere.matrix);
      console.log("after rel r-s: csphere.position.x = " + csphere.position.x);
      console.log("after rel r-s: csphere.position.y = " + csphere.position.y);
      console.log("after rel r-s: csphere.position.z = " + csphere.position.z);
      console.log("after rel r-s: csphere.rotation.x = " + csphere.rotation.x);
      console.log("after rel r-s: csphere.rotation.y = " + csphere.rotation.y);
      console.log("after rel r-s: csphere.rotation.z = " + csphere.rotation.z);
      console.log("after rel r-s: csphere.scale.x = " + csphere.scale.x);
      console.log("after rel r-s: csphere.scale.y = " + csphere.scale.y);
      console.log("after rel r-s: csphere.scale.z = " + csphere.scale.z);


      // sync slider_dollyx/y - must force angular ui update by $apply!
      console.log("\n&&& syncUI: x = " + x + " y = " + y + " scale = " + scale);
      //Camera3D.syncUI(x, y, scale);
      scope.$apply(function(){
        zoom = scale * zoom; 
        prev_zoom = zoom;
        console.log("before set UI: zoom = p_zoom = " + zoom);
        console.log("before set UI: csphere.radius = " + radius*zoom);
        console.log("before set UI: scope.ui.zoom = " + scope.ui.zoom);
        console.log("before set UI: scope.origin.x = " + scope.origin.x);
        console.log("before set UI: scope.origin.y = " + scope.origin.y);

        // set UI
        scope.ui.zoom = 10.0 * zoom;
        scope.origin.x = x/zoom;
        scope.origin.y = y/zoom;
        
        console.log("after set UI: csphere.radius = " + radius*zoom);
        console.log("after set UI: scope.ui.zoom = " + scope.ui.zoom);
        console.log("after set UI: scope.origin.x = " + scope.origin.x);
        console.log("after set UI: scope.origin.y = " + scope.origin.y);
      });
    },


    syncUI: function(x, y, scale){
      var scale = scale || 1.0;
      console.log("\n\nsyncUI: x= " + x + " y= " + y + " scale= " + scale);

      // sync slider_dollyx/y - must force angular ui update by $apply!
      scope.$apply(function(){
        console.log("before $apply: x= " + x + " y= " + y + " scale= " + scale);
        console.log("before $apply: zoom = " + zoom + " scale = " + scale);
        console.log("before $apply: csphere.radius = " + radius*zoom);
        
        // sync
        zoom = scale * zoom; 
        if(scale !== 1.0){
          console.log("sync scope.ui.zoom");
          scope.ui.zoom = 10.0 * zoom;
          prev_zoom = zoom;
        }
        if(x){ scope.origin.x = x/zoom; }
        if(y){ scope.origin.y = y/zoom; }

        console.log("$apply: zoom = p_zoom = sc.ui.z " + zoom);
        console.log("$apply: csphere.radius = " + radius*zoom);
        console.log("$apply: scope.ui.zoom = " + scope.ui.zoom);
        console.log("$apply: scope.origin.x = " + scope.origin.x);
        console.log("$apply: scope.origin.y = " + scope.origin.y);
        console.log("$apply: csphere.position.x = " + csphere.position.x);
        console.log("$apply: csphere.position.y = " + csphere.position.y);
        console.log("$apply: csphere.position.z = " + csphere.position.z);
        console.log("$apply: csphere.rotation.x = " + csphere.rotation.x);
        console.log("$apply: csphere.rotation.y = " + csphere.rotation.y);
        console.log("$apply: csphere.rotation.z = " + csphere.rotation.z);
        console.log("$apply: csphere.scale.x = " + csphere.scale.x);
        console.log("$apply: csphere.scale.y = " + csphere.scale.y);
        console.log("$apply: csphere.scale.z = " + csphere.scale.z);
        console.log("$apply: csphere.quaternion.x = " + csphere.quaternion.x);
        console.log("$apply: csphere.quaternion.y = " + csphere.quaternion.y);
        console.log("$apply: csphere.quaternion.z = " + csphere.quaternion.z);
        console.log("$apply: csphere.quaternion.w = " + csphere.quaternion.w);
      });
    },


    // pan/tilt camera to point at specific actor/billboard 
    // no-arg default is to look at center of csphere - camerasphere  
    lookAt: function(id){
      if(!id){
        console.log("camera.lookAt(csphere.position)");
        camera.lookAt(csphere.position);
        return;
      }
      if(actors[id]){
        console.log("camera.lookAt(" + id + ") - actor");
        camera.lookAt(actors[id].position);
        return;
      }
      if(billboards[id]){
        console.log("camera.lookAt(" + id + ") - billboard");
        camera.lookAt(billboards[id].position);
        return;
      }
      console.log("id = " + id + " not recognized!");
    },

    // set csphere.pos + camera.pos => camera world position as the view 
    // target for all billboard o3Ds
    billboardsFaceCamera: function(){
      console.log("billboardsFace() => csphere+camera");
      billboardsFace = true;
    },

    // decouple billboards from possible orientation to actor target
    billboardsFree: function(){
      billboardsFace = false;
    },


    // NOTE! camera_sphere sets camera.position at csphere position but
    // camera.poition.z = csphere.position.z + 50 looking to center of csphere
    // NOTE! default camera.position = {x:0.0, y:0.0, z:50.0}
    attachAsSurfaceChild: function(camerasphere, _radius){
      // set camera position based on camerasphere position and radius
      // camera is on the surface of camerasphere looking at center
      // camera is thus at distance radius in z-direction from csph position
      camera.position.x = camerasphere.position.x;
      camera.position.y = camerasphere.position.y;
      camera.position.z = camerasphere.position.z;
      camera.position.z += _radius;

      // set radius - keep as const (used in zoom normalization)
      radius = _radius;

      // orient camera to look at center of camerasphere
      //camera.lookAt(camerasphere.position);
      camera.lookAt(scene.position);

      // add camera as child of camerasphere
      camerasphere.add(camera);

      // keep a reference to camerasphere
      // NOTE! csphere === Camera3D.camera.parent
      csphere = camerasphere;

      // set dynamic csphere.radius
      csphere.radius = _radius;
    },


    // add a passed in actor Object3D to the scene
    addActorToScene: function(id, o3D){
      // the scene is an Object3D and is the root of the scenegraph tree
      if(o3D !== scene){
        scene.add(o3D);
      }
      //console.log("@@actor " + id + " added with ref = " + o3D);
      actors[id] = o3D;
    },
    // remove actor Object3D from the scene
    removeActorFromScene: function(id, o3D){
      scene.remove(o3D);
      delete actors[id];
    },
    reportActors: function(){
      return Object.keys(actors); // ids
    },

    // add a passed in actor/billboard Object3D to the scene
    addBillboardToScene: function(id, o3D){
      scene.add(o3D);
      //console.log("##bb " + id + " added with ref = " + o3D);
      billboards[id] = o3D;
      actors[id] = o3D;
    },
    // remove actor/billboard Object3D from the scene
    removeBillboardFromScene: function(id){
      scene.remove(billboards[id]);
      delete billboards[id];
      delete actors[id];
    },
    reportBillboards: function(){
      return Object.keys(billboards); // ids
    },


    // remove current scene
    clearScene: function(){
      console.log("Camera3D.clearScene() !!!");
      //scene = new THREE.Scene();

      // prevent directives from being added to cleared scene
      // new THREE.Scene must be created with Camera3D.place(sD)
      scene.add = function(o){};

      // setClearColor(color, alpha)
      renderer.setClearColor(clearColor, alpha);
      renderer.setSize( window.innerWidth, window.innerHeight );
      //renderer.render(scene, camera);
    },

    // get webgl rendering context
    gl: function(){
      return gl;
    }
  };//Camera3D
  return Camera3D;
});
