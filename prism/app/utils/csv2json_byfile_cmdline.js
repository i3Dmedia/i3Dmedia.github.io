// csv2json_byfile_cmdline.js
// Node utility to create a json file from a csv-file
// usage: data>csv2json_byfile_cmdline f.csv #=> creates f.json
/*
symbol,date,price
MSFT,Jan 1 2000,39.81
MSFT,Feb 1 2000,36.35
*/

var fs = require('fs');

// test - replace by cmdline interface
//csvfilename = "stocks.csv";
var csvfilename = process.argv[2];
console.log("csvfilename entered is " + csvfilename);


var csv = fs.readFileSync(csvfilename).toString().split("\n");
var json = [];
var i, j, content, tmp;

var tokens = csv[0].split(",");
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

