var myFirstPromise = new Promise((resolve, reject) =>
{
setTimeout(function()
{
	resolve("success!")
}, 250)	
}) 
myFirstPromise.then((successMessage)=>{
	console.log("Yay!" +successMessage)
});