var express = require('express');
var app = express();
var path = require('path');

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
