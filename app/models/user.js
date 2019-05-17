// app/models/user.js

// for generating pass
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

// grab the mongoose module
var mongoose = require("mongoose");



var Schema   = mongoose.Schema;

var userSchema = new Schema({

	name: String,
  lastName: String,
  username: String,
  password: String,
	salt: String,
	email: String,
	nationality: String,
	birthDate: Date,
	_films: [ Schema.Types.ObjectId ]

});
// define pre function for save (hash passwords)
userSchema.pre("save", function(next) {
	var user = this;

	if(!user.isModified("password")) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) return next(err);
		user.salt = salt;
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);
			user.password = hash;
			next();
		});
	});

});

var User = mongoose.model("User", userSchema);



module.exports.model = User;
module.exports.schema = userSchema;



module.exports.newUser = function(req, res){
	// creating new user
	let user = new User(req.body);

	user.save(user, function(err, user){
		// if there is an error retrieving, send the error
		if(err)
			res.send(err);
		else
			res.json({ login: user.username });
	});
};

module.exports.getUser = function(req, res) {

  User.findOne({_id: req.params._id}, (err, user) => {
		if (err) console.log(err)
		else
    	res.json(user);
  });
}
