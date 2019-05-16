// app/routes.js

// grab models
var user = require("./models/user");

// grab controllers
var auth = require("./controllers/auth");

var router = require("express").Router();

module.exports = function(app){

		// add new user
		router.post("/signup-user", user.newUser);
		// login user
		router.post("/login-user", auth.getTokenUser);

		// routes which need previous token check
		router.use(function (req, res, next) {
			auth.checkToken(req, res, app, next);
		});
		// get a user information
		router.get("/user/:_id", user.getUser);

	app.use("/api", router);

  // route to handle all angular requests
	app.all("*", function(req, res, err){
    res.sendFile("/public/index.html", { root: __dirname + "/.."}); // load our public/index.html file
  });
}
