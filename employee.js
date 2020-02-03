var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'dbemp'
   
});

// connection.connect(function(err) {
//     if (err) throw err;
//         console.log("connected!");
//         var sql = getData();

//       connection.query(sql, function (err,result){
//       if (error) throw error;
//       res.send(result);
       
//     });
// });

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
   
   
  app.get('/data.html', function (req, res) 
  {
   res.sendFile( __dirname + "/" + "data.html" );
   })
  app.post('/emp', urlencodedParser, function(req,res)
   {
  var FirstName = req.body.firstname;
  var LastName = req.body.lastname;
  var EmployeeID = req.body.Employee;
  var jobDesignation = req.body.jobdesignation;
  var  salary = req.body.salary;
  var  mobileNo = req.body.mobile;
  var city = req.body.ci;
  var address =req.body.add;
 var data= 
  {
	FirstName, LastName, EmployeeID, jobDesignation, salary, mobileNo, city, address
  };
  connection.query('INSERT INTO employee SET ?', data, function (error, results, fields) {
       
       if (error) throw error;
      res.send('All data inserted successfully');
  });
    });

   var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
   })