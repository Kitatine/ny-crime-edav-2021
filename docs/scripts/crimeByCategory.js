 var margin2 = { top: 20, right: 50, bottom: 60, left: 80 };


 // *************** data prep ***************//

 var assualt = [{ "date": "Jan-18", "high": 2830 }, { "date": "Feb-18", "high": 2730 }, { "date": "Mar-18", "high": 2941 }, { "date": "Apr-18", "high": 2825 }, { "date": "May-18", "high": 3138 }, { "date": "Jun-18", "high": 2915 }, { "date": "Jul-18", "high": 3145 }, { "date": "Aug-18", "high": 3034 }, { "date": "Sep-18", "high": 2823 }, { "date": "Oct-18", "high": 2805 }, { "date": "Nov-18", "high": 2580 }, { "date": "Dec-18", "high": 2552 }, { "date": "Jan-19", "high": 2701 }, { "date": "Feb-19", "high": 2388 }, { "date": "Mar-19", "high": 2622 }, { "date": "Apr-19", "high": 2736 }, { "date": "May-19", "high": 3002 }, { "date": "Jun-19", "high": 2807 }, { "date": "Jul-19", "high": 3037 }, { "date": "Aug-19", "high": 2724 }, { "date": "Sep-19", "high": 2670 }, { "date": "Oct-19", "high": 2639 }, { "date": "Nov-19", "high": 2379 }, { "date": "Dec-19", "high": 2283 }, { "date": "Jan-20", "high": 2406 }, { "date": "Feb-20", "high": 2314 }, { "date": "Mar-20", "high": 2146 }, { "date": "Apr-20", "high": 1516 }, { "date": "May-20", "high": 2199 }, { "date": "Jun-20", "high": 1537 }, { "date": "Jul-20", "high": 1646 }, { "date": "Aug-20", "high": 1869 }, { "date": "Sep-20", "high": 1955 }, { "date": "Oct-20", "high": 2099 }, { "date": "Nov-20", "high": 1969 }, { "date": "Dec-20", "high": 2075 }]
 var drugs = [{ "date": "Jan-18", "high": 3812 }, { "date": "Feb-18", "high": 3638 }, { "date": "Mar-18", "high": 3664 }, { "date": "Apr-18", "high": 3240 }, { "date": "May-18", "high": 3086 }, { "date": "Jun-18", "high": 2270 }, { "date": "Jul-18", "high": 2360 }, { "date": "Aug-18", "high": 2654 }, { "date": "Sep-18", "high": 2012 }, { "date": "Oct-18", "high": 2176 }, { "date": "Nov-18", "high": 1942 }, { "date": "Dec-18", "high": 1740 }, { "date": "Jan-19", "high": 2132 }, { "date": "Feb-19", "high": 2007 }, { "date": "Mar-19", "high": 2160 }, { "date": "Apr-19", "high": 1981 }, { "date": "May-19", "high": 1892 }, { "date": "Jun-19", "high": 1452 }, { "date": "Jul-19", "high": 1802 }, { "date": "Aug-19", "high": 1790 }, { "date": "Sep-19", "high": 1534 }, { "date": "Oct-19", "high": 1713 }, { "date": "Nov-19", "high": 1550 }, { "date": "Dec-19", "high": 1058 }, { "date": "Jan-20", "high": 1562 }, { "date": "Feb-20", "high": 1521 }, { "date": "Mar-20", "high": 1137 }, { "date": "Apr-20", "high": 519 }, { "date": "May-20", "high": 1340 }, { "date": "Jun-20", "high": 214 }, { "date": "Jul-20", "high": 212 }, { "date": "Aug-20", "high": 796 }, { "date": "Sep-20", "high": 962 }, { "date": "Oct-20", "high": 1187 }, { "date": "Nov-20", "high": 820 }, { "date": "Dec-20", "high": 1019 }]
 var vehocle_and_traiffic_law = [{ "date": "Jan-18", "high": 2251 }, { "date": "Feb-18", "high": 1974 }, { "date": "Mar-18", "high": 1996 }, { "date": "Apr-18", "high": 1702 }, { "date": "May-18", "high": 1657 }, { "date": "Jun-18", "high": 1438 }, { "date": "Jul-18", "high": 1465 }, { "date": "Aug-18", "high": 1487 }, { "date": "Sep-18", "high": 1248 }, { "date": "Oct-18", "high": 1397 }, { "date": "Nov-18", "high": 1279 }, { "date": "Dec-18", "high": 1269 }, { "date": "Jan-19", "high": 1705 }, { "date": "Feb-19", "high": 1525 }, { "date": "Mar-19", "high": 1621 }, { "date": "Apr-19", "high": 1410 }, { "date": "May-19", "high": 1331 }, { "date": "Jun-19", "high": 1094 }, { "date": "Jul-19", "high": 1126 }, { "date": "Aug-19", "high": 951 }, { "date": "Sep-19", "high": 822 }, { "date": "Oct-19", "high": 917 }, { "date": "Nov-19", "high": 983 }, { "date": "Dec-19", "high": 758 }, { "date": "Jan-20", "high": 856 }, { "date": "Feb-20", "high": 1034 }, { "date": "Mar-20", "high": 631 }, { "date": "Apr-20", "high": 129 }, { "date": "May-20", "high": 349 }, { "date": "Jun-20", "high": 93 }, { "date": "Jul-20", "high": 99 }, { "date": "Aug-20", "high": 139 }, { "date": "Sep-20", "high": 203 }, { "date": "Oct-20", "high": 326 }, { "date": "Nov-20", "high": 357 }, { "date": "Dec-20", "high": 373 }]
 var felony = [{ "date": "Jan-18", "high": 1233 }, { "date": "Feb-18", "high": 1166 }, { "date": "Mar-18", "high": 1243 }, { "date": "Apr-18", "high": 1239 }, { "date": "May-18", "high": 1357 }, { "date": "Jun-18", "high": 1342 }, { "date": "Jul-18", "high": 1314 }, { "date": "Aug-18", "high": 1457 }, { "date": "Sep-18", "high": 1250 }, { "date": "Oct-18", "high": 1341 }, { "date": "Nov-18", "high": 1128 }, { "date": "Dec-18", "high": 1123 }, { "date": "Jan-19", "high": 1184 }, { "date": "Feb-19", "high": 984 }, { "date": "Mar-19", "high": 1256 }, { "date": "Apr-19", "high": 1302 }, { "date": "May-19", "high": 1433 }, { "date": "Jun-19", "high": 1325 }, { "date": "Jul-19", "high": 1500 }, { "date": "Aug-19", "high": 1352 }, { "date": "Sep-19", "high": 1274 }, { "date": "Oct-19", "high": 1266 }, { "date": "Nov-19", "high": 1235 }, { "date": "Dec-19", "high": 1097 }, { "date": "Jan-20", "high": 1303 }, { "date": "Feb-20", "high": 1131 }, { "date": "Mar-20", "high": 1199 }, { "date": "Apr-20", "high": 804 }, { "date": "May-20", "high": 1205 }, { "date": "Jun-20", "high": 1016 }, { "date": "Jul-20", "high": 1052 }, { "date": "Aug-20", "high": 1155 }, { "date": "Sep-20", "high": 1137 }, { "date": "Oct-20", "high": 1249 }, { "date": "Nov-20", "high": 1047 }, { "date": "Dec-20", "high": 1177 }]
 var petit_larceny = [{ "date": "Jan-18", "high": 1940 }, { "date": "Feb-18", "high": 1847 }, { "date": "Mar-18", "high": 1945 }, { "date": "Apr-18", "high": 1928 }, { "date": "May-18", "high": 2038 }, { "date": "Jun-18", "high": 1908 }, { "date": "Jul-18", "high": 2059 }, { "date": "Aug-18", "high": 2146 }, { "date": "Sep-18", "high": 1849 }, { "date": "Oct-18", "high": 1861 }, { "date": "Nov-18", "high": 1877 }, { "date": "Dec-18", "high": 2020 }, { "date": "Jan-19", "high": 1899 }, { "date": "Feb-19", "high": 1815 }, { "date": "Mar-19", "high": 1759 }, { "date": "Apr-19", "high": 1812 }, { "date": "May-19", "high": 2017 }, { "date": "Jun-19", "high": 1885 }, { "date": "Jul-19", "high": 2010 }, { "date": "Aug-19", "high": 1825 }, { "date": "Sep-19", "high": 1778 }, { "date": "Oct-19", "high": 1800 }, { "date": "Nov-19", "high": 1515 }, { "date": "Dec-19", "high": 1512 }, { "date": "Jan-20", "high": 1524 }, { "date": "Feb-20", "high": 1480 }, { "date": "Mar-20", "high": 1228 }, { "date": "Apr-20", "high": 786 }, { "date": "May-20", "high": 1035 }, { "date": "Jun-20", "high": 459 }, { "date": "Jul-20", "high": 491 }, { "date": "Aug-20", "high": 711 }, { "date": "Sep-20", "high": 826 }, { "date": "Oct-20", "high": 870 }, { "date": "Nov-20", "high": 965 }, { "date": "Dec-20", "high": 1031 }]
 var parseTime = d3.timeParse("%b-%y");

 var categories = ['assualt', 'drugs', 'vehicle_and_traiffic_law', 'felony', 'petit_larceny']


 var dataLookup = {
     'assualt': assualt,
     'drugs': drugs,
     'vehicle_and_traiffic_law': vehocle_and_traiffic_law,
     'felony': felony,
     'petit_larceny': petit_larceny
 }

 Object.keys(dataLookup).forEach((key) => {
     dataLookup[key].forEach((d) => {
         d.date = parseTime(d.date);
     });
 });


 // *************** page setup  ***************//

 var svg2 = d3.select("#crimeByCategory")


 var width4 = +svg2.attr("width") - margin2.left - margin2.right
 var height4 = +svg2.attr("height") - margin2.top - margin2.bottom
 var g4 = svg2.append("g").attr("transform", `translate(${margin2.left}, ${margin2.top})`);

 var xScale4 = d3.scaleTime().range([0, width4]);
 var yScale4 = d3.scaleLinear()
     .domain([0, 4000])
     .range([height4, 0]);

 var line4 = d3.line()
     .x(d => xScale4(d.date))
     .y(d => yScale4(d.high))
     .curve(d3.curveNatural);


 xScale4.domain(d3.extent(assualt, d => d.date));

 g4.append("g").attr("transform", `translate(0, ${height4})`)
     .call(d3.axisBottom(xScale4).ticks(18));

 g4.append("g").call(d3.axisLeft(yScale4))

 // ***************  set color and legend ***************//

 var color = d3.scaleOrdinal().domain(categories).range(d3.schemeSet3);

 var crimes = color.domain().map(function(name) {
     //  console.log(name)
     return {
         name: name,
         values: dataLookup[name]
     }
 });

 var colorLookup = {
     'assualt': '#e9967a',
     'drugs': '#8fbc8f',
     'vehicle_and_traiffic_law': '#6495ed',
     'felony': '#8b008b',
     'petit_larceny': '#483d8b'
 }

 var legend = svg2.selectAll('g4')
     .data(crimes)
     .enter()
     .append('g')
     .attr('class', 'legend');

 legend.append('rect')
     .attr('x', width4 - 20)
     .attr('y', function(d, i) {
         return i * 20;
     })
     .attr('width', 10)
     .attr('height', 10)
     .style('fill', (d) => { return colorLookup[d.name] });

 legend.append('text')
     .attr('x', width4 - 8)
     .attr('y', function(d, i) {
         return (i * 20) + 9;
     })
     .text(function(d) {
         return (d.name[0].toUpperCase() + d.name.substring(1)).replaceAll("_", " ")
     });


 // ***************  drop down botton ***************//


 //https://www.d3-graph-gallery.com/graph/line_select.html
 d3.select("select#CrimeCategory")
     .selectAll('myOptions')
     .data(categories)
     .enter()
     .append('option')
     .text(function(d) {
         return (d[0].toUpperCase() + d.substring(1)).replaceAll("_", " ");
     }) // text showed in the menu
     .attr("value", function(d) { return d; }) // corresponding value returned by the button

 var selectedCategory = "  ";

 // ***************   mouseover get line ***************//


 var mouseG = svg2.append("g")
     .attr("class", "mouse-over-effects").attr("transform", `translate(${margin2.left}, ${margin2.top})`)

 mouseG.append("path") // this is the black vertical line to follow mouse
     .attr("class", "mouse-line")
     .style("stroke", "black")
     .style("stroke-width", "1px")
     .style("opacity", "0");

 var lines = document.getElementsByClassName('line');

 var mousePerLine = mouseG.selectAll('.mouse-per-line')
     .data(crimes)
     .enter()
     .append("g")
     .attr("id", function(d, i) { return d.name; })
     .attr("class", "mouse-per-line");

 mousePerLine.append("circle")
     .attr("r", 7)
     .attr("id", function(d, i) { return d.name; })
     .style("stroke", 'grey'
         //  function(d, i) {
         //      console.log(d, i)
         //      return colorLookup[d.name];
     )
     .style("fill", "none")
     .style("stroke-width", "1.5px")
     .style("opacity", "0")
     //  .style('display', 'none');

 mousePerLine.append("text")
     .attr("transform", "translate(10,3)")
     .attr("id", "text1");

 mousePerLine.append("text")
     .attr("transform", "translate(10,30)")
     .attr("id", 'text2')

 // ***************  botton submittion ***************//

 d3.select("select#CrimeCategory").on("change", function(d) {
     selectedCategory = d3.select(this).property("value");
     // console.log(selectedCategory, dataLookup[selectedCategory])  

     g4.append("path")
         .datum(dataLookup[selectedCategory])
         .attr("class", 'line')
         .attr("id", selectedCategory)
         .attr("fill", 'none')
         .attr("d", line4)
         .style("stroke", colorLookup[selectedCategory])
         .style("stroke-width", '2.0px')


     let totalLength = svg2.select('#' + selectedCategory).node().getTotalLength();
     svg2.select('#' + selectedCategory)
         .attr("stroke-dasharray", totalLength + " " + totalLength)
         .attr("stroke-dashoffset", totalLength)
         .transition() // Call Transition Method
         .duration(2000) // Set Duration timing (ms)
         .ease(d3.easeLinear) // Set Easing option
         .attr("stroke-dashoffset", 0)

     ///************************************ */
     mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
         .attr('width', width4) // can't catch mouse events on a g element
         .attr('height', height4)
         .attr('fill', 'none')
         .attr('pointer-events', 'all')
         .on('mouseout', function() { // on mouse out hide line, circles and text
             d3.select(".mouse-line")
                 .style("opacity", "0");
             d3.selectAll(".mouse-per-line circle")
                 .style("opacity", "0");
             d3.selectAll(".mouse-per-line text")
                 .style("opacity", "0");
         })
         .on('mouseover', function() { // on mouse in show line, circles and text
             d3.select(".mouse-line")
                 .style("opacity", "1");
             d3.selectAll(".mouse-per-line circle")
                 .style("opacity", "1");
             d3.selectAll(".mouse-per-line text")
                 .style("opacity", "1");
         })
         .on('mousemove', function() { // mouse moving over canvas
             var mouse = d3.pointer(event, g4.node());
             d3.select(".mouse-line")
                 .attr("d", function() {
                     var d = "M" + mouse[0] + "," + height4;
                     d += " " + mouse[0] + "," + 0;
                     return d;
                 });
             for (let i = 0; i < lines.length; i++) {
                 var id = lines[i].id
                     //  console.log(d3.select(".mouse-per-line#" + id))
                     //  d3.select(".mouse-per-line#" + id).select('circle').style("stroke", colorLookup[id]);
                     //  d3.select(".mouse-per-line#" + id).select('circle').style("stroke", colorLookup[id]);
             }

             d3.selectAll(".mouse-per-line")
                 .attr("transform", function(d, i) {

                     var xDate = xScale4.invert(mouse[0]),
                         bisect = d3.bisector(function(d) { return d.date; }).right;
                     idx = bisect(d.values, xDate);

                     var pos;
                     if (lines[i] != null) {
                         var beginning = 0,
                             end = lines[i].getTotalLength();
                         target = null;
                         while (true) {
                             target = Math.floor((beginning + end) / 2);
                             pos = lines[i].getPointAtLength(target);
                             if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                                 break;
                             }
                             if (pos.x > mouse[0]) end = target;
                             else if (pos.x < mouse[0]) beginning = target;
                             else break; //position found
                         }

                     }
                     if (lines[i] != null) {
                         var id = lines[i].id;
                         d3.select(this).select('#text1').text(`Category: ${lines[i].id}`);
                         d3.select(this).select('#text2').text(`Frequency: ${yScale4.invert(pos.y).toFixed(2)}`);
                         //  console.log(d3.select(this).select('circle#' + id))
                         //  d3.select(this).select('circle#' + id).style("stroke", colorLookup[id]);
                         return "translate(" + mouse[0] + "," + pos.y + ")";

                     }
                     //      //  var dateStr = `<tspan Category: ${id}'> Frequency: ${yScale4.invert(pos.y).toFixed(2)}</tspan>`;
                     //  d3.select(this).select('#text1').text(`Category: ${lines[i].id}`);
                     //  d3.select(this).select('#text2').text(`Frequency: ${yScale4.invert(pos.y).toFixed(2)}`);
                     //  d3.select(this).select('circle#' + lines[i].id).style("stroke", colorLookup[id]);
                     return "translate(" + 0 + "," + height4 + ")";
                 });

         });

 });