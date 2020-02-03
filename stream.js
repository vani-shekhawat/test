/*var fs = require("fs");
var data = 'Simply Easy Learning';
 
 var writerStream = fs.createWriteStream('output.txt');
  writerStream.write(data, 'UTF8');
  writerStream.end();
   writerStream.on('finish',function()
   {
    console.log("write completed.");
   });
    writerStream.on('error' , function(err)
    {
    	console.log(err.stack);
    });
    console.log("Program Ended");*/
    // For compress file.
    var fs = require("fs");
    var zlib = require('zlib');
    fs.createReadStream('input.txt')
     .pipe(zlib.createGzip())
     .pipe(fs.createWriteStream('input.txt.gz'));
     console.log("File Compressed.");