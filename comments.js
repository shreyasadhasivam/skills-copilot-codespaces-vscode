// Create web server
//create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//set up body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//set up the route
app.post('/comments', function(req, res){
    var comment = req.body;
    console.log(comment);
    res.send(comment);
});

app.listen(3000, function(){
    console.log('server is running on port 3000');
});