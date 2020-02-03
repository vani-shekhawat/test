/*function sayHello(name)
{
	console.log('hello ' + name);
}
sayHello('vani');*/
// console.log(module);
/*const path = require('path');
var pathObj= path.parse(__filename);
console.log(pathObj);*/

 /* const os= require('os');
  var toatalMemory = os.totalmem();
  var freeMemory = os.freemem();
  var hostName = os.hostname();
  console.log('Total memory:' +toatalMemory);
  console.log('free memory:' +freeMemory);
  console.log('host name:'+hostName);*/
  const fs= require("fs");
  var data = fs.readFileSync('input.txt');
  console.log(data.toString());
  console.log("program Ended");

