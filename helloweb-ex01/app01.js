const http=require("http");

const port=9090;
const server=http.createServer(function(req, resp){
   resp.writeHead(200, {
       'Content-Type': 'text/html'
   }); //헤더가 나감
   resp.end('<h1>Hello World</h1>');

});

server.listen(9090, function(){//리슨에서도 콜백을 받을 수 있음
    console.log("http server running on"  + port);
}); 