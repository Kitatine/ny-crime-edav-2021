
import { margin, totalCrime} from './CONSTANTS.js';


var svg3 = d3.select("#svg3")
var width3 =  +svg3.attr("width") - margin.left - margin.right
var height3 = +svg3.attr("height") - margin.top - margin.bottom
var g3 = svg3.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
var parseTime = d3.timeParse("%b-%y");
var xScale3 = d3.scaleTime().range([0, width3]);
var yScale3 = d3.scaleLinear()
  .domain([70000, 3000000])
  .range([height3, 0]);
var line3 = d3.line()
  .x(d => xScale3(d.date))
  .y(d => yScale3(d.high));

totalCrime.forEach(function(d) {
      d.date = parseTime(d.date);
});

xScale3
  .domain(d3.extent(totalCrime, d => d.date));
  
g3.append("g")
    .attr("transform", `translate(0, ${height3})`)
    .call(d3.axisBottom(xScale3).ticks(18));
g3.append("g")
    .call(d3.axisLeft(yScale3));
g3.append("path")
    .datum(totalCrime)
    .attr("class", "line1")
    .attr("fill", "none")
    .attr("d", line3);
    
let totalLength1 = svg3.select('.line1').node().getTotalLength();

svg3.select('.line1')
  .attr("stroke-dasharray", totalLength1 + " " + totalLength1)
  .attr("stroke-dashoffset", totalLength1)
  .transition() // Call Transition Method
  .duration(2000) // Set Duration timing (ms)
  .ease(d3.easeLinear) // Set Easing option
  .attr("stroke-dashoffset", 0); 