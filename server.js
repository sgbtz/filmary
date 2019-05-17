// server.js


// modules ======================================

var express		     = require("express"); // middleware express
var app			   		 = express();
var fs             = require("fs");
var https          = require("https");
var bodyParser 	   = require("body-parser");
var methodOverride = require("method-override");
var morgan		     = require("morgan");
var mongoose       = require("mongoose");

// configuration ================================

// configure env variables

require('dotenv').config();

// connect to db

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

// set our port

var port = process.env.PORT || 8080;


// get all data of the body (POST) parameters
// parse application/json

app.use(bodyParser.json());

// parse application/vnd.api+json as json

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// parse application/x-www-formurlencoded

app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request

app.use(methodOverride("X-HTTP-Method-Override"));

// set the static files location /public/img will be /img for users

app.use("/images", express.static(__dirname + "/public/assets/images"));
app.use("/icons", express.static(__dirname + "/public/assets/icons"));
app.use("/", express.static(__dirname + "/public"));

// use morgan to log requests to the console

app.use(morgan("dev"));

// set secret variable

app.set("superSecret", process.env.SECRET);

// routes =======================================

require("./app/routes")(app); // configure our routes

// start app ====================================
// startup our app at http://localhost:8080

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app)
.listen(port);

// shoutout to the user

console.log("DreamPulse Inc on port " + port);

// expose app

exports = module.exports = app;
