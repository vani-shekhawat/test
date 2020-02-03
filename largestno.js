var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/largest.html', function (req, res) {
   res.sendFile( __dirname + "/" + "largest.html" );
})
app.post('/large', urlencodedParser, function(req,res)
{
	fn= req.body.firstnumber;
	sn= req.body.secondnumber;
	tn= req.body.thirdnumber;
	var array = [parseFloat(fn),parseFloat(sn),parseFloat(tn)];
	var large1= 0;
	for(i=0;i<=large1;i++)
	{
		if(array[i]>large1)
		{
			var large1 = array[i];
		}
	} 

res.send(JSON.stringify(large1));

})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
     console.log("Example app listening at http://%s:%s", host, port)
 })