var express = require('express');   
var bodyParser = require('body-parser');
var formidable = require('formidable');
var path = require('path');     
var fs =require('fs');  
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser({defer: true}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/testuploadfile.html', function (req, res) 
{
   res.sendFile( __dirname + "/" + "testuploadfile.html" );
})
app.route('/upload').post(function (req, res, next) 
{
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files)
	{
		var oldpath = files.fileUploaded.path;
		var newpath = './'+files.fileUploaded.name;
		var is = fs.createReadStream(oldpath);
		var os = fs.createWriteStream(newpath);

		is.pipe(os);
		is.on('end',function() {
			fs.unlinkSync(oldpath);
			res.write('file uploaded and moved!');
	res.end();
		});
    });
});

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})