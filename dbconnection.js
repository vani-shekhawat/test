var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "tiger"
});
con.connect(function(err)
{
	if(err) throw err;
	console.log("Connected!");
	var sql = getAddress();
	
	con.query(sql, function (err,result){
			if(err) throw err;
		console.log(result);
		

	});
});


function createTable() 
{
	var sql = "CREATE TABLE employee1 (name VARCHAR(255), address VARCHAR(255))";
	return sql;
}

function insertData()
{
	var insert= "INSERT INTO employee1(name,address) VALUES ('john', 'Highway 71'),	('peter', 'Lowstreet 4'),('Amy', 'Apple st 652')";
	
	return insert ;
}
function getAddress()
{
	var getad= " select *from employee1 WHERE address = 'noida'";
	return getad;
}