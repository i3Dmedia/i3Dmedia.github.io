// * mixin-service.js
// * mixin of methods to object 
// * (extend => singleton methods)
// * (include => instance methods)
// -------------------------

angular.module('app').factory('Mixin', function(Audio){
  "use strict";

  console.log("\nMixin service defined");
  //Audio.speak("Mixin service defined");
  var oa = ["object Array"];
  var toString = Object.prototype.toString;
  
  return {
    // Mixin.extend(o,m) => methods of m are singleton methods of object o
    // Mixin.extend(F,m) => methods of m are static methods of F
    // extend is a closure 
    extend: function(base, module){  
      base = base || {};
      module = module || {};
      for(var p in module){
        if(module.hasOwnProperty(p)){
          if(typeof p === 'object'){
            base[p] = (toString.call(p) === oa) ? [] : {};
            this.extend(base[p], p);
          }else{
            base[p] = module[p];
          }
        }
      }
    },

    // Mixin.include(o,m) => methods of m are instance methods of every object with
    // prototype o.prototype
    // Object.include(F,m) => methods of m are instance methods of all instances created
    // by the constructor F
    // include is a closure 
    include: function(base, module){  
      base = base || {};
      base.prototype = base.prototype || {};
      module = module || {};
      for(var p in module){
        if(module.hasOwnProperty(p)){
          if(typeof p === 'object'){
            base.prototype[p] = (toString.call(p) === oa) ? [] : {};
            this.include(base.prototype[p], p);
          }else{
            base.prototype[p] = module[p];
          }
        }
      }
    }
  };//return Mixin
});


