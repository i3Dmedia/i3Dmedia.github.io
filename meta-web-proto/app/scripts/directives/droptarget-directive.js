/*
 * droptarget-directive.js
 * HTML5 darg&drop to droptarget attribute element
 */

// returns directive definition object DDO
angular.module('app').directive("droptarget", function(){
  "use strict";

  console.log("\ndroptarget-directive running!");

  var target;
  var files;
  var file;
  var reader;
  var img;

  var dropIgnore = function(e){
    e.stopPropagation();
    e.preventDefault();
  }
  var drop = function(e){
    e.stopPropagation();
    e.preventDefault();
    files = e.dataTransfer.files;
    if(files.length > 0){
      file = files[0];  // take only the first file
      reader = new FileReader();
      reader.onloadend = function(){
        console.log("image loaded");
        target.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",reader.result);
      }
      reader.readAsDataURL(file);
    }
  }

  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    link: function($scope, elem, attrs){
      console.log("droptarget-directive link-f running!");
      target = document.getElementById("svgbitmap");
      target.addEventListener('dragenter', dropIgnore, false);
      target.addEventListener('dragexit', dropIgnore, false);
      target.addEventListener('dragover', dropIgnore, false);
      target.addEventListener('drop', drop, false);
    }//link-f  
  }//DDO
});

