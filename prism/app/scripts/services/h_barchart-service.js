/**
 * h_barchart-service.js
 */
angular.module('app').factory('H_Barchart', function(){
  "use strict";
  
  // return factory object
  return {

    render: function(actor, option){
  
      var s = actor;
      var chart = d3.select("#" + actor['name']);
      var w = s.w;
      var h = s.h;
      var text_xpos = s.text_xpos;
      var text_ypos = s.text_ypos;
      var font_size = s.font_size;
      var font_weight = s.font_weight;
      var data = s.data;
      var max_n = 0;

      // diagnostics
      console.log("chart = " + chart);
      console.log("actor = " + actor);
      display_object(actor);


      for (var d in data) {
        max_n = Math.max(data[d].n, max_n);
      }
    
      var dx = w / max_n;
      var dy = h / data.length;
  
      // bars
      var bars = chart.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {return 0;})
        .attr("y", function(d, i) {return dy*i;})
        .attr("width", function(d, i) {return dx*d.n})
        .attr("height", dy)
        .attr("fill", function(){ return "#" + Math.random().toString(16).slice(2, 8);});
  
      // labels
      var text = chart.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        //.attr("class", function(d, i) {return "label " + d.label;})
        .attr("x", text_xpos)
        .attr("y", function(d, i) {return dy*i + text_ypos;})
        .text( function(d) {return d.label + " (" + d.n  + ")";})
        .attr("font-size", font_size)
        .style("font-weight", font_weight);
    }
  };// return
});
