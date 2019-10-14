var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/emp_db", { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
	var empSchema = new mongoose.Schema({
		_id: Number,
		name: String,
		phoneno: Number
	}, {collection : 'emps'});
	
	var Emp = mongoose.model("Emp", empSchema);

	app.get("/emp", (req, res) => {
		Emp.find( function(err, employees) {
			if (err) {
				res.status(400);
				res.send("Unable to find names");
			}
			else {
				console.log("All employees returned");
				res.send(employees);
			}
		});
	});
	
	app.get("/emp/:id", (req, res) => {
		Emp.findById( req.params.id, function(err, emp) {
			if (err) {
				console.log("Unable to find an employee");
				res.status(400);
				res.send("Unable to find an employee");
			}
			else {
				console.log("Employee record returned");
				res.send(emp);
			}
		});
	});
	
	app.delete("/emp/:id", (req, res) => {
		//console.log("req.params.id");
		//console.log(req.params.id);
		Emp.findById( req.params.id, function(err, emp) {
			if (err) {
				res.status(400);
				res.send("Unable to find an employee");
			}
			else {
				emp.remove( function(err) {
					if (err) {
						console.log("Unable to remove emp");
						res.status(400);
						res.send("Unable to remove emp");
					}
					console.log("Employee removed!");
					res.send({"message" : "Employee removed!"});
				});
			}
		});
	});
	
	app.post("/emp", (req, res) => {
		var myData = new Emp(req.body);
		myData.save( function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {	
				console.log("Employee added!");
				res.send({ "message": "Employee record saved successfully"});
			}
		});
	});	
	app.put("/emp", (req, res) => {
		Emp.findById( req.body._id, function(err, emp) {
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send("No employee with given id found!");
			}
			emp.name = req.body.name;
			emp.designation = req.body.designation;
			
			emp.save( function(err) {
				if (err) {
					console.log("Unable to update employee");
					res.status(400);
					res.send("Unable to update employee");
				}
				else {
					console.log("Employee record updated successfully");
					res.send({"message":"Employee record updated successfully"});
				}
			});
		});			
	});	
}
app.listen(8000);

