var http = require("http");

var myServer = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.write("Hello from Node Js");
    res.end();
});

myServer.listen(process.env.PORT, process.env.IP, () => {
   console.log("NodeJs Server HAs Started"); 
});