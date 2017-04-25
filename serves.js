/**
 * Created by wuyang on 16/5/22.
 */

const http = require("http");
const fs = require("fs");

var mock = require("./mock");

http.createServer(function(req,res){

    // console.log(mock.nets);
    // console.log(mock.hosts);
    console.log('有人来了:'+req.url);
        var url = '../topology/ch07';
     // if(req.url == '/index'){
        fs.readFile('../topology/ch07/index.html','utf-8',function(err,data){
            if(err){
                console.log(err);
                res.end('404');
            }else{
                console.log(data);
                res.write(data);
                res.end('111');
            }

        });
/*
         fs.readFile(url+req.url,function(err,data){
             if(err){
                 res.end('404');  //?
             }else{
                 res.writeHead(200 , {"Content-Type" : "text/html"});
                 res.end(data);
             }
         });
         */
     // }




}).listen(8082)
