/**
 * a2 express server for static assets and
 * socket.io bi-directional state-channel(s)
 */
var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , fs = require('fs');

var root = process.cwd() + "/app/";
var root2 = __dirname + "/app/"

var req_state = "req:state";
var change_state = "resp:state";
var req_filter = "req:filter";
var update_filter = "resp:filter";
var state_sD;
var filter_sD;
var sD_path;
var log_path;
var log_initialized = false;
var pattern;
var values = [];
var text_values_even = [];
var text_values_odd = [];
var index = 0;
var p, q, i;



/**
 * a2 listens for prizm connections on port 8080
 * RECALL:
 * var change_state = "change:state";
 * var req_filter = "req:filter";
 * var update_filter = "resp:filter";
 * var filter_sD;
 * var barchart_sD;
 */
server.listen(8080);
console.log("server listening on port 8080");
console.log("server root = process.cwd() + '/app/' = " + root);
console.log("server root2 = __dirname + '/app/' = " + root2);



// serving data for <state>.json from ./data
app.get('/data/:f', function(req, res) {
  console.log("\n*** a2 received prizm http req for data: " + req.params.f);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.sendfile(__dirname + '/data/' + req.params.f);
});


/**
 * prizm connects to a2 => a2 broadcasts change-state to prizm
 */
