/*
 * point-directive.js
 * loads webGL multi-pixel point for quadralateral
 */

// returns directive definition object DDO
// @TODO - later pass in Camera3D which obtains 'gl' context
angular.module('app').directive("point", function(){
  "use strict";

  // vars
  var canvas;
  var gl;
  var image;
  var a_Position;

  // Vertex shader program
  var VSHADER_SOURCE = 
    'attribute vec4 a_Position;\n' + // attribute variable
    'void main() {\n' +

    '  gl_Position = a_Position;\n' + // Set the vertex coordinates of the point
    '  gl_PointSize = 50.0;\n' +                    // Set the point size
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
      console.log("canvas.w = " + canvas.width + " h = " + canvas.height);
      console.log("w.iw = " + window.innerWidth+ " w.ih = " + window.innerHeight);
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
      // set attribute var - pass vertex position to attribute variable
      gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

      // NOTE: gl.clear() hides 3D objects until camera moves ?! 
      // NOTE: default val of COLOR_BUFFER is (black) transparent - 0,0,0,0.0
      // set clearColor (white) transparent
      gl.clearColor(1.0, 1.0, 1.0, 0.0);
      // set clearColor blue semi-transparent
      //gl.clearColor(0.0, 0.0, 1.0, 0.2);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // draw a point
      gl.drawArrays(gl.POINTS, 0, 1);

//      image = new Image();
//      image.onload = function(){
//        context.drawImage(image, 256, 256);
//        console.log("image loaded and drawn");
//      }
//      image.src = "./images/1.png";
    }//link-f  
  }//DDO
});

