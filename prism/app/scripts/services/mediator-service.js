// * mediator-service.js 
// * communications service for all controllers and directives
// * first arg is name of created object; 2nd arg is a factory function
// * returns reference to Mediator, an object of functions for
//   broadcasting and receiving mesgs
//
// * NOTE: dependencies: $rootScope
// * We define the service as a factory - it is instantiated only once, and
//   thus acts as a singleton for the scope of the application
// * NOTE! the client loads socket.io.js from the server
//   The location is http://<domain>/prizm/socket.io.js given by:
//   <script src = "/../socket.io.js"></script>
// -----------------------------

angular.module('app').factory('Mediator', function($rootScope, Audio){
  'use strict';

  // diagnostics 
  console.log("\nMediator service defined");
  //Audio.deutsch(["Achtung! Nachricht 1 - Das Mediator Objekt ist definiert"]);
  //Audio.francaisF(["Attention! message 2 - L'objet Mediator est definee"]);

  // connect to a2 server
  console.log("trying to connect to server on port 8080...");
  //Audio.speak("Mediator service trying to connect to server on port 8080");
  //var socket = io.connect('http://localhost:8080');
  //console.log("socket = " + socket);
  

  // return factory object Mediator
  return {
    // receive mesg
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },

    // broadcast mesg
    emit: function (eventName, data, callback) {
      console.log("Mediator.emit: channel = " + eventName + " data = " + data);
      socket.emit(eventName, data, function () {
        console.log("callback! args = " + arguments);
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            // effect is to assign 'socket' to 'this' within callback
            callback.apply(socket, args);
          }
        });
      });
    }
  };
});

