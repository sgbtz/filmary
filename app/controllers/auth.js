// app/controllers/auth.js
// grab de needed modules
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// for generating pass
var SALT_WORK_FACTOR = 10;

// grab models
var User = require("../models/user").model;

module.exports = {
	// Route to authenticate a user
	getTokenUser: function(req, res) {

		User.findOne({ email: req.body.login }, function(err, user) {
			// if there is an error retrieving, send the error
			if(!user) {
				User.findOne({ username: req.body.login }, function(err, user) {
					auth(res, user, req.body.password);
				});
			} else
				auth(res, user, req.body.password);
		});

	},
	// Route middleware to verify a token
	checkToken: function(req, res, next) {
		// Chceck header or url parameters or post parametrers for token
		var token = req.body.token || req.query.token || req.headers.authentication || req.headers["x-access-token"];

		if(token) {
			// Verifies secret and checks exp
			jwt.verify(token, process.env.SECRET, { subject: req.query._id }, function(err, decoded) {

				if(err)
					return res.json({ success: false, message: "Failed to authenticate token." });
				else {
					// If everything is good, save to request for use in other routes
					req.decoded = decoded;
					next();
				}
			});

		} else {
			// If there is no token return an error
			return res.status(403).send({
				succes: false,
				message: "No token provided."
			});
		}
	},
};
// authentication callback
function auth (res, member, password) {
	if(!member){
		res.json({ success: false });
	} else if(member) {
		// Check if password matches
		bcrypt.hash(password, member.salt, function(err, hash) {

			if(err) console.log(err);
			if(member.password != hash) {
				res.json({ success: false });
			} else {
				// If all right, create a token with only our given payload
				const payload = {
					sub: member._id,
					name: member.username
				};

				var token = jwt.sign(payload, process.env.SECRET, {
					expiresIn: "1h" // expires in 1 min
				});

				res.json({
					success: true,
					_id: member._id,
					username: member.username,
					token: token
				});
			}
		});
	}
}
