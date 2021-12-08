

import { margin,  dataLookup,categories, dummydata} from './CONSTANTS.js';

var svg2 = d3.select("#crimeByCategory")

var width4 =  +svg2.attr("width") - margin.left - margin.right
var height4 = +svg2.attr("height") - margin.top - margin.bottom
var g4 = svg2.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

var xScale4 = d3.scaleTime().range([0, width4]);
var yScale4 = d3.scaleLinear()
  .domain([70000, 3000000])
  .range([height4, 0]);

var line4 = d3.line()
  .x(d => xScale4(d.date))
  .y(d => yScale4(d.high));


xScale4.domain(d3.extent(dummydata, d => d.date));
    
g4.append("g").attr("transform", `translate(0, ${height4})`)
  .call(d3.axisBottom(xScale4).ticks(18));
    
g4.append("g").call(d3.axisLeft(yScale4))

//https://www.d3-graph-gallery.com/graph/line_select.html
d3.select("select#CrimeCategory")
      .selectAll('myOptions')
      .data(categories)
      .enter()
      .append('option')
      .text(function (d) { return d[0].toUpperCase() + d.substring(1); }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

var selectedCategory = "assualt";

d3.select("select#CrimeCategory").on("change", function(d){
    selectedCategory = d3.select(this).property("value");
//     console.log(selectedCategory, dataLookup[selectedCategory])  
    
    g4.append("path")
      .datum(dataLookup[selectedCategory])
      .attr("class", selectedCategory)
    .attr("fill", "none")
    .attr("d", line4);
    
    let totalLength = svg2.select('.' + selectedCategory).node().getTotalLength();
    svg2.select('.' + selectedCategory)
    .attr("stroke-dasharray",  totalLength + " " +  totalLength)
    .attr("stroke-dashoffset",  totalLength)
    .transition() // Call Transition Method
    .duration(2000) // Set Duration timing (ms)
    .ease(d3.easeLinear) // Set Easing option
    .attr("stroke-dashoffset", 0); 
});


