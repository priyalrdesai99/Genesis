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
mongoose.connect("mongodb://localhost:27017/users_db", { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
	var usersSchema = new mongoose.Schema({
		
		name: String,
		email: String,
		password:String,
		contact_no:Number
	}, {collection : 'users_db'});
	
	var user = mongoose.model("user", usersSchema);

	app.get("/user", (req, res) => {
		user.find( function(err,users) {
			if (err) {
				res.status(400);
				res.send("Unable to find names");
			}
			else {
				console.log("All users returned");
				console.log(users)
				console.log(users[0]._id)
				res.send(users);
			}
		});
	});
	
	app.get("/user/:id", (req, res) => {
		user.findById( req.params.id, function(err, users) {
			if (err) {
				console.log("Unable to find an users");
				res.status(400);
				res.send("Unable to find an user");
			}
			else {
				console.log("User record returned");
				res.send(users);
			}
		});
	});
	
	app.delete("/user/:id", (req, res) => {
		//console.log("req.params.id");
		//console.log(req.params.id);
		user.findById( req.params.id, function(err, users) {
			if (err) {
				res.status(400);
				res.send("Unable to find user");
			}
			else {
				user.remove( function(err) {
					if (err) {
						console.log("Unable to remove user");
						res.status(400);
						res.send("Unable to remove user");
					}
					console.log("User removed!");
					res.send({"message" : "User removed!"});
				});
			}
		});
	});
	
	app.post("/user", (req, res) => {
		console.log(req.body)
		var myData = new user(req.body);
		myData.save( function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {	
				console.log("User added!");
				res.send({ "message": "User record saved successfully"});
			}
		});
	});
	
	
	app.post("/loginuser", (req, res) => {
		console.log(req.body.uname)
		var name1= req.body.uname;
		var pass=req.body.pswd;
		user.find({name:name1,password:pass}, function(err,users) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {	
				console.log("User searched!");
			
				res.send(users);
			}
		});
	});




	app.put("/user", (req, res) => {
		user.findById( req.body._id, function(err, users) {
			if (err) {
				console.log("No user with given id found!");
				res.status(400);
				res.send("No user with given id found!");
			}
			users.name = req.body.name;
			users.email = req.body.email;
			users.password=req.body.password;
			users.contact_no=req.body.contact_no;
			
			users.save( function(err) {
				if (err) {
					console.log("Unable to update users");
					res.status(400);
					res.send("Unable to update users");
				}
				else {
					console.log("User record updated successfully");
					res.send({"message":"User record updated successfully"});
				}
			});
		});			
	});	
}
app.listen(8000);

