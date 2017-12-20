/**
 * Created by wuyang on 16/5/22.
 */

const http = require("http");
const fs = require("fs");

var mock = require("./mock");

http.createServer(function(req,response){
    console.log('有人来了:'+req.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8082)
console.log('http://localhost:8082/');
