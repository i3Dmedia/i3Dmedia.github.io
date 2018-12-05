/**
 * bubble-service.js
 */
angular.module('app').factory('Bubble', function(){
  "use strict";
  
  // return factory object
  return {

    render: function(actor, option){
      
      var sampleData = [{
        "x": 1,
        "y": 5
      }, {
        "x": 20,
        "y": 20
      }, {
        "x": 40,
        "y": 10
      }, {
        "x": 60,
        "y": 40
      }, {
        "x": 80,
        "y": 5
      }, {
        "x": 100,
        "y": 60
      }];
      InitChart();
      function InitChart(){
        var vis = d3.select("#bubble");
        var xRange = d3.scale.linear().range([40, 400]).domain([d3.min(sampleData, function (d) {
                            return (d.x);
                        }),
                        d3.max(sampleData, function (d) {
                            return d.x;
                        })]);
        var yRange = d3.scale.linear().range([400, 40]).domain([d3.min(sampleData, function (d) {
                            return d.y;
                        }),
                        d3.max(sampleData, function (d) {
                            return d.y;
                        })]);
        var xAxis = d3.svg.axis().scale(xRange);
        var yAxis = d3.svg.axis().scale(yRange).orient("left");
        vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
        vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
        var circles = vis.selectAll("circle").data(sampleData);
    circles
        .enter()
        .insert("circle")
        .attr("cx", function (d) { return xRange (d.x); })
        .attr("cy", function (d) { return yRange (d.y); })
        .attr("r", 10)
        .style("fill", "red");
    }
  };// return
});
