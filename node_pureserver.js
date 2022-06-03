//cli-color
var clc=require('cli-color');
var error=clc.red.bold;
var ok=clc.yellow.bold;



const http = require ('http');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode=200;
    res.write('hello node');
    res.end();
    //console.log(req);

  
});

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong:',error);
    } else {
        console.log(ok('Server is listening on port:'+port));
    }

});