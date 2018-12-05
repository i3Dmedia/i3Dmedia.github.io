/*
 * resize-directive.js
 * svg resize capability using small rectangular 'handle' which
 * translates mousedown mouse moves on its stroke boundary to
 * scale transformations on its parent group.
 * Thus the intended minimal structure of a resize group is:
 * <g ...>
 *   <image or foreignOject or ? .../>
 *   <rect class='resize' ../>
 * </g>
 */

// provides resize to group containing handle-element class='resize'
// returns directive definition object DDO
angular.module('app').directive("resize", function(){
  "use strict";

  var target = null; // NOTE! - parent of resize-decorated element
  var matrix = [];
  var matrix_cfs = "";
  var z = null; //update dynamically in handler
  var active = false;
  var control = null;

  console.log("resize-directive running!");

  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    link: function($scope, elem, attrs){
      console.log("resize-directive link-f running!");
      if(attrs['control']){
        control = attrs['control'];
        console.log("link-f found attrs['control'] = " + attrs['control']);
      }

      interact('.resize')
      .resizable(true)
      .on('resizestart', function (e) {
        // allow resizemove
        active = true;
        // if there is a sibling iframe - temporarily turn off its event
        // listening - this allows firing of the resizeend event
        if(control){
          document.getElementById(control).style.pointerEvents = "none";
          console.log("resizestart: turned off events in iframe with id = " + control);
        }

        // set target to container group of image or foreignObject
        target = e.target.parentNode;
    
        // put target group last in the children of its parent
        // this will render target above all other children of target's parent
        console.log("resizestart - putting group target on top of render stack"); 
        target.parentNode.appendChild(target);
    
        // turn off webGL camera update at resizestart
        //Camera3D.freeze();
      })
      .on('resizemove', function (e) {
        if(active){
          // turn off webGL events during resize
          //e.stopPropagation();
          //e.preventDefault();
      
          //console.log("e.target.parentNode = " + e.target.parentNode);
          //console.log("e.target.parentNode.id = " + e.target.parentNode.id);
          //console.log("e.dx = " + e.dx + " e.dy = " + e.dy);
      
          // execute scaling around target upper-left
          matrix_cfs = target.getAttributeNS(null,"transform").slice(7, -1).split(' ');
          matrix_cfs.forEach(function(_x, i){
            matrix[i] = parseFloat(_x);
          });
      
          // increment scaleX and/or scaleY in matrix - indices 0 and 3
          // NOTE: scale-matrix = "matrix(sx 0 0 sy 0 0) = [sx 0  tx 
          //                                                0  sy ty
          //                                                0  0  1]
          // last row is constant for all 2D-trfms so is not expressed
          // looks like zoom-indep. factor is .005*zoom/10 !!!!!
          // NOTE! to de-factor slider scaling $s.ui.z = 10*zoom
          // Thus: use z = .0005 * $s.ui.z NOT .005
          z = .0005 * $scope.ui.zoom;
          //console.log("resize directive: zoom= " + 0.1*$scope.ui.zoom + " z= " + z); 
          matrix[0] += z * e.dx;  // .01 good for zoom=20 (
          matrix[3] += z * e.dy;  // .005 good for zoom=1
          matrix_cfs = "matrix(" + matrix.join(' ') + ")";
          //console.log("resize directive: tr-m = " + matrix_cfs);
          target.setAttributeNS(null, "transform", matrix_cfs);
        }
      })
      .on('resizeend', function(e){
        active = false;
        console.log("resizeend");
        // if there is a sibling iframe - turn back on its event
        // listening        
        if(control){
          document.getElementById(control).style.pointerEvents = "auto";
          console.log("resizeend: turned on events in iframe with id = " + control);
        }

        // turn on webGL camera update at resizeend
        //Camera3D.activate();
      });
    }// link-f
  }//DDO
});
