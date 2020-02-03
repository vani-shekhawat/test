/*buf = new Buffer.alloc(256);
len = buf.write("simply Easy Learning");
console.log("octets written : "+ len);



buf1=new Buffer.alloc(26);
    for(var i=0 ; i< 26; i++)
   {
     buf1[i]= i+97;
   } 
   console.log(buf1.toJSON('ascii'));
   console.log(buf1.toString('ascii' ,0,5));


   var buffer1 = new Buffer('tutorialpoint ');
   var buffer2 = new Buffer('simple easy learning');
   var buffer3 = Buffer.concat([buffer1,buffer2]);
   console.log("buffer3 content: " + buffer3.toString());*/
   var buffer1 = new Buffer.from('ABC');
   var buffer2 = new Buffer.from('jkl');
   buffer2.copy(buffer1);
   console.log("buffer1 content: " + buffer1.toString());

   var buffer4 = new Buffer.from('TutorialsPoint');
   var buffer5 = buffer4.slice(0,9);
   console.log("buffer5 content: " +buffer5.toString());



    var buffer = new Buffer.from('TutorialsPoint');
    console.log("buffer length: " +buffer.length);