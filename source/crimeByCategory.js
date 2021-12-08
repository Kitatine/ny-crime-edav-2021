 var margin2 = {top: 20, right: 50, bottom: 60, left: 80};

 // currently using dummy data

 var data1 = 
 [{"date":"Jan","high":718994},
 {"date":"Feb","high":843114},
 {"date":"Mar","high":976672},
 {"date":"Apr","high":1307543},
 {"date":"May","high":1824710},
 {"date":"Jun","high":1953103},
 {"date":"Jul","high":1913625},
 {"date":"Aug","high":1977177},
 {"date":"Sep","high":1877884},
 {"date":"Oct","high":1878657},
 {"date":"Nov","high":1260355},
 {"date":"Dec","high":1016505}
 ];
 var data2 = 
 [{"date":"Jan","high":967287},
 {"date":"Feb","high":943744},
 {"date":"Mar","high":1327960},
 {"date":"Apr","high":1766094},
 {"date":"May","high":1924563},
 {"date":"Jun","high":2125370},
 {"date":"Jul","high":2181064},
 {"date":"Aug","high":2344224},
 {"date":"Sep","high":2444900},
 {"date":"Oct","high":2092573},
 {"date":"Nov","high":1478708},
 {"date":"Dec","high":955210}];
 
 var data3=
 [{"date":"Jan","high":1240596},
 {"date":"Feb","high":1146830},
 {"date":"Mar","high":1068457},
 {"date":"Apr","high":682762},
 {"date":"May","high":1487890},
 {"date":"Jun","high":1882273},
 {"date":"Jul","high":2105808},
 {"date":"Aug","high":2329514},
 {"date":"Sep","high":2488225},
 {"date":"Oct","high":2248869}];
 
 
 var data4=
 [{"date":"Jan","high":1240596},
 {"date":"Feb","high":1146830},
 {"date":"Mar","high":1068457},
 {"date":"Apr","high":682762},
 {"date":"May","high":1487890},
 {"date":"Jun","high":1882273},
 {"date":"Jul","high":2105808},
 {"date":"Aug","high":2329514},
 {"date":"Sep","high":2488225},
 {"date":"Oct","high":2248869}];
   
 var parseTime = d3.timeParse("%b");
 
 var categories = ['assualt', 'felony', 'burgary', 'test']
 
 
 var dataLookup ={
     'assualt': data1,
     'felony': data2,
     'burgary': data3,
     'test': data4
 }
 
 Object.keys(dataLookup).forEach((key) => {
     dataLookup[key].forEach((d) => {
         d.date = parseTime(d.date);
     });
 });



///////////////////
var svg2 = d3.select("#crimeByCategory")

var width4 =  +svg2.attr("width") - margin2.left - margin2.right
var height4 = +svg2.attr("height") - margin2.top - margin2.bottom
var g4 = svg2.append("g").attr("transform", `translate(${margin2.left}, ${margin2.top})`);

var xScale4 = d3.scaleTime().range([0, width4]);
var yScale4 = d3.scaleLinear()
  .domain([70000, 3000000])
  .range([height4, 0]);

var line4 = d3.line()
  .x(d => xScale4(d.date))
  .y(d => yScale4(d.high));


xScale4.domain(d3.extent(data1, d => d.date));
    
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
    console.log(selectedCategory, dataLookup[selectedCategory])  
    
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


