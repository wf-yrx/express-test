var express = require('express');//引入express
var app = express();// 初始化
var path = require('path');// 引入path

app.use(express.static(path.join(__dirname, '/views')));
app.set('views', (__dirname + '/views'));
app.set( 'view engine', 'html' );

app.engine( '.html', require( 'ejs' ).__express );

app.get("/", function(req, res) {
    // res.render('index');
    res.send('hello world');
});

var server = app.listen(5002, "127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port)
});
