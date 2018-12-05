// csv2json_bydir.js
// Node utility to create a json file from a csv-file
// for all csv-files in a directory in which the utility is placed
// usage: data>node csv2json_bydir
/*
symbol,date,price
MSFT,Jan 1 2000,39.81
MSFT,Feb 1 2000,36.35
*/
var fs = require('fs');
var csvfilenames = [];
var csv = [];
var json = [];
var i, j, content, tokens, tmp;


var transform = function(csvfilename, contents) {

  csv = contents.toString().split("\n");
  tokens = csv[0].split(",");
  for(i=1;i < csv.length;i++) {
    content = csv[i].split(",");
    tmp = {};
    for(j=0;j < tokens.length; j++) {
      try {
        tmp[tokens[j]] = content[j];
      } catch(err) {
        tmp[tokens[j]] = "";
      }
    }
    json.push(tmp);
  }
  jsonfilename = csvfilename.replace(/.csv/, '.json');
  console.log("jsonfilename = " + jsonfilename);
  
  fs.writeFile(jsonfilename, JSON.stringify(json), function(err) {
    if(err)
      console.log(err)
    else
      //console.log(json);
      console.log("File saved");
  });
}

fs.readdir(__dirname, function(err, files) {
    files.filter(function(file) { 
      return (file.substr(-4) === '.csv'); 
    })
    .forEach(function(filename) { 
      fs.readFile(filename, 'utf-8', function(err, contents) { 
        transform(filename, contents); 
      }); 
    });
});


