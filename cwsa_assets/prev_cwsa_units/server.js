var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

// http server of static files
app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://cavaradossi');
  res.sendfile(__dirname + '/index.html');
});

app.get('/app.js', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://cavaradossi');
  res.sendfile(__dirname + '/app.js');
});

// template udf information in json
// url specifies the template (exp 't2') and json-file (exp: 'u1-2-2.json')
app.get('/json/:t/:u', function(req, res) {
  console.log("server recvd req for: " + __dirname + '/json/' + req.params.t + '/' + req.params.u);
  res.setHeader('Access-Control-Allow-Origin', 'http://cavaradossi');
  res.sendfile(__dirname + '/json/' + req.params.t + '/' + req.params.u);
});



// server for text-message channel
io.sockets.on('connection', function (socket) {
  //socket.emit('new:msg', 'Welcome to angel service');
  console.log("accepted connection, broadcast: Welcome...");

  socket.on('broadcast:msg', function(data) {
    // Tell all the other clients (except self) about the new message
    socket.emit('new:msg', data.message);
    console.log("echo: " + data.message);
  });
});
