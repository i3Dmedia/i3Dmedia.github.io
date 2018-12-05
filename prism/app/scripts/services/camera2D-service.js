// camera.js
// Snap.svg extension mechanism

// NOTE: Element.animate(attrs, dur, e, f) uses Abs-coords in attrs object
// Therefore Element.prototype.animateAttr uses Abs-coords in attrs object
// NOTE svg animateMotion uses Rel-coords to define d-path-string
// Therefore Snap.Camera.animateCycle uses Rel-coords to define d-path-string


// LATER! @TODO! - Camera - expand set of {pathname: pathstrings} !!!!!!!!
// LATER! @TODO! - mediator.js exec() and Clock read SCORE.actions !!!!!!!!
// LATER! @TODO! - jasmine unit tests for camera using action and mediator !!!!!!!!



Snap.plugin(function(Snap, Element, Paper, global){
  "use strict";
  // vars
  // namespaces
  var svgns = "http://www.w3.org/2000/svg";
  var xlinkns = "http://www.w3.org/1999/xlink";

  // reference to the root DOM svg-element in index.html
  var stage;
  // collection of refs to all svg-group based Scenes
  var scenes = {};
  // currently active and showing Scene - keeps transform state
  var scene;
  // current camera-shot transform matrix - transitory
  var matrix = new Snap.Matrix();
  // default easing function = easeinout for camera dolly, roll, zoom
  var eio = mina.easeinout;

  // @TODO - expand collection of decriptive named paths for animateCycle()
  var paths = {ellipse_neg50: "m0 0 c50 67 -50 67 0 0"};



  // Snap Element extensions - used by scenes
  /*
   * hide inactive scenes 
   */ 
  Element.prototype.hide = function(){
    this.attr('display', 'none');
    return this;
  };

  /*
   * show new active scene 
   */ 
  Element.prototype.show = function(){
    this.attr('display', '');
    return this;
  };

  /*
   * fadeIn - animate opacity to 1 (opaque)
   */
  Element.prototype.fadeIn = function(params, f){
    var dur = params ? params.dur || 0 : 0;
    var ease = params ? params.dur || 'linear' : 'linear';
    this.animate({opacity: 1}, dur, ease, f);
    return this;
  };

  /*
   * fadeOut - animate opacity to 0 (transparent)
   */
  Element.prototype.fadeOut = function(params, f){
    var dur = params ? params.dur || 0 : 0;
    var ease = params ? params.dur || 'linear' : 'linear';
    this.animate({opacity: 0}, dur, ease, f);
    return this;
  };

  /*
   * animate particular actor
   * params = {attrs:{name: final_value, ...}, dur:dur, ease:efunction}
   * NOTE!: animation is in absolute coords
   */
  Element.prototype.animateAttrs = function(params, f){
    var attrs = params ? params.attrs || {} : {};
    var dur = params ? params.dur || 10000 : 10000;
    var ease = params ? params.ease || eio : eio;
    this.animate(attrs, dur, ease, f);
    return this;
  };

  /*
   * animate along a path
   * params = {pathname:pn, path:p, dur:d, repeatCunt:rc, fill:fill}
   * NOTE: it seems as of Chrome 34 fill='freeze' does not work !?
   * defaults are path="m0 0" dur="10s" repeatCount="1" fill=""
   * NOTE!: paths are in relative coords
   */
  Element.prototype.animateMotion = function(params, f){
    var proto_am, secs, delay;
    var path, pathname, href;

    // path
    pathname = params ? params.pathname || undefined : undefined;
    if(pathname){
      path = paths[pathname] || "m0 0";
    }else{
      path = params ? params.path || "m0 0" : "m0 0";
    }

    // id of this instance - must be put in svg-DOM format
    href = "#" + this.id;
    console.log("*** href = " + href);
    console.log("*** path = " + path);
    var dur = params ? params.dur || "10s" :  "10s";
    var repeatCount = params ? params.repeatCount || "1" : "1";
    var fill = params ? params.fill || "" : "";

    // clone animateMotion prototype
    proto_am = document.getElementById('am');
    var am = proto_am.cloneNode(false);

    // set properties - append before scene.set - begin animation
    am.setAttributeNS(null, 'path', path);
    am.setAttributeNS(null, 'dur', dur);
    am.setAttributeNS(null, 'repeatCount', repeatCount);
    am.setAttributeNS(null, 'fill', fill);
    am.setAttributeNS(xlinkns, 'href', href); 
    scene.set.before(am);
    am.beginElement();

    // callback and remove clone from scene.set
    if(repeatCount !== "indefinite"){
      secs = dur.replace('s', '');
      delay = 1000 * parseInt(repeatCount) * parseInt(secs);
      setTimeout(function(){
        //console.log("animation complete - removing clone");
        f();
        am.remove();
      }, delay);
    }
  };



  /* 
   * Scene constructor - Snap extension
   * params = {id: id, actors: [actor_ids] }
   * NOTE: id omits leading "#"
   * used only internal (by Camera) 
   * actors is an array of svg-ids of elements in the scene.set group 
   * RECALL: svg viewport is 100x100 corresponding to 100vw x 100vh
   * NOTE: Therefore defaults are x=0 y=0 cx=50 cy=50
   */
  Snap.Scene = function(params){
    this.id = params ? params.id || undefined : undefined;
    this.actors = params ? params.actors || {} : {};
    this.set = stage.select("#" + this.id);
    this.x = params ? params.x || 0 : 0;
    this.y = params ? params.y || 0 : 0;
    this.cx = params ? params.cx || 50 : 50;
    this.cy = params ? params.cy || 50 : 50;
    this.roll = params ? params.roll || 0.0 : 0.0;
    this.scale = params ? params.scale || 1.0 : 1.0;
    var id;


    // must provide valid existing id of svg group <g> to define a scene
    if(!this.id || !this.set){
      throw new Error("Scene must be based on existing svg-group id");
    }

    // actors
    console.log("Scene ctor for " + this.id);
    if(params.actors){
      for(var i=0; i<params.actors.length; i++){
        id = params.actors[i];
        this.actors[id] =  stage.select("#" + id);
        console.log("actor " + id + " = " + this.actors[id]);
      }
    }

    // modify scene transform parameters after camera shot (relative transform)
    this.synchronizeRel = function(params){
      if(!params){ return this;}
      this.x += params.x || 0;
      this.y += params.y || 0;
      this.cx += params.x || 50;
      this.cy += params.y || 50;
      this.roll += params.roll || 0.0;
      this.scale *= params.scale || 1.0;
      return this;  // chain
    };

    // modify scene transform parameters after camera shot (absolute transform)
    this.synchronizeAbs = function(params){
      if(!params){ return this;}
      this.x = params.x || this.x;
      this.y = params.y || this.y;
      this.cx = params.cx || this.cx;
      this.cy = params.cy || this.cy;
      this.roll = params.roll || this.roll; 
      this.scale = params.scale || this.scale;
      return this;  // chain
    };

    // provide new svg-group as set for the existing Scene
    // NOTE: id is stored in DOM-format - "#id"
    // returns the current set if called with or without params
    this.change_set = function(g_id){
      if(g_id){
        this.id = "#" + g_id;
        this.set = stage.select(this.id);
      }
      if(!g_id || !this.set){
        throw new Error("Scene.set must be based on existing svg-group id");
      }
      return this; // chain
    };

    // hide scene-set 
    this.hide = function(){
      this.set.hide();
      return this; // chain
    };

    // show scene-set
    this.show = function(){
      this.set.show();
      return this; // chain
    };

    // animate scene.set - example for cross-fade dissolve
    // only use internally, and do not use to spatially transform 
    // or will de-synchronize scene x, y, cx, cy, matrix
    this.animate = function(transform, dur, ease, f){
      this.set.animate(transform, dur, ease, f);
    };
  };//Snap.Scene()



  // initialize stage, scenes
  $(document).ready(function() {
    var a;

    // bind stage to svg-root
    stage = new Snap("#s");
    console.log("stage = " + stage);

    // load the declarative svg scenegraph and append to stage
    // bind channels/channel[k] and create scenes 
    // bind required named svg-elements - add to actors
    Snap.load("./svg/grid.svg", function(f){
      stage.append(f);

      // create Scene for each scene-descriptor s={id:id, actors:[ids]} in SCORE
      SCORE.scenes.forEach(function(s){
        // scene
        scenes[s.id] = new Snap.Scene(s); 

        // initialize current scene
        if(s.id === SCORE.opening_scene){
          console.log("set 'scene' to opening scene = " + SCORE.opening_scene);
          scene = scenes[s.id];
        }
      });
    });
  });




  // Camera - Snap extension
  Snap.Camera = {
    /*
     * return camera to center of scene with no roll and no zoom
     * params = {id: id (of scene to normalize), dur: dur}
     */
    normalize: function(params, f){
      var sc = scene;   // default
      var id = params ? params.id || undefined : undefined;
      if(id){ sc = scenes[id];}
      var dur = params ? params.dur || 0 : 0;
      var ease = params ? params.ease || eio : eio;

      var s = (sc.scale === 0.0) ? 1.0 : 1.0/sc.scale; 
      var m = new Snap.Matrix();
      m.scale(s, sc.cx, sc.cy);
      m.rotate(-sc.roll, sc.cx, sc.cy);
      m.translate(50 - sc.cx, 50 - sc.cy);
      sc.animate({transform: m}, dur, ease, f);

      // sync matrix
      matrix = new Snap.Matrix();

      // sync Scene
      sc.synchronizeAbs({x:0, y:0, cx:50, cy:50, roll:0.0, scale:1.0});
    },


    // MONTAGE
    /*
     * cutTo
     * params = { id:next_scene, normalize: t/f, delay: delay}
     * pass in params containing the id of the next_scene  
     * and whether to move the scene to standard position at x=0 y=0
     * roll=0 scale=1.0
     * hides the current scene and shows the next_scene
     * default: starts scene with canonical shot - 'normalized' shot
     * optional callback after transition complete 
     */
    cutTo: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      var delay = params ? params.delay || 0 : 0;
      var normalize  = params ? params.normalize || true : true;

      if(id){ sc = scenes[id];}
      if(scene){ scene.hide();}
      if(normalize){
        Snap.Camera.normalize({id: id});
      }
      scene = sc;
      setTimeout(function(){
        sc.show();
        if(f){ f();}
      }, delay);

      // sync Camera.matrix
      matrix = new Snap.Matrix();

      // sync scene
    },

    /*
     * dissolveTo
     * params = { id:next_scene, normalize: t/f, dur: dur, delay:delay}
     * pass in params containing the id of the next_scene  
     * and duration of animation to normalized position orientation and scale
     * optional callback after transition complete 
     */
    dissolveTo: function(params, f){
      var prev_scene = scene;
      var sc;
      var id = params ? params.id : undefined;
      var normalize  = params ? params.normalize || true : true;
      var dur = params ? params.dur || 3000 : 3000;
      var delay = params ? params.delay || 0 : 0;

      // set sc to scenes[id] 
      if(id){ 
        sc = scenes[id];
        if(normalize){
          Snap.Camera.normalize({id: id});
        }
      }

      // next scene is sc
      // prev_scene is scene
      prev_scene.animate({attrs: {opacity: 0.0}, dur: dur});
      sc.fadeOut({dur: 0});
      setTimeout(function(){
        sc.show();
        if(sc){
          sc.animate({attrs: {opacity: 1.0}, dur: dur});
        }
        setTimeout(function(){
          prev_scene.hide();
          if(f){ f();}
        }, dur);
      }, delay);

      matrix = new Snap.Matrix();
      // sync scene
    },

    /*
     * transitional shots:
     * NOTE! (almost) all shots leave the scene internal actors relative
     * composition identical to its initial state 
     * NOTE! Exception is 'animate' which can act on individual actors
     *
     * dur = null or 0 => cut-shot
     * dur > 0 => fly-shot for period = dur (ms)
     *
     * f is callback invoked on completion of shot
     */

    // ZOOM
    /*
     * relative zoom to product of scale s with previous scale
     * params = {s: scale,
     *           dur: ms}
     */
    zoom: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var s = params ? params.s || 1.0 : 1.0;
      var dur = params ? params.dur || 0 : 0;

      matrix.scale(s);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },

    /*
     * absolute zoom to scale s
     * params = {s: scale,
     *           dur: ms}
     */
    zoomTo: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var s = params ? params.s || 1.0 : 1.0;
      var dur = params ? params.dur || 0 : 0;

      matrix = new Snap.Matrix();
      matrix.scale(s);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },


    // ROLL - counter-clockwise!
    // NOTE: left-hand system: positive angle => objects rotate clockwise,
    // camera rolls counter-clockwise
    // NOTE roll should be in (-180, 180]
    /*
     * relative roll adds to current roll angle
     * params = {r: angle,
     *           dur: ms}
     */
    roll: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var bb = scene.set.getBBox();
      var cx = bb.x + 0.5*bb.width;
      var cy = bb.y + 0.5*bb.height;
      console.log("roll: cx = " + cx + " cy = " + cy);
      var r = params ? params.r || 0 : 0;
      var dur = params ? params.dur || 0 : 0;

      matrix.rotate(r, cx, cy);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },
    /*
     * absolute rollTo angle r from 0 degrees
     * params = {r: angle,
     *           dur: ms}
     */
    rollTo: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var bb = scene.set.getBBox();
      var cx = bb.x + 0.5*bb.width;
      var cy = bb.y + 0.5*bb.height;
      console.log("roll: cx = " + cx + " cy = " + cy);
      var r = params ? params.r || 0 : 0;
      var dur = params ? params.dur || 0 : 0;

      matrix = new Snap.Matrix();
      matrix.rotate(r, cx, cy);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },
  

    // DOLLY 
    // NOTE: Camera dolly(x, y) => scene objects translate (-x, -y)
    /*
     * relative dolly from current location plus (x,y)
     * params = {x: x-coord,
     *           y: y-coord,
     *           dur: ms}
     */
    dolly: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var x = params ? params.x || 0 : 0;
      var y = params ? params.y || 0 : 0;
      var dur = params ? params.dur || 0 : 0;

      matrix.translate(-x, -y);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },

    /*
     * absolute dolly to (x,y)
     * params = {x: x-coord,
     *           y: y-coord,
     *           dur: ms}
     */
    dollyTo: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var x = params ? params.x || 0 : 0;
      var y = params ? params.y || 0 : 0;
      var dur = params ? params.dur || 0 : 0;

      matrix = new Snap.Matrix();
      matrix.translate(-x, -y);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },


    // COMBINATION
    /*
     * transform: some combination of relative transforms
     * params = {x: x, y: y, roll: r, scale: s, dur:d}
     */
    transform: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var x = params ? params.x || 0 : 0;
      var y = params ? params.y || 0 : 0;
      var r = params ? params.r || 0 : 0;
      var s = params ? params.s || 1.0 : 1.0;
      var dur = params ? params.dur || 0 : 0;

      matrix.translate(-x, -y);
      matrix.rotate(-r);
      matrix.scale(s);
      sc.animate({transform: matrix}, dur, eio, f);

      // sync scene
    },

    /*
     * transformTo: some combination of absolute transforms
     * params = {x: x, y: y, roll: r, scale: s, dur:d}
     */
    transformTo: function(params, f){
      var sc = scene;
      var id = params ? params.id : undefined;
      if(id){ sc = scenes[id];}
      var x = params ? params.x || 0 : 0;
      var y = params ? params.y || 0 : 0;
      var r = params ? params.r || 0 : 0;
      var s = params ? params.s || 1.0 : 1.0;
      var dur = params ? params.dur || 0 : 0;
      var ease = params ? params.ease || eio : eio;

      matrix = new Snap.Matrix();
      matrix.scale(s);
      matrix.rotate(-r);
      matrix.translate(-x, -y);
      sc.animate({transform: matrix}, dur, ease, f);

      // sync scene
    },


    // CHOREOGRAPH path-cycle motion by scene or actor in scene
    // NOTE: motion is by scene a/o actors NOT camera
    /*
     * animateMotion - motion along a given path
     * path is an svg path d-string '<path d:string />'
     * NOTE path coords are RELATIVE to position of animated element
     * params is an object containing all the param-options:
     * { path: p,          // svg path d-string
     *   pathname: name,   // alternative to path - name to lookup path-str 
     *   dur: d,           // string-secs - default '10s' 
     *   repeatCount: rc,  // string - default '1', 'indefinite'=>forever
     *   fill: 'freeze',   // default '' - 'freeze' fails in Chrome<=34 anyway!
     *   actor: id         // default - scene.id() - id of scene.set() group
     * }
     * NOTE! rotate = 'auto' does NOT work correctly in Chrome v34!
     * NOTE! fill = 'freeze' does NOT work correctly in Chrome v34!
     * f is a callback executed at end of animation
     */
    animateMotion: function(params, f){
      var proto_am, secs, delay;
      var path, pathname, href;

      // path
      pathname = params ? params.pathname || undefined : undefined;
      if(pathname){
        path = paths[pathname] || "m0 0";
      }else{
        path = params ? params.path || "m0 0" : "m0 0";
      }

      // id of scene.set group or object - must be put in svg-DOM format
      var actor = params ? params.actor || scene.id : scene.id;
      href = "#" + actor;
      console.log("*** href = " + href);
      console.log("*** path = " + path);
      var dur = params ? params.dur || "10s" :  "10s";
      var repeatCount = params ? params.repeatCount || "1" : "1";
      var fill = params ? params.fill || "" : "";

      // clone animateMotion prototype
      proto_am = document.getElementById('am');
      var am = proto_am.cloneNode(false);

      // set properties - append before scene.set - begin animation
      am.setAttributeNS(null, 'path', path);
      am.setAttributeNS(null, 'dur', dur);
      am.setAttributeNS(null, 'repeatCount', repeatCount);
      am.setAttributeNS(null, 'fill', fill);
      am.setAttributeNS(xlinkns, 'href', href); 
      scene.set.before(am);
      am.beginElement();

      // callback and remove clone from scene.set
      if(repeatCount !== "indefinite"){
        secs = dur.replace('s', '');
        delay = 1000 * parseInt(repeatCount) * parseInt(secs);
        setTimeout(function(){
          //console.log("animation complete - removing clone");
          f();
          am.remove();
        }, delay);
      }
    }
  };//Snap.Camera
});
