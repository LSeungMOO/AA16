var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(req,res){
    res.send('<a href="/hello">Hello Page</a>');
});

app.get('/aa16',function(req,res){
    res.send('Hello aa16,Comsi! My first express server!!!');
});

app.get('/comsi',function(req,res){
    res.send('Hello Comsi!');
});

var server = app.listen(port,function(){
    console.log('Listening on port %d',server.address().port);
});