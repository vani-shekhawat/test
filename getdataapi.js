var express= require('express');
var jwt= require('jsonwebtoken');
var app = express();
var fs = require('fs');
// var cons= require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'dbemp'
   
});
app.use(function(req,res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
})

app.get('/data', isAuthorized,(req,res)=>
{
 function createTable()
   {
    var sql = "CREATE TABLE employee (EmployeeID VARCHAR(20), FirstName VARCHAR(255), LastName VARCHAR(255), jobDesignation VARCHAR(255), salary VARCHAR(255), mobileNo VARCHAR(255))";
  return sql;
   }
   function getData()
   {
    var fetch= "SELECT * FROM EMPLOYEE";
    return fetch;
   }
   
   
 
   res.sendFile( __dirname + "/" + "data.html" );
  
  //  app.post('/emp', urlencodedParser, function(req,res)
  //  {
  //     var FirstName = req.body.firstname;
  //     var LastName = req.body.lastname;
  //     var EmployeeID = req.body.Employee;
  //     var jobDesignation = req.body.jobdesignation;
  //     var  salary = req.body.salary;
  //     var  mobileNo = req.body.mobile;
  //     var city = req.body.ci;
  //     var address =req.body.add;
  //     var data= 
  //      {
  //       FirstName, LastName, EmployeeID, jobDesignation, salary, mobileNo, city, address
  //       };
  //      connection.query('INSERT INTO employee SET ?', data, function (error, results, fields) {
       
  //       if (error) throw error;
  //       res.send('All data inserted successfully');
  //  });
  
  // });

})


app.get('/jwt',(req,res)=>
{
  var privateKey = fs.readFileSync('./private.key', 'utf8');
  var token = jwt.sign({"body": "stuff"},privateKey,{algorithm:'HS256'});
  res.send(token);
})

function isAuthorized(req,res,next)
{
  if(typeof req.headers.authorization 
    !== "undefined")
  {
    var token= req.headers.authorization.split(" ")[1];
    var privateKey = fs.readFileSync('./private.key', 'utf8');

    jwt.verify(token, privateKey,{algoritm: "HS256"},(err, decoded)=>{
      if(err){
        res.status(500).json({error: "Not Authorized"})
      }
      console.log(decoded);
      return next();
    })
  }
  else
  {
    res.status(500).json({error: "Not Authorized"})
  }
}
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})