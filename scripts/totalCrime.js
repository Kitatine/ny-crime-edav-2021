
const margin = {top: 20, right: 50, bottom: 60, left: 80};

var totalCrime= [{"date":"Jan-10","high":37437},{"date":"Feb-10","high":31714},{"date":"Mar-10","high":37818},{"date":"Apr-10","high":37795},{"date":"May-10","high":37447},{"date":"Jun-10","high":36040},{"date":"Jul-10","high":35176},{"date":"Aug-10","high":35391},{"date":"Sep-10","high":34143},{"date":"Oct-10","high":37728},{"date":"Nov-10","high":33327},{"date":"Dec-10","high":28306},{"date":"Jan-11","high":34212},{"date":"Feb-11","high":34168},{"date":"Mar-11","high":38816},{"date":"Apr-11","high":37214},{"date":"May-11","high":36868},{"date":"Jun-11","high":35726},{"date":"Jul-11","high":34692},{"date":"Aug-11","high":33315},{"date":"Sep-11","high":31069},{"date":"Oct-11","high":33232},{"date":"Nov-11","high":32838},{"date":"Dec-11","high":30709},{"date":"Jan-12","high":36509},{"date":"Feb-12","high":34412},{"date":"Mar-12","high":38670},{"date":"Apr-12","high":33668},{"date":"May-12","high":36062},{"date":"Jun-12","high":32522},{"date":"Jul-12","high":33446},{"date":"Aug-12","high":35443},{"date":"Sep-12","high":32264},{"date":"Oct-12","high":32969},{"date":"Nov-12","high":23045},{"date":"Dec-12","high":27270},{"date":"Jan-13","high":33559},{"date":"Feb-13","high":31567},{"date":"Mar-13","high":33853},{"date":"Apr-13","high":34788},{"date":"May-13","high":35741},{"date":"Jun-13","high":31827},{"date":"Jul-13","high":33444},{"date":"Aug-13","high":34468},{"date":"Sep-13","high":31304},{"date":"Oct-13","high":33749},{"date":"Nov-13","high":31319},{"date":"Dec-13","high":28190},{"date":"Jan-14","high":32783},{"date":"Feb-14","high":30891},{"date":"Mar-14","high":36227},{"date":"Apr-14","high":34630},{"date":"May-14","high":36199},{"date":"Jun-14","high":33256},{"date":"Jul-14","high":34970},{"date":"Aug-14","high":33979},{"date":"Sep-14","high":31809},{"date":"Oct-14","high":34908},{"date":"Nov-14","high":28886},{"date":"Dec-14","high":19189},{"date":"Jan-15","high":25338},{"date":"Feb-15","high":27076},{"date":"Mar-15","high":30007},{"date":"Apr-15","high":29958},{"date":"May-15","high":28643},{"date":"Jun-15","high":28682},{"date":"Jul-15","high":30189},{"date":"Aug-15","high":31338},{"date":"Sep-15","high":28725},{"date":"Oct-15","high":28978},{"date":"Nov-15","high":26063},{"date":"Dec-15","high":24473},{"date":"Jan-16","high":27343},{"date":"Feb-16","high":27036},{"date":"Mar-16","high":28583},{"date":"Apr-16","high":26907},{"date":"May-16","high":28176},{"date":"Jun-16","high":26470},{"date":"Jul-16","high":24563},{"date":"Aug-16","high":26983},{"date":"Sep-16","high":25021},{"date":"Oct-16","high":26916},{"date":"Nov-16","high":23442},{"date":"Dec-16","high":23424},{"date":"Jan-17","high":25770},{"date":"Feb-17","high":23165},{"date":"Mar-17","high":25658},{"date":"Apr-17","high":25026},{"date":"May-17","high":25048},{"date":"Jun-17","high":23431},{"date":"Jul-17","high":23433},{"date":"Aug-17","high":24098},{"date":"Sep-17","high":22585},{"date":"Oct-17","high":24745},{"date":"Nov-17","high":22991},{"date":"Dec-17","high":20275},{"date":"Jan-18","high":23882},{"date":"Feb-18","high":21724},{"date":"Mar-18","high":22462},{"date":"Apr-18","high":21327},{"date":"May-18","high":22036},{"date":"Jun-18","high":19612},{"date":"Jul-18","high":20875},{"date":"Aug-18","high":21380},{"date":"Sep-18","high":18518},{"date":"Oct-18","high":19554},{"date":"Nov-18","high":18002},{"date":"Dec-18","high":17401},{"date":"Jan-19","high":20091},{"date":"Feb-19","high":17692},{"date":"Mar-19","high":19672},{"date":"Apr-19","high":19197},{"date":"May-19","high":19553},{"date":"Jun-19","high":17444},{"date":"Jul-19","high":19577},{"date":"Aug-19","high":18083},{"date":"Sep-19","high":16656},{"date":"Oct-19","high":17469},{"date":"Nov-19","high":15546},{"date":"Dec-19","high":13637},{"date":"Jan-20","high":16171},{"date":"Feb-20","high":15472},{"date":"Mar-20","high":13179},{"date":"Apr-20","high":8295},{"date":"May-20","high":13581},{"date":"Jun-20","high":8083},{"date":"Jul-20","high":7461},{"date":"Aug-20","high":9828},{"date":"Sep-20","high":11304},{"date":"Oct-20","high":13027},{"date":"Nov-20","high":11467},{"date":"Dec-20","high":12545}];

var svg3 = d3.select("#svg3")
var width3 =  +svg3.attr("width") - margin.left - margin.right
var height3 = +svg3.attr("height") - margin.top - margin.bottom
var g3 = svg3.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
var parseTime = d3.timeParse("%b-%y");
var xScale3 = d3.scaleTime().range([0, width3]);
var yScale3 = d3.scaleLinear()
  .domain([7000, 40000])
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





// d3.json("../data/cleaned/total_crime.json", function(data) {
//   console.log(data);
// });
