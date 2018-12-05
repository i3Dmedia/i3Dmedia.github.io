/*
 * pixi-directive.js
 * creates webGL canvas used by pixi.js for GPU-accelerated 2D graphics
 * inteneded to create ONE full 2D-vector space layer 
 * For now 100%x100% of the viewport (as 3D-webGL) 
 *
 * Best result is z-index:0 lowest 'bg' rendering behind 3D, svg and html-UI
 * NOTE: must make 3D bg transparent - in three.js provide {alpha:true}
 * to the Three.WebGLRenderer ctor, and in Camera3D.place() pass in
 * a any clearColor for renderer.setClearColor(clearColor,0) - (opacity 0)  
 *
 * <!-- pixi create canvas -->
 * <div id="frame" class="space" xmlns="http://www.w3.org/1999/xhtml" style="z-index:0" ng-hide="$parent.ui.hideBg" class="ng-hide" pixi >
 *   <canvas id="c" style="width:100%; height:100%" >
 * </div>
 *
 *
 * NOTE: component-svg doesn't work well because canvas always renders at TOP
 * Component html-svg: 
 * Even declared first, so at the lowest display-level depth, appears at TOP
 *
 * <g ...>
 *   <foreignOject or ? .../>
       <div id="frame" pixi>
         // directive creates canvas element here
         // or uses <canvas id='c' />
       </div>
     </foreignObject>
 * </g>
 */

// returns directive definition object DDO
angular.module('app').directive("pixi", function(){
  "use strict";

  var stage;
  var renderer;
  var texture;
  var tilingSprite;
  var count = 0;
  var frame;
  var canvas;

  console.log("\npixi-directive running!");

  return {
    restrict: 'A',
    scope: 'child',
    replace: 'false',
    link: function($scope, elem, attrs){
      console.log("pixi-directive link-f running!");

      // div location to append pixi-canvas element
      frame = document.getElementById("frame");
      console.log("frame = " + frame);

      // create an new instance of a pixi stage
      stage = new PIXI.Stage(0x97C56E, true);
    

      // create a renderer instance
      // [a] xor [b]
      // [a] generated canvas
      // [b] pre-exsting canvas

//      // [a] generated canvas - YES
//      renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
//      renderer.view.style.position = "absolute";
//      renderer.view.style.left = "500%";
//      renderer.view.style.top = "200%";
//      // add the renderer view element to the DOM
//      frame.appendChild(renderer.view);
    
      // [b] pre-exsting canvas - NO
      canvas = document.getElementById("c");
      console.log("canvas = " + canvas);
      renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, canvas, false, false);
      renderer.view.style.position = "absolute";


      // texture
      // create a texture from an image path
      texture = PIXI.Texture.fromImage("./images/1.png");
      //texture = PIXI.Texture.fromImage("./images/p2.jpeg");
    
      // create a tiling sprite ...
      // requires a texture, width and height
      // to work in webGL the texture size must be a power of two
      tilingSprite = new PIXI.TilingSprite(texture, window.outerWidth, window.outerHeight);
      stage.addChild(tilingSprite);
    
    
      // animation cycle
      function animate() {
      	count += 0.005;
      	tilingSprite.tileScale.x = 2 + Math.sin(count);
      	tilingSprite.tileScale.y = 2 + Math.cos(count);
      	tilingSprite.tilePosition.x += 1;
      	tilingSprite.tilePosition.y += 1;
    
        // render the stage
        renderer.render(stage);          
        requestAnimFrame(animate);
      }
    
      // start animation cycle
      requestAnimFrame(animate);
    }//link-f  
  }//DDO
});

