const http=require('http');
const path=require('path');
const express=require('express');

const helloRouter=require('./routes/hello');
const mainRouter=require('./routes/main');
const userRouter=require('./routes/user');
const port=9090;

//Application SetUp
const application=express()
    //1. static resources
    .use(express.static(path.join(__dirname, "assets")))

    //2. request body parser
    .use(express.urlencoded({extended: true})) //applicaion/x-www-form-urlencoded
    .use(express.json()) //applicaion/json

    //3. view engine
    .set('views', path.join(__dirname, "views") )
    .set('view engine', 'ejs') //ejs는 npm 템플릿 패키지


    //4. request router
    .all('*', function(req, res, next){ //all로 모든 함수 받음, next로 값을 넘김
        res.locals.req=req;
        res.locals.res=res;
        next();
    })
    .use('/', mainRouter)
    .use('/user', userRouter)
    .use('/hello', helloRouter);
//Server SetUp
http //서버 구동할때 필요
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on " + port)
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port)