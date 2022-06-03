//cli-color
var clc=require('cli-color');
var error=clc.red.bold;
var ok=clc.yellow.bold;



const http = require ('http');
const port = 3000;
const fs= require('fs');


const server = http.createServer(function(req, res) {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    try {
        const html=fs.readFileSync('index.html');
        res.write(html);
        res.end();

    } catch (e) {
        res.statusCode = 404;
        res.write('Bad Request');
        console.log(e);
        res.end();
    }
  
});

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong:',error);
    } else {
        console.log(ok('Server is listening on port:'+port));
    }

});