/*
 * point-directive.js
 * loads webGL multi-pixel point for quadralateral
 */

// returns directive definition object DDO
// @TODO - later pass in Camera3D which obtains 'gl' context
angular.module('app').directive("point", function(){
  "use strict";

  // vars
  var image;
  var canvas;
  var gl;
  var a_Position;
  var g_points = []; // The array for the position of a mouse press
  var click = function(ev, gl, canvas, a_Position) {
    console.log("click!");

    // canvas mouse coords
    var x = ev.clientX; // x coordinate of a mouse pointer
    var y = ev.clientY; // y coordinate of a mouse pointer
    var z = 0.0;
    var rect = ev.target.getBoundingClientRect() ;
    console.log("canvas.w = " + canvas.width + " h = " + canvas.height);
    console.log("rect.wpx = " + rect.width + " rect.hpx = " + rect.height);
    console.log("canvas.x = " + x + " canvas.y = " + y);

    // webGL projected space RHS 3D coords
    x = (x - rect.width/2)/(0.5*rect.width);
    y = (rect.height/2 - y)/(0.5*rect.height);
    console.log("webGL.x = " + x + " webGL.y = " + y);

    // Store the coordinates to g_points array
    // all rects will be drawn each time UNLESS the array is emptied
    // (set to []) which draws only the newest rectangle click-selected
    //g_points = [];
    g_points.push(x); 
    g_points.push(y);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // draw all rectangles selected
    var len = g_points.length;
    console.log("g_points.length = " + len);
    for(var i = 0; i < len; i += 2) {
      z = -i * 0.001;
      console.log("x= " + g_points[i] + " y=" + g_points[i+1] + " z=" + z)
      // Pass the position of a point to a_Position variable
      gl.vertexAttrib3f(a_Position, g_points[i], g_points[i+1], z);

      // Draw
      gl.drawArrays(gl.POINTS, 0, 1);
    }
  };

  // Vertex shader program
  var VSHADER_SOURCE = 
    'attribute vec4 a_Position;\n' + // attribute variable
    'void main() {\n' +

    '  gl_Position = a_Position;\n' + // Set the vertex coordinates of the point
    '  gl_PointSize = 10.0;\n' +                    // Set the point size
    '}\n';
  
  // Fragment shader program
  var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color
    '}\n';

  console.log("\npoint-directive running!");


  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){
      console.log("point-directive link-f running!");

      // Retrieve <canvas> element
      canvas = document.getElementById('3D');  
      if (!canvas) { 
        console.log('Failed to retrieve the <canvas> element');
      } 
      // Get the rendering context for webGL
      gl = canvas.getContext('webgl');
      console.log("webGL context = " + gl);
      
      // initialize shaders
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
      }

      // get the storage location (pointer) of a_Position
      a_Position = gl.getAttribLocation(gl.program, 'a_Position');
      if (a_Position < 0) {        // is it a valid address?
        console.log('Failed to get the storage location of a_Position');
        return;
      }

      // NOTE: gl.clear() hides 3D objects until camera moves ?! 
      // NOTE: default val of COLOR_BUFFER is (black) transparent - 0,0,0,0.0
      // set clearColor (white) transparent
      gl.clearColor(1.0, 1.0, 1.0, 0.0);
      // set clearColor blue semi-transparent
      //gl.clearColor(0.0, 0.0, 1.0, 0.2);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Register function (event handler) to be called on a mouse press
      canvas.onmousedown = function(ev){
        console.log("mousedown!");
        click(ev, gl, canvas, a_Position); 
      };


//      image = new Image();
//      image.onload = function(){
//        context.drawImage(image, 256, 256);
//        console.log("image loaded and drawn");
//      }
//      image.src = "./images/1.png";
    }//link-f  
  }//DDO
});

