const http = require('http');
const colors = require('colors');
const fig = require('figlet');

http.createServer((req,res)=>{
   res.writeHead(200,{"content-type":"text/html"});
   res.end("Hello Gaurav Succesfully");
   

}).listen(8080);
fig("GauRav Raskar",(err,data)=>{
    if(err){
     console.log("There IS Some Error");
    }
   console.log(colors.rainbow(data));
});