// * clone-service.js
// Clone.clone(o) deep copies o and returns the cloned object
// Finally uses jQuery.extend for deep copy
// option to add 'clone' to every object
// -------------------------

angular.module('app').factory('Clone', function(){
  "use strict";
  var p;
  console.log("\nClone service defined");

  var Clone = {
    clone: function(o) {
      return jQuery.extend(true, {}, o);
    }
  }

  // to add 'static' singleton clone method to Object instead of sole use as service:
  Object.clone = undefined;
//  console.log("before adding clone() to Object Object.clone = " + Object.clone);
  Object.defineProperty( Object, "clone", {value: Clone.clone, enumerable: false});
//  console.log("after adding clone() to Object Object.clone = " + Object.clone);


  // return factory object
  return Clone;
});



