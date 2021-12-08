
 const margin = {top: 20, right: 50, bottom: 60, left: 80};

 var totalCrime = 
 [{"date":"Jan-18","high":718994},
   {"date":"Feb-18","high":843114},
   {"date":"Mar-18","high":976672},
   {"date":"Apr-18","high":1307543},
   {"date":"May-18","high":1824710},
   {"date":"Jun-18","high":1953103},
   {"date":"Jul-18","high":1913625},
   {"date":"Aug-18","high":1977177},
   {"date":"Sep-18","high":1877884},
   {"date":"Oct-18","high":1878657},
   {"date":"Nov-18","high":1260355},
   {"date":"Dec-18","high":1016505},
   {"date":"Jan-19","high":967287},
   {"date":"Feb-19","high":943744},
   {"date":"Mar-19","high":1327960},
   {"date":"Apr-19","high":1766094},
   {"date":"May-19","high":1924563},
   {"date":"Jun-19","high":2125370},
   {"date":"Jul-19","high":2181064},
   {"date":"Aug-19","high":2344224},
   {"date":"Sep-19","high":2444900},
   {"date":"Oct-19","high":2092573},
   {"date":"Nov-19","high":1478708},
   {"date":"Dec-19","high":955210},
   {"date":"Jan-20","high":1240596},
   {"date":"Feb-20","high":1146830},
   {"date":"Mar-20","high":1068457},
   {"date":"Apr-20","high":682762},
   {"date":"May-20","high":1487890},
   {"date":"Jun-20","high":1882273},
   {"date":"Jul-20","high":2105808},
   {"date":"Aug-20","high":2329514},
   {"date":"Sep-20","high":2488225},
   {"date":"Oct-20","high":2248869}];
   
 

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