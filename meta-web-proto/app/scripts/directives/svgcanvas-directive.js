/*
 * svgcanvas-directive.js
 * loads image to html5 canvas
 */

// returns directive definition object DDO
angular.module('app').directive("svgcanvas", function(){
  "use strict";

  var context;
  var image;

  console.log("\nsvgcanvas-directive running!");

  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    link: function($scope, elem, attrs){
      console.log("svgcanvas-directive link-f running!");

      // context
      //context = elem.getContext("2d");
      context = document.getElementById("svgc").getContext('2d');
      context.rect(128, 128, 64, 64);
      context.fillSyle="#ff0000";
      context.fill();
//      image = new Image();
//      image.onload = function(){
//        context.drawImage(image, 256, 256);
//        console.log("image loaded and drawn");
//      }
//      image.src = "./images/1.png";
    }//link-f  
  }//DDO
});

