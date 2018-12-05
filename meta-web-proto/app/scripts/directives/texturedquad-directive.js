/*
 * texturedquad-directive.js
 * loads image by to webGL texture for quadralateral
 */

// returns directive definition object DDO
// @TODO - later pass in Camera3D which obtains 'gl' context
angular.module('app').directive("texturedquad", function(){
  "use strict";

  // vars
  var canvas;
  var gl;
  var w, h;

  // vars for initVertexBuffers
  var verticesTexCoords;
  var vertexTexCoordBuffer;
  var n;
  var FSIZE;
  var a_Position;
  var a_TexCoord;

  // vars for initTextures
  var texture;
  var u_Sampler;
  var image;


  var initVertexBuffers = function(gl) {
    // clip-space is [-1,1]x[-1,1] so quad will exactly fill clip-space
    // NOTE! Float32Array is WebKit-only! (otherwise - WebGLFloatArray)
    verticesTexCoords = new Float32Array([
      // Vertex coordinates, texture coordinate
//      -0.5,  0.5,   0.0, 1.0,
//     -0.5, -0.5,   0.0, 0.0,
//       0.5,  0.5,   1.0, 1.0,
//       0.5, -0.5,   1.0, 0.0,
      // Vertex coordinates, texture coordinate
      -1.0,  1.0,   0.0, 1.0,
      -1.0, -1.0,   0.0, 0.0,
       1.0,  1.0,   1.0, 1.0,
       1.0, -1.0,   1.0, 0.0,
    ]);
    n = 4; // The number of vertices
  
    // Create the buffer object
    vertexTexCoordBuffer = gl.createBuffer();
    if (!vertexTexCoordBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  
    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);
  
    FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
    //Get the storage location of a_Position, assign and enable buffer
    a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
    gl.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object
  
    // Get the storage location of a_TexCoord
    a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
    if (a_TexCoord < 0) {
      console.log('Failed to get the storage location of a_TexCoord');
      return -1;
    }
    // Assign the buffer object to a_TexCoord variable
    gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
    gl.enableVertexAttribArray(a_TexCoord);  // Enable the assignment of the buffer object
  
    return n;
  }
  
  var initTextures = function(gl, n) {
    texture = gl.createTexture();   // Create a texture object
    if (!texture) {
      console.log('Failed to create the texture object');
      return false;
    }
  
    // Get the storage location of u_Sampler
    u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
    if (!u_Sampler) {
      console.log('Failed to get the storage location of u_Sampler');
      return false;
    }
    image = new Image();  // Create the image object
    if (!image) {
      console.log('Failed to create the image object');
      return false;
    }
    // Register the event handler to be called on loading an image
    image.onload = function(){ loadTexture(gl, n, texture, u_Sampler, image); };
    // Tell the browser to load an image
    image.src = './images/sky.jpg'
  
    return true;
  }
  
  var loadTexture = function(gl, n, texture, u_Sampler, image) {

    // rudolph !!! NOTE: texture.width (height) undefined
    w = image.width; 
    h = image.height;
    console.log("image.w = " + w + " image.h = " + h);

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture);
  
    // Set the texture parameters
    // rudolph! changed gl.LINEAR to gl.LINEAR_MIPMAP_LINEAR
    // FAILS! says texture is NOT POT!? But it is reported as POT by tools
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    // added by rudolph! to support MIPMAP change just above
    //gl.generateMipmap(gl.TEXTURE_2D);
    // MAG_FILTER added by rudolph! - doesn't make any difference ?!
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);


    // Set the texture image
    // rudolph! changed two RGB to RGBA
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler, 0);
    
    gl.clear(gl.COLOR_BUFFER_BIT);   // Clear <canvas>
  
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw the rectangle
  }

  // Vertex shader program
  var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '}\n';

  // Fragment shader program
  var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';


  console.log("\ntexturedquad-directive running!");


  // return DDO
  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    templateNamespace: 'svg',
    link: function($scope, elem, attrs){

      console.log("\ntexturedquad-directive link-f running!");

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

      // Set the vertex information
      var n = initVertexBuffers(gl);
      if (n < 0) {
        console.log('Failed to set the vertex information');
        return;
      }

      // NOTE: gl.clear() hides 3D objects until camera moves ?! 
      // NOTE: default val of COLOR_BUFFER is (black) transparent - 0,0,0,0.0
      //gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // set clearColor (white) transparent
      gl.clearColor(1.0, 1.0, 1.0, 0.0);
      // set clearColor blue semi-transparent
      //gl.clearColor(0.0, 0.0, 1.0, 0.2);
      gl.clear(gl.COLOR_BUFFER_BIT);
        
      // Set texture
      if (!initTextures(gl, n)) {
        console.log('Failed to intialize the texture.');
        return;
      }
    }
  }//return DDO
});

