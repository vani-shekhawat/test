var mysql= require ('mysql');

module.exports = function(res, formdata)
{
	var formdata_keys = Object.keys(formdata);
	var sql = "select * from employee where ";
	for(var i=0;i<formdata_keys.length;i++)
	{
		if(formdata[formdata_keys[i]] !== "")
		{
			sql += formdata_keys[i]+" like '%"+formdata[formdata_keys[i]]+"%' and ";
		}
		else
		{
			delete formdata[formdata_keys[i]];
		}
	}

	sql += " 1";

	if(Object.keys(formdata).length == 0)
	{
		formdata = 1;
	}

	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database: 'dbemp'

	});
	connection.connect();

	connection.query(sql, function(err,results,fields)
	{
		if (err) throw err;
		res.sendFile("filter.html", {row:JSON.stringify([results, formdata])});    
	},res);
	connection.end();
}