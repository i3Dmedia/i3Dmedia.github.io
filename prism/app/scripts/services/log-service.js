// * log-service.js
// writes a log mesaageto a server on socket.io channel 'log' 
// via Mediator
// -------------------------

angular.module('app').factory('Log', ['Mediator', function(Mediator){
  "use strict";

  console.log("\nLog service defined");
  
  var Log = {
    log : function(s){
      Mediator.emit('log', s);
    }
  }

  // return factory object
  return Log;
}]);



