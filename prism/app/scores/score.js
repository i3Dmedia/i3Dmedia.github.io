// score.js

// namespace
var SCORE = {};

// opening scene
SCORE.opening_scene = 'channels';

// scenes - key = scenename : value = scene actors array
SCORE.scenes = [
  {id: 'channels', actors: ['cw']},
  {id: 'ch1-sc1', actors: ['cb', 'rr']}
];


// actions
// @TODO: change to array of action-msg objects
$(document).ready(function() {
  // vars
  var camera = Snap.Camera;
  var path = "m0 0 c50 67 -50 67 0 0";
  // NOTE: coords are rel to object location-origin but motion is abs OR rel
  // see the following two equivalent paths, top absolute, lower relative
  var path2 = "m0 0 L25 25 L0 0";  // abs equiv to below rel
  //var path2 = "m0 0 l25 25 l-25 -25";  // rel equiv to above abs
  //var path3 = "m0 0 L25 25";
  var dur = "6s";
  var rc = 2;
  var f = function(){console.log("callback!")};
  var f2 = function(){console.log("el.an callback!")};
  var params = {x: -20, y: 0, dur: 3000}
  var params2 = {x: 40, y: 0, dur: 3000}


  // camera animations for scene(s)
  setTimeout(function(){
    console.log("** beginning mixed absolute and relative matrix dolly-shots");
    camera.cutTo({id: 'channels', normalize: true});
    setTimeout(function(){
      camera.animateMotion({actor: 'rg',
                            path: path2, 
                            dur: dur, 
                            repeatCount: rc}, f);
      camera.animateMotion({actor: 'cw',
                            pathname: 'ellipse_neg50', 
                            dur: dur, 
                            repeatCount:rc}, f);
      camera.animateMotion({path: path, 
                            dur: dur, 
                            repeatCount: rc}, f); 
//      camera.animate({actor: 'cr', 
//                      transform:{transform: 'r360,30,30'},
//                      dur: 12000,
//                      ease: mina.easeinout}, f2);
      setTimeout(function(){
        //camera.roll({r: -180, dur: 2000}); 
      }, 14000);
    }, 2000);
  }, 2000);

  setTimeout(function(){
    console.log("** beginning mixed absolute and relative matrix dolly-shots");
    setTimeout(function(){
      camera.dolly(params, console.log('camera.dolly(-20,0)'));

      setTimeout(function(){
        camera.normalize({dur: 3000}, console.log('camera.noramalize()'));
      
        setTimeout(function(){
          camera.rollTo({r: 90, dur: 3000}, console.log('camera.roll(90)'));

          setTimeout(function(){
            camera.normalize({dur: 3000}, console.log('camera.normalize()'));

            setTimeout(function(){
              camera.zoom({s:2.0, dur:3000}, console.log('camera.zoom(2.0)'));
              camera.dolly({x:40, y:0, dur:3000}, console.log("camera.dolly 40 0")); 

              setTimeout(function(){
                camera.normalize({dur: 3000}, console.log('camera.normalize()'));
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 20000);
  
  // test shw/hide change of scene
  setTimeout(function(){
    console.log("test channel-group show/hide - camera.cutTo('ch1-sc1')");
    //g.attr('display', 'none');
    camera.cutTo({id:'ch1-sc1'});
    setTimeout(function(){
      console.log("camera.cutTo('channels')");
      //g.attr('display', 'inline');
      camera.cutTo({id:'channels'});
    }, 5000);
  }, 60000);

//  setTimeout(function(){
//    console.log("** beginning mixed absolute and relative matrix dolly-shots");
//    setTimeout(function(){
//      camera.dolly(params, console.log('camera.dolly(-20,0)'));
//
//      setTimeout(function(){
//        camera.dolly(params, console.log('camera.dolly(-20,0)'));
//      
//        setTimeout(function(){
//          camera.dollyTo(params, console.log('camera.dollyTo(-20,0)'));
//
//          setTimeout(function(){
//            camera.dollyTo(params, console.log('camera.dollyTo(-20,0)'));
//
//            setTimeout(function(){
//              camera.dolly(params, console.log('camera.dolly(-20,0)'));
//
//              setTimeout(function(){
//                camera.dolly(params2, console.log('camera.dolly(40,0)'));
//              }, 5000);
//            }, 5000);
//          }, 5000);
//        }, 5000);
//      }, 5000);
//    }, 5000);
//  }, 20000);
});
