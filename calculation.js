var express = require('express');
var app = express();
var events = require('events');
var eventEmitter = new events.EventEmitter();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var sum = function sum()
{
    var s = parseFloat(first_number)+ parseFloat(second_number);
    console.log(s);
    resp.send(JSON.stringify(s  ));
}
eventEmitter.addListener('Addition' , sum );


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/add.html', function (req, res) {
   res.sendFile( __dirname + "/" + "add.html" );
})
app.post('/cal', urlencodedParser, function(req,res)
{
	first_number= req.body.firstnumber;
	second_number= req.body.secondnumber;
	resp = res;
	eventEmitter.emit('addition');
	// result= parseFloat(first_number)+parseFloat(second_number);


// res.send(JSON.stringify(result));

})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
     console.log("Example app listening at http://%s:%s", host, port)
 })


