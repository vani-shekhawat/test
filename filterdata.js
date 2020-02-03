
var express = require('express');
var app = express();
var cons= require('path');
var mysql = require('mysql');
var getdata= require('./getdata');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', cons.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);
app.get('/filter', function (req, res) {
   formdata = req.query;
	getdata(res, formdata)
})

app.post('/filter', urlencodedParser, function (req, res)
{
	formdata = req.body;
	getdata(res, formdata)
})


var server = app.listen(8081, function () 
{
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})

