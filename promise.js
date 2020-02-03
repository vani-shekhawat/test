const readFile = new Promise(function(resolve, reject)
{
	setTimeout(function(){
		resolve('foo');
	}, 300);
});
readFile.then(function(value)
{
	console.log(value);
});
console.log(readFile);