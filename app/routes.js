// app/routes.js

var router = require("express").Router();

module.exports = function(app){

	app.use("/api", router);

  // route to handle all angular requests
	app.all("*", function(req, res, err){
    res.sendFile("/public/index.html", { root: __dirname + "/.."}); // load our public/index.html file
  });
}
