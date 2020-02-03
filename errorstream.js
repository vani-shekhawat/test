var writer = getWritableStreamSomehow();
for(let i= 0; i<100;i++)
{
	writer.write('hello, #${i}!\n');
}
witer.on('finish', ()=>{
	console.log('all writes are now complete.');
});
writer.end('This is the end\n');