var url=require("url");
var adr="http://localhost:8900/allcourses?year=2022&month=february";
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query; //returns an object: { year: 2022, month: 'february' }
console.log(qdata.month); //returns 'february'