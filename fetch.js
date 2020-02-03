var express = require('express');
var app = express();
var cons= require('path');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', cons.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);

app.get('/fetchdata', function (req, res)
{
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database: 'dbemp'

	});
	connection.connect();
	connection.query("select * from employee  ", function(err,results,fields)
	{
		if (err) throw err;
		res.render("fetchdata.html", {row:JSON.stringify(results)});    
	},res);
	connection.end();
})

var server = app.listen(8081, function () 
{
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})