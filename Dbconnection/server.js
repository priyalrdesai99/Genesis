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
		_id:Number,
		name: String,
		email: String,
		password:String,
		contact_no:Number,
		plan_id:Number
	}, {collection : 'users'});
	
    var plansSchema = new mongoose.Schema({
		_id:Number,
		name: String,
		storage: String,
		time_duration:String,
		price:String
	}, {collection : 'plan'});
	
	var compSchema =  new mongoose.Schema({
		_id:String,
		src: String,
		htmlsrc: String,
		template:String,
		type:String
	}, {collection : 'component'});

	var feedbackSchema = new mongoose.Schema({
		_id:Number,
		user_id:Number,
		feed:String
	},{collection : 'feedback'});

	var pageSchema =  new mongoose.Schema({
		_id:Number,
		user_id:Number,
		name:String,
		content:String
	}, {collection : 'page'});



    var Plan=mongoose.model("plan",plansSchema);
	var user = mongoose.model("user", usersSchema);
	var Comp= mongoose.model("component", compSchema);
    var Page = mongoose.model("page", pageSchema);
	var Feed = mongoose.model("feedback", feedbackSchema);
	
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
	
	app.get("/page", (req, res) => {
		Page.find(function(err,pages) {
			if (err) {
				res.status(400);
				res.send("Unable to find pages");
			}
			else {
				console.log("All pages returned");
				console.log(pages)
				
				res.send(pages);
			}
		});
	});
   
	app.get("/feedback", (req, res) => {
		Feed.find(function(err,f) {
			if (err) {
				res.status(400);
				res.send("Unable to find pages");
			}
			else {
				console.log("All feedbacks returned");
				console.log(f);
				
				res.send(f);
			}
		});
	});



	app.get("/page/:user_id", (req, res) => {
		Page.find({"user_id":req.params.user_id}, function(err,pages) {
			if (err) {
				res.status(400);
				res.send("Unable to find pages");
			}
			else {
				console.log("All pages returned");
				console.log(pages)
				
				res.send(pages);
			}
		});
	});

	app.get("/feedback/:user_id", (req, res) => {
		Feed.find({"user_id":req.params.user_id}, function(err,feeds) {
			if (err) {
				res.status(400);
				res.send("Unable to find");
			}
			else {
				console.log("All pages returned");
				console.log(feeds);
				res.send(feeds);
			}
		});
	});

	app.get("/page/:user_id/:_id", (req, res) => {
		Page.findOne({"user_id":req.params.user_id,"_id":req.params._id}, function(err,pages) {
			if (err) {
				res.status(400);
				res.send("Unable to find pages");
			}
			else {
				console.log("All pages returned");
				console.log(pages)
				
				res.send(pages);
			}
		});
	});
	app.get("/plan", (req, res) => {
		Plan.find( function(err,plans) {
			if (err) {
				res.status(400);
				res.send("Unable to find names");
			}
			else {
				console.log("All plans returned");
				console.log(plans)
				//console.log(plans[0]._id)
				res.send(plans);
			}
		});
	});
	
	app.get("/component", (req, res) => {
		Comp.find( function(err,components) {
			if (err) {
				res.status(400);
				res.send("Unable to find components");
			}
			else {
				console.log("All components returned");
				console.log(components)
				//console.log(plans[0]._id)
				res.send(components);
			}
		});
	});


	
	app.get("/component/:type1", (req, res) => {
		Comp.find({"type":req.params.type1}, function(err,components) {
			if (err) {
				res.status(400);
				res.send("Unable to find components");
			}
			else {
				console.log("All components returned");
				console.log(components)
				//console.log(plans[0]._id)
				res.send(components);
			}
		});
	});

	app.get("/plan/:id",(req,res) => {
		Plan.find({_id:req.params.id},function(err,plan)
		{
			if(err)
			{
				res.status(400);
				res.send("Unable to find plan");
			}
			else {
				console.log("Plan record returned");
				console.log(plan);
				res.send(plan);
			}
		});
	});

	app.get("/user/:email1", (req, res) => {
		user.findOne( {email:req.params.email1}, function(err, users) {
			if (err) {
				
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
	
    app.delete("/page/:id", (req, res) => {
		Page.findById( req.params.id, function(err, page) {
			if (err) {
				res.status(400);
				res.send("Unable to find page");
			}
			else {
				page.remove( function(err) {
					if (err) {
						console.log("Unable to remove page");
						res.status(400);
						res.send("Unable to remove page");
					}
					console.log("Page removed!");
					res.send({"message" : "page removed!"});
				});
			}
		});
	});
   
	app.delete("/feedback/:id", (req, res) => {
		Feed.findById( req.params.id, function(err, f) {
			if (err) {
				res.status(400);
				res.send("Unable to find page");
			}
			else {
				f.remove( function(err) {
					if (err) {
						console.log("Unable to remove feedback");
						res.status(400);
						res.send("Unable to remove feedback");
					}
					console.log("Feedback removed!");
					res.send({"message" : "Feedback removed!"});
				});
			}
		});
	});

	app.post("/user", (req, res) => {
		console.log(req.body)
		var myData = new user(req.body);
		user.insertMany({_id:myData._id,name:myData.name,email:myData.email,password:myData.password,contact_no:myData.contact_no}, function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add users");
			}
			else {	
				console.log("User added!");
				res.send({ "message": "User record saved successfully"});
			}
		});
	});


	app.post("/feedback", (req, res) => {
		console.log(req.body)
		var myData = new Feed(req.body);
		Feed.insertMany({_id:myData._id,user_id:myData.user_id,feed:myData.feed}, function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add feedback");
			}
			else {	
				console.log("Feedback added!");
				res.send({ "message": "Feedback saved successfully"});
			}
		});
	});
	

	app.post("/page", (req, res) => {
		console.log(req.body)
		var myData = new Page(req.body);
		Page.insertMany({_id:myData._id,name:myData.name,user_id:myData.user_id,content:myData.content}, function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add users");
			}
			else {	
				console.log("User added!");
				res.send({ "message": "User record saved successfully"});
			}
		});
	});



	app.post("/component", (req, res) => {
		console.log(req.body)
		var myData = new Comp(req.body);
		Comp.insertMany({_id:myData._id,src:myData.src,htmlsrc:myData.htmlsrc,template:myData.template,type:myData.type}, function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add componentss");
			}
			else {	
				console.log(req.body);
				res.send({ "message": "Component added successfully"});
			}
		});
	});
	
	

	app.post("/loginuser", (req, res) => {
		console.log(req.body.uname);
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

	app.put("/page", (req, res) => {
		Page.findById( req.body._id, function(err, pages) {
			if (err) {
				console.log("No user with given id found!");
				res.status(400);
				res.send("No user with given id found!");
			}
			pages.content=req.body.content;
			pages.name = req.body.name;
			pages.user_id=req.body.user_id;			
			
			pages.save( function(err) {
				if (err) {
					console.log("Unable to update pages");
					res.status(400);
					res.send("Unable to update pages");
				}
				else {
					console.log("Page record updated successfully");
					res.send({"message":"Page record updated successfully"});
				}
			});
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
			users.plan_id=req.body.plan_id;			
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