io.sockets.on('connection', function (socket) {
  console.log("*** a2 accepted connection, listening for state requests:");


  /**
   * prizm request for state 
   */
  socket.on(req_state, function(state_sD) {
    var stateName = state_sD.name
    console.log("\n*** a2 received prizm req for state " + stateName + " on channel " + req_state);
    
    // read <state_sD.name>.json and send back to prizm
    sD_path = __dirname + '/sD/' + state_sD.name + '.json';
    console.log("sD_path = " + sD_path);
 
    fs.readFile(sD_path, 'utf8', function (err, state_sD) {
      if (err) {
        console.log('Error reading ' + sD_path + ' : ' + err);
        return;
      }

      // convert to object
      console.log("file read = " + state_sD);
      state_sD = JSON.parse(state_sD);

      // send modified state_sD back to prizm
      socket.emit(change_state, state_sD);
      console.log("*** a2 sending state " + stateName + " on channel " + change_state);
    });
  });


  /**
   * prizm request for filtering
   */
  socket.on(req_filter, function(filter_sD) {
    console.log("\n*** a2 received req for state " + filter_sD.name + " on channel " + req_filter);

    // request
    filter_sD = filter_sD || {};
    filter_sD.model = filter_sD.model || {};
    filter_sD.model.scene = filter_sD.model.scene || {};
    filter_sD.model.scene.filters = filter_sD.model.scene.filters || {};
    for(p in filter_sD.model.scene.filters){
      if(p){
        console.log("filter: " + p);
        q = filter_sD.model.scene.filters[p] || {};
        if(q.range){
          console.log(p + ".range.a = " + q.range.a);
          console.log(p + ".range.b = " + q.range.b);
        }
      }
    };
    console.log("filter_sD.name = " + filter_sD.name);
    

    // if footprint or footprint_gb modify the the filter_sD by 
    // generating new values for model['barchart']['data'][0].values
    // for now just add random data - iff 'footprint'
    // also, at first, keep data.values.length the same
  
    // [1] footprint
    if(filter_sD.name === 'footprint'){
      console.log("filter_sD.model['barchart']['data'][0]['name'] = " + filter_sD.model['barchart']['data'][0]['name']);

      // create values for data[0].values
      for(i = 0; i < 20; i++){
        values[i] = {};
        values[i]['x'] = i+1;
        values[i]['y'] = Math.round(90 * Math.random());
        console.log("values[" + i + "].x = " + values[i].x); 
        console.log("values[" + i + "].y = " + values[i].y); 
      }

      // set update = true
      q = filter_sD.model['barchart'];
      q.update = true;
      q['data'] = [{}];
      if(q['data'][0]){
        filter_sD.model['barchart']['data'][0]['name'] = 'table';
        filter_sD.model['barchart']['data'][0]['values'] = values;
      }else{
        console.log("q['data'][0] is undefined!!");
      }
    }

    // [2] footprint_gb
    /*
          "values": [
            {"category":"1", "position":0, "value":0.1},
            {"category":"1", "position":1, "value":0.6},
            {"category":"1", "position":2, "value":0.9},
            {"category":"1", "position":3, "value":0.4},
            ...
          ]
    */
    if(filter_sD.name === 'footprint_gb'){
      console.log("filter_sD.model['grouped_bar']['data'][0]['name'] = " + filter_sD.model['grouped_bar']['data'][0]['name']);

      // create values for data[0].values
      values = [];
      k = Math.ceil(20*Math.random());
      for(i = 0; i < k; i++){
        for(j = 0; j < 4; j++){
          values[i*4 + j] = {};
          values[i*4 + j]["category"] = i;
          values[i*4 + j]["position"] = j;
          values[i*4 + j]["value"] = (1.1 * Math.random()).toPrecision(3);
        }
      }

      // set update = true
      q = filter_sD.model['grouped_bar'];
      q.update = true;
      q['data'] = [{}];
      if(q['data'][0]){
        filter_sD.model['grouped_bar']['data'][0]['name'] = 'table';
        filter_sD.model['grouped_bar']['data'][0]['values'] = values;
      }else{
        console.log("q['data'][0] is undefined for grouped_bar!!");
      }

      // update area data
      q = filter_sD.model['area'];
      q['update'] = true;
      q['data'] = [{}];
      if(q['data'][0]){
        filter_sD.model['area']['data'][0]['name'] = 'table';
        filter_sD.model['area']['data'][0]['values'] = [];
        for(i = 0; i < k; i++){
          // {"x": 1,  "y": 28}
          filter_sD.model['area']['data'][0]['values'][i] = {x: i, y: 100. * Math.random().toFixed(2)};
          console.log("wrote area data-value " + i);
        }
      }else{
        console.log("q['data'][0] is undefined for area!!");
      }

    }


    // footprint or footprint_gb or footprint_*
    pattern = /^footprint/;
    if(pattern.test(filter_sD.name)){
      // [2] don't update map
      filter_sD.model['map']['update'] = "false";

      // update textboxes data to reflect filtering
      text_values_even = [{"TOT. REV.": "$1.453M"}, 
                           {"RPU": "$17.85"}, 
                           {"DAU": "$301.3K"}, 
                           {"EVENTS": "41.92"}, 
                           {"INSTALLS": "$114.2K"}];
      text_values_odd = [{"TOT. REV.": "$.89M"}, 
                           {"RPU": "$9.85"}, 
                           {"DAU": "$500.1K"}, 
                           {"EVENTS": "92.41"}, 
                           {"INSTALLS": "$1014.2K"}];
       
      // simulate text values totals updates
      filter_sD.model['textboxes']['data'][0]['values'] = (index%2 === 0) ? text_values_odd : text_values_even;
      filter_sD.model['textboxes']['update'] = "true";
    }

    // send modified filter_sD back to prizm
    socket.emit(update_filter, filter_sD);
    console.log("*** a2 sending " + filter_sD.name + " on channel " + update_filter);
    // advance index for textboxes values selection - odd/even
    index++;
  });



  /**
   * prizm request for state 
   */
  socket.on('log', function(s) {
    console.log("\n*** a2 received log-msg on channel " + req_state);
    
    if(!log_initialized){
      log_path = __dirname + '/logs/log_' + Date.now() + ".txt";
      console.log("log_path = " + log_path);
      log_initialized = true;
    }
    
    fs.appendFile(log_path, "\n" + s, function (err) {
      if (err) return console.log(err);
    });
  });

});
  
