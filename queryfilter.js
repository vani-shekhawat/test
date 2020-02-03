var express = require('express');
var app = express();
var cons= require('path');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', cons.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);
app.get('/filterquery', function (req, res) {
   formdata = req.query;
	getData(res, formdata)
})

app.post('/filterquery', urlencodedParser, function (req, res)
{
	formdata = req.body;
	getData(res, formdata)
})


var server = app.listen(8081, function () 
{
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})

function getData(res, formdata)
{
	var formdata_keys = Object.keys(formdata);
	var sql = "select * from employee where ";
	for(var i=0;i<formdata_keys.length;i++)
	{
		if(formdata[formdata_keys[i]] !== "")
		{
			sql += formdata_keys[i]+" like '%"+formdata[formdata_keys[i]]+"%' and ";
		}
		else
		{
			delete formdata[formdata_keys[i]];
		}
	}

	sql += " 1";

	if(Object.keys(formdata).length == 0)
	{
		formdata = 1;
	}

	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database: 'dbemp'

	});
	connection.connect();

	connection.query(sql, function(err,results,fields)
	{
		if (err) throw err;
		res.render("filterquery.html", {row:JSON.stringify([results, formdata])});    
	},res);
	connection.end();
}