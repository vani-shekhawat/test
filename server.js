/*var express = require('express');
var app = express();
app.get('/', function(req,res)
{
	res.send('Hello world');
})
var server = app.listen(8081, function()
{
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})*/
var express = require('express');
var app = express();
app.get('/', function(req,res)
{
	console.log("Got a Get request for the homepage");
	res.send('Hello GET sdgrjk');
})
app.post('/test', function(req,res)
{
	console.log("Got a POSt request for the home page");
	res.send('Hello POST');
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})
var server = app.listen(8081, function()
{
	var host = server.address().address
	var port = server.address().port
	console.log(server.address());
	console.log("Example app listening at http://%s:%s", host, port)
})