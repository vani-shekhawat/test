 const puppeteer = require('puppeteer');
 var sign= require('./signin.js');
 (async () => {
  const browser = await puppeteer.launch({
    headless:false
  });

  const page = await browser.newPage();
  var url= 'http://reseller.adobe.com/';
  var email_field= '#EmailPage-EmailField';
  var email_submit= '.spectrum-Button-label';
  var password_field = '#PasswordPage-PasswordField';
  var password_submit= '.spectrum-Button-label'; 
  var email = 'licensing@aisplglobal.com';
  var password = 'License$135';
  await sign(page,url,email_field,email_submit,password_field,password_submit,email,password)
})();
