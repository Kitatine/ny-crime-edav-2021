
 const margin = {top: 20, right: 50, bottom: 30, left: 60};

 // currently using dummy data

 const totalCrime = 
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
{"date":"Mar","high":2488225},
{"date":"Apr","high":682762},
{"date":"May","high":1487890},
{"date":"Jun","high":1146830},
{"date":"Jul","high":2105808},
{"date":"Aug","high":2329514},
{"date":"Sep","high":2488225},
{"date":"Oct","high":1146830}];     
  
var parseTime = d3.timeParse("%b");

const categories = ['assualt', 'felony', 'burgary', 'test']


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




export {margin,  dataLookup,categories, totalCrime, data1 as dummydata};
