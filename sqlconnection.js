var express = require('express');
var app = express();
// server = require('http').createServer(app);

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
   
});

connection.connect(function(err) {
    if (err) {
        console.log("connected!");
       
    }
});

app.get('/', function(req,res)
     {
   
    	connection.query("CREATE DATABASE mydb2", function(err,result)
    	{
        if (err) throw err;
        console.log("database created");
        res.send("database created");
    });
});

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})