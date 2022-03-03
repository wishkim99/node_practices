const http=require("http");
const fs=require('fs');

const port=9090;
const server=http.createServer(function(req, resp){
    console.log(req.url);

if(req.url==='/'){
    req.url='/index.html';
}

fs.readFile(__dirname + '/public'+req.url, function(error, data){//비동기: 다음라인이 실행됨
    resp.writeHead(200, {
        'Content-Type': 'text/html'
 }); //헤더가 나감
    resp.end(data);
 
});
    
//data=fs.readFileSync('') //동기

});

server.listen(9090, function(){//리슨에서도 콜백을 받을 수 있음
    console.log("http server running on"  + port);
}); 