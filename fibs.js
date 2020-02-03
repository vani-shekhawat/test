var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', function (req, res) {
  //res.sendFile( __dirname + "/" + "fibo.html" );
})
app.post('/fibs', urlencodedParser, function(req,res)
{
	fn= parseFloat(req.body.firstnumber);
	
	var i;
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= fn; i++) {
  
  fib[i] = fib[i - 2] + fib[i - 1];
  
}


res.send(JSON.stringify(fib[i] ));

})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
     console.log("Example app listening at http://%s:%s", host, port)
 })