const http=require('require');
http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type:text/plain'})
 res.end("Hello World");
}).listen(8080)
