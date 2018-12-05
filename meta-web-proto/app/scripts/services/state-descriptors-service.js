// * state-descriptors-service.js
// returns stored JSON stateDescriptor or requests
// the descriptor from the 'state' channel of Mediator service.
// sD is returned as Promise
// @TODO: if sD is not cached locally request it via Mediator ws-channel
// -------------------------

angular.module('app').factory('StateDescriptors', 
  ['Mediator', function(Mediator){
  "use strict";

  console.log("\nStateDescriptors service defined");

  // collection of state descriptors - holds opening scene minimally
  var descriptors = {
    metaforms: {
      scene2D: {
        id: "opening2D",
        score: [],
        actors : {    
          bitmap : {}
        }
      },

      scene3D: {
        id: "metaforms3D",
        score: [],
        actors: { // for i3d-templates, ng-repeat = '(k,v) in actors.*'    
          // metaforms are named by id of root node - exp 'tree0'
          // children are named by level-index exp: 0,1/00,01,10/000,...
          metaforms: {
            tree0: {form:"i3d-sphere",
                    x:0.,y:50.,z:0.,r:10.,
                    visible:true, wireframe:true, 
                    transparent:false, opacity:1.0, color:"red",
                    children:{
                      0:{form:"i3d-sphere", 
                         x:-50.,y:100.,z:0.,r:10.,
                         visible:true, wireframe:true, 
                         transparent:false, opacity:1.0, color:"red",
                         children:{}},
                      1:{form:"i3d-sphere", 
                         x:50.,y:100.,z:0.,r:10.,
                         visible:true, wireframe:true, 
                         transparent:false, opacity:1.0, color:"red",
                         children:{}}
                    }
            }
          },
          tree1: {form:"i3d-sphere",
                  x:0.,y:100.,z:0.,r:10.,
                  visible:true, wireframe:true, 
                  transparent:false, opacity:1.0, color:"red",
                  children:{
                    0:{form:"i3d-sphere", 
                       x:-50.,y:150.,z:0.,r:10.,
                       visible:true, wireframe:true, 
                       transparent:false, opacity:1.0, color:"red",
                       children:{}},
                    1:{form:"i3d-sphere", 
                       x:50.,y:150.,z:0.,r:10.,
                       visible:true, wireframe:true, 
                       transparent:false, opacity:1.0, color:"red",
                       children:{}}
                  }
          },

          csphere: {x:0.,y:0.,z:0.,r:50.,
                    visible:true, wireframe:true, 
                    transparent:false, opacity:1.0, color:"red" },
         
         axes: {
           axes0: {length:3000.}
         },

          alights: {
            alight0: {color:"0x222222"}
          },
          alight1: {color:"0xff0000"},
          
          dlights: {
            dlight0: {color:"0xffffff", directionx:1, directiony:1, directionz:1},
            dlight1: {color:"0x002288", directionx:-1, directiony:-1, directionz:-1},
          },
          dlight2: {color:"0x00ff00", directionx:1, directiony:-1, directionz:-1},

          grounds: {
            ground0: {x:0., y:-50., z:0., textureurl:"./images/p2.jpg",
                      color:"0xffffff", transparent:true,
                      opacity:0.6, width:50., height:50. },
            ground1: {x:0., y:0., z:0., color:"blue", transparent:true,
                      opacity:0.7, width:50., height:50. }
          },
          ground2: {x:0., y:-100., z:0., color:"red", transparent:true,
                      opacity:0.7, width:50., height:50. },
          
          cubes: {
            cube0: {x:-4.0, y:4.0, z:20., textureurl:"./images/sky.jpg",
                    width:4.0, height:4.0, depth:4.0 },
            cube1: {x:4.0, y:10., z:20., color:"green", transparent:true,
                      opacity:0.6, width:4.0, height:4.0, depth:4.0 }
          },
          cube2: {x:-4.0, y:14.0, z:20., textureurl:"./images/sky.jpg",
                    width:4.0, height:4.0, depth:4.0 },
          
          spheres: {
            sphere0: {x:20.0, y:4.0, z:4.0, textureurl:"./images/1.png",
                      r:4.0, wsegments:20., hsegments:20., color:"white" },
            sphere1: {x:-20.0, y:4.0, z:4.0, r:4.0, 
                      wsegments:20., hsegments:20., 
                      opacity:0.5, color:"red", transparent:true }
          },
          sphere2: {x:-20.0, y:14.0, z:4.0, r:4.0, 
                      wsegments:20., hsegments:20., 
                      opacity:0.5, color:"red", transparent:true },

          bb_singular: {url:"./images/snow_posZ.jpg",x:20,y:20,z:-10,
              width:50, height:50, aspect:true},
          billboards: {}

        }//actors
      }//scene3D
    }, //---------------------------------------------------------------
     

    billboards_81: {

      scene2D: {
        id: "opening2D",
        score: [],
        actors : {    // for future i3D-svg templates
          bitmap : {}
        }
      },
    
      scene3D: {
        id: "opening3D",
        score: [],
        actors: { // for i3d-templates, ng-repeat = '(k,v) in actors.*'    
          // metaforms are named by id of root node - exp 'tree0'
          // children are named by level-index exp: 0,1/00,01,10/000,...
          metaforms: {
            tree0: {form:"i3d-sphere",
                    x:0.,y:50.,z:0.,r:10.,
                    visible:true, wireframe:true, 
                    transparent:false, opacity:1.0, color:"red",
                    children:{
                      0:{form:"i3d-sphere", 
                         x:-50.,y:100.,z:0.,r:10.,
                         visible:true, wireframe:true, 
                         transparent:false, opacity:1.0, color:"red",
                         children:{}},
                      1:{form:"i3d-sphere", 
                         x:50.,y:100.,z:0.,r:10.,
                         visible:true, wireframe:true, 
                         transparent:false, opacity:1.0, color:"red",
                         children:{}}
                    }
            }
          },
          tree1: {form:"i3d-sphere",
                  x:0.,y:100.,z:0.,r:10.,
                  visible:true, wireframe:true, 
                  transparent:false, opacity:1.0, color:"red",
                  children:{
                    0:{form:"i3d-sphere", 
                       x:-50.,y:150.,z:0.,r:10.,
                       visible:true, wireframe:true, 
                       transparent:false, opacity:1.0, color:"red",
                       children:{}},
                    1:{form:"i3d-sphere", 
                       x:50.,y:150.,z:0.,r:10.,
                       visible:true, wireframe:true, 
                       transparent:false, opacity:1.0, color:"red",
                       children:{}}
                  }
          },

          csphere: {x:0.,y:0.,z:0.,r:50.,
                    visible:true, wireframe:true, 
                    transparent:false, opacity:1.0, color:"red" },

          axes: {
            axes0: {length:3000.}
          },

          alights: {
            alight0: {color:"0x222222"}
          },
          alight1: {color:"0xff0000"},
          
          dlights: {
            dlight0: {color:"0xffffff", directionx:1, directiony:1, directionz:1},
            dlight1: {color:"0x002288", directionx:-1, directiony:-1, directionz:-1},
          },
          dlight2: {color:"0x00ff00", directionx:1, directiony:-1, directionz:-1},

          grounds: {
            ground0: {x:0., y:-50., z:0., textureurl:"./images/p2.jpg",
                      color:"0xffffff", transparent:true,
                      opacity:0.6, width:50., height:50. },
            ground1: {x:0., y:0., z:0., color:"blue", transparent:true,
                      opacity:0.7, width:50., height:50. }
          },
          ground2: {x:0., y:-100., z:0., color:"red", transparent:true,
                      opacity:0.7, width:50., height:50. },
          
          cubes: {
            cube0: {x:-4.0, y:4.0, z:20., textureurl:"./images/sky.jpg",
                    width:4.0, height:4.0, depth:4.0 },
            cube1: {x:4.0, y:10., z:20., color:"green", transparent:true,
                      opacity:0.6, width:4.0, height:4.0, depth:4.0 }
          },
          cube2: {x:-4.0, y:14.0, z:20., textureurl:"./images/sky.jpg",
                    width:4.0, height:4.0, depth:4.0 },
          
          spheres: {
            sphere0: {x:20.0, y:4.0, z:4.0, textureurl:"./images/1.png",
                      r:4.0, wsegments:20., hsegments:20., color:"white" },
            sphere1: {x:-20.0, y:4.0, z:4.0, r:4.0, 
                      wsegments:20., hsegments:20., 
                      opacity:0.5, color:"red", transparent:true }
          },
          sphere2: {x:-20.0, y:14.0, z:4.0, r:4.0, 
                      wsegments:20., hsegments:20., 
                      opacity:0.5, color:"red", transparent:true },

          bb_singular: {url:"./images/snow_posZ.jpg",x:20,y:20,z:-10,
              width:50, height:50, aspect:true},
          billboards: {  // for ng-repeat = '(k,v) in billboards'
            // 0,0
            bb0: {url:"./images/Escher.png",x:0,y:0,z:0,
              width:50, height:50, aspect:true},
            bb1: {url:"./images/Escher.png",x:0,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb2: {url:"./images/1.png",x:0,y:100,z:0,
              width:50, height:50, aspect:true},
            bb3: {url:"./images/p2.jpg",x:-100,y:0,z:0,
              width:50, height:50, aspect:true},
            bb4: {url:"./images/sky.jpg",x:100,y:0,z:0,
              width:50, height:50, aspect:true},
            bb5: {url:"./images/Escher.png",x:-100,y:100,z:0,
              width:50, height:50, aspect:true},
            bb6: {url:"./images/1.png",x:100,y:100,z:0,
              width:50, height:50, aspect:true},
            bb7: {url:"./images/p2.jpg",x:-100,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb8: {url:"./images/sky.jpg",x:100,y:-100,z:0,
              width:50, height:50, aspect:true},
  
            // 300,300
            bb9: {url:"./images/Escher.png",x:300,y:300,z:0,
              width:50, height:50, aspect:true},
            bb10: {url:"./images/Escher.png",x:300,y:200,z:0,
              width:50, height:50, aspect:true},
            bb11: {url:"./images/1.png",x:300,y:400,z:0,
              width:50, height:50, aspect:true},
            bb12: {url:"./images/p2.jpg",x:200,y:300,z:0,
              width:50, height:50, aspect:true},
            bb13: {url:"./images/sky.jpg",x:400,y:300,z:0,
              width:50, height:50, aspect:true},
            bb14: {url:"./images/Escher.png",x:200,y:400,z:0,
              width:50, height:50, aspect:true},
            bb15: {url:"./images/1.png",x:400,y:400,z:0,
              width:50, height:50, aspect:true},
            bb16: {url:"./images/p2.jpg",x:200,y:200,z:0,
              width:50, height:50, aspect:true},
            bb17: {url:"./images/sky.jpg",x:400,y:200,z:0,
              width:50, height:50, aspect:true},
  
            // 300,0
            bb18: {url:"./images/Escher.png",x:300,y:0,z:0,
              width:50, height:50, aspect:true},
            bb19: {url:"./images/Escher.png",x:300,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb20: {url:"./images/1.png",x:300,y:100,z:0,
              width:50, height:50, aspect:true},
            bb21: {url:"./images/p2.jpg",x:200,y:0,z:0,
              width:50, height:50, aspect:true},
            bb22: {url:"./images/sky.jpg",x:400,y:0,z:0,
              width:50, height:50, aspect:true},
            bb23: {url:"./images/Escher.png",x:200,y:100,z:0,
              width:50, height:50, aspect:true},
            bb24: {url:"./images/1.png",x:400,y:100,z:0,
              width:50, height:50, aspect:true},
            bb25: {url:"./images/p2.jpg",x:200,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb26: {url:"./images/sky.jpg",x:400,y:-100,z:0,
              width:50, height:50, aspect:true},
  
            // 300,-300
            bb27: {url:"./images/Escher.png",x:300,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb28: {url:"./images/Escher.png",x:300,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb29: {url:"./images/1.png",x:300,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb30: {url:"./images/p2.jpg",x:200,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb31: {url:"./images/sky.jpg",x:400,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb32: {url:"./images/Escher.png",x:200,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb33: {url:"./images/1.png",x:400,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb34: {url:"./images/p2.jpg",x:200,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb35: {url:"./images/sky.jpg",x:400,y:-400,z:0,
              width:50, height:50, aspect:true},
  
            // 0,300
            bb36: {url:"./images/Escher.png",x:0,y:300,z:0,
              width:50, height:50, aspect:true},
            bb37: {url:"./images/Escher.png",x:0,y:200,z:0,
              width:50, height:50, aspect:true},
            bb38: {url:"./images/1.png",x:0,y:400,z:0,
              width:50, height:50, aspect:true},
            bb39: {url:"./images/p2.jpg",x:-100,y:300,z:0,
              width:50, height:50, aspect:true},
            bb40: {url:"./images/sky.jpg",x:100,y:300,z:0,
              width:50, height:50, aspect:true},
            bb41: {url:"./images/Escher.png",x:-100,y:400,z:0,
              width:50, height:50, aspect:true},
            bb42: {url:"./images/1.png",x:100,y:400,z:0,
              width:50, height:50, aspect:true},
            bb43: {url:"./images/p2.jpg",x:-100,y:200,z:0,
              width:50, height:50, aspect:true},
            bb44: {url:"./images/sky.jpg",x:100,y:200,z:0,
              width:50, height:50, aspect:true},
  
            // 0,-300
            bb45: {url:"./images/Escher.png",x:0,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb46: {url:"./images/Escher.png",x:0,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb47: {url:"./images/1.png",x:0,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb48: {url:"./images/p2.jpg",x:-100,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb49: {url:"./images/sky.jpg",x:100,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb50: {url:"./images/Escher.png",x:-100,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb51: {url:"./images/1.png",x:100,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb52: {url:"./images/p2.jpg",x:-100,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb53: {url:"./images/sky.jpg",x:100,y:-400,z:0,
              width:50, height:50, aspect:true},
  
            // -300,0
            bb54: {url:"./images/Escher.png",x:-300,y:0,z:0,
              width:50, height:50, aspect:true},
            bb55: {url:"./images/Escher.png",x:-300,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb56: {url:"./images/1.png",x:-300,y:100,z:0,
              width:50, height:50, aspect:true},
            bb57: {url:"./images/p2.jpg",x:-400,y:0,z:0,
              width:50, height:50, aspect:true},
            bb58: {url:"./images/sky.jpg",x:-200,y:0,z:0,
              width:50, height:50, aspect:true},
            bb59: {url:"./images/Escher.png",x:-400,y:100,z:0,
              width:50, height:50, aspect:true},
            bb60: {url:"./images/1.png",x:-200,y:100,z:0,
              width:50, height:50, aspect:true},
            bb61: {url:"./images/p2.jpg",x:-400,y:-100,z:0,
              width:50, height:50, aspect:true},
            bb62: {url:"./images/sky.jpg",x:-200,y:-100,z:0,
              width:50, height:50, aspect:true},
  
            // -300,300
            bb63: {url:"./images/Escher.png",x:-300,y:300,z:0,
              width:50, height:50, aspect:true},
            bb64: {url:"./images/Escher.png",x:-300,y:200,z:0,
              width:50, height:50, aspect:true},
            bb65: {url:"./images/1.png",x:-300,y:400,z:0,
              width:50, height:50, aspect:true},
            bb66: {url:"./images/p2.jpg",x:-400,y:300,z:0,
              width:50, height:50, aspect:true},
            bb67: {url:"./images/sky.jpg",x:-200,y:300,z:0,
              width:50, height:50, aspect:true},
            bb68: {url:"./images/Escher.png",x:-400,y:400,z:0,
              width:50, height:50, aspect:true},
            bb69: {url:"./images/1.png",x:-200,y:400,z:0,
              width:50, height:50, aspect:true},
            bb70: {url:"./images/p2.jpg",x:-400,y:200,z:0,
              width:50, height:50, aspect:true},
            bb71: {url:"./images/sky.jpg",x:-200,y:200,z:0,
              width:50, height:50, aspect:true},
  
            // -300,-300
            bb72: {url:"./images/Escher.png",x:-300,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb73: {url:"./images/Escher.png",x:-300,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb74: {url:"./images/1.png",x:-300,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb75: {url:"./images/p2.jpg",x:-400,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb76: {url:"./images/sky.jpg",x:-200,y:-300,z:0,
              width:50, height:50, aspect:true},
            bb77: {url:"./images/Escher.png",x:-400,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb78: {url:"./images/1.png",x:-200,y:-200,z:0,
              width:50, height:50, aspect:true},
            bb79: {url:"./images/p2.jpg",x:-400,y:-400,z:0,
              width:50, height:50, aspect:true},
            bb80: {url:"./images/sky.jpg",x:-200,y:-400,z:0,
              width:50, height:50, aspect:true}
          }//billboards
        }//actors
      }//scene3D
    }//sD='billboards_81'
  };
  
  return {
    get: function(name){
      return descriptors[name];
    }, // returns stored sD or undefined

    put: function(name, descriptor){
      descriptors[name] = descriptor;
    } // caches sD for future local fetch
  };
}]);


