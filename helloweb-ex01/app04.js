const connect = require("connect");
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 9090;
const app = connect();

app.use(connectRoute(function(router){
    router.get("/", function(req, resp){ //핸들러(res와 resp를 받아줌)
        resp.writeHead(200, {
            'Content-Type': 'text/html'
     }); //헤더가 나감
        resp.end("<h1>Main</h1>");
    });

    router.get("/user", function(req, resp){ //핸들러(res와 resp를 받아줌)
   resp.writeHead(200, {
      'Content-Type': 'text/html'
     }); //헤더가 나감
        resp.end("<h1>User</h1>");
    });
}));

app.use(serveStatic(__dirname + "/public"));
app.listen(9090, function(){//리슨에서도 콜백을 받을 수 있음
    console.log("http server running on "  + port);
}); 