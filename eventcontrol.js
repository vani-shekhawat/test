var express = require('express');
var app = express();
var events = require ('events')
var eventEmitter = new events.EventEmitter();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', function (req, res) {
  //res.sendFile( __dirname + "/" + "fibo.html" );
  var connectHandler = function connected(){
  	console.log('connection successful');
  	eventEmitter.emit('data_received');
  }
  eventEmitter.on('connection', connectHandler);
  eventEmitter.on('data_received', function()
  {
  	console.log('data received successfully.');
  });
  eventEmitter.emit('connection');
  console.log("program Ended.");
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
     console.log("Example app listening at http://%s:%s", host, port)
 })