const express = require('express');

const router = express.Router();

router.route('').get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0
    });
 });
 router.route('/join').get(function(req, res){
    res.render('user/join');
 });

router.route('/join').post(function(req, res){
     console.log(req.body);
     res.redirect("/");
 });

router.route('/api').get(function(req, res){
    vo={
        no:10,
        name: '둘리',
        email: 'dooly@gamil.com',
        gender: 'male'
    };

    router.route('/:no').get(function(req, res){  //join 문자열이 안오면 no로 
        res.render('user/info', {
            no: req.params.no||0 //no가 참이면 req.param.no 거짓이면 0
        });
    });

    // res.writeHead(200, {
    //     'Content-Type': 'applicatin/json'
    // })
    // res.end(JSON.stringify);
    res.send(vo);
});
module.exports=router;