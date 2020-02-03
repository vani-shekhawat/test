const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
  	headless:false
  });
  const page = await browser.newPage();
  //var javatpoint = '.homecontent';
  await page.goto('https://www.javatpoint.com/', {timeout:0});
  await page.screenshot({path: 'javatpoint.png'});
  await page.waitForSelector(".firsthomecontent a");
  var urlList = await page.evaluate(()=>
  {
	var ar=document.querySelectorAll(".firsthomecontent");
	var y=[];
	for(i=0;i<ar.length; i++)
	{
		x=ar[i].children;
		
		for(n=0;n<x.length;n++)
		{
			y.push(x[n].href);
			//text= x[n].querySelector("p").innerText;
              // if(text == "PDFBox")
               //{
               //	y.push(x[n].href);
               	

             //}


		}
	}
	return y;
  })
  //await page.close();
  console.log(urlList);
  //await page.goto('https://www.javatpoint.com/angular-7-tutorial');
  
  //await browser.close();
})();