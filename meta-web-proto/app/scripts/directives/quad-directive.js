/*
 * quad-directive.js
 * loads quadralateral
 */

// returns directive definition object DDO
// @TODO - later pass in Camera3D which obtains 'gl' context
angular.module('app').directive("quad", function(){
  "use strict";

  // vars
  var canvas;
  var gl;
  var n;
  var vertices;
  var vertexBuffer;
  var a_Position;

  var initVertexBuffers = function(gl) {
    // clip-space is [-1,1]x[-1,1] so quad will exactly fill clip-space
    vertices = new Float32Array([
      //-0.5, 0.5,   -0.5, -0.5,   0.5, 0.5, 0.5, -0.5
      -1.0, 1.0,   -1.0, -1.0,   1.0, 1.0, 1.0, -1.0
    ]);
    var n = 4; // The number of vertices
  
    // Create a buffer object
    vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  
    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
    a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }
    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  
    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
  
    return n;
  }

  // Vertex shader program
  var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '}\n';
  
  // Fragment shader program
  var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

  console.log("\nquad-directive running!");

  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){
      console.log("quad-directive link-f running!");

      // Retrieve <canvas> element
      canvas = document.getElementById('3D');
    
      // Get the rendering context for WebGL
      gl = getWebGLContext(canvas);
      if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
      }
    
      // Initialize shaders
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
      }
    
      // Write the positions of vertices to a vertex shader
      n = initVertexBuffers(gl);
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
    
      // Specify the color for clearing <canvas>
      gl.clearColor(0.0, 0.0, 1.0, 0.2);
    
      // Clear <canvas>
      gl.clear(gl.COLOR_BUFFER_BIT);
    
      // Draw the rectangle
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
    }
  }//DDO
});


