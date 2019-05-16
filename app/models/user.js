// app/models/user.js

// grab the mongoose module
var mongoose = require("mongoose");



var Schema   = mongoose.Schema;

var userSchema = new Schema({

	name: String,
  lastName: String,
  username: String,
  password: String,
	email: String,
	nationality: String,
	birthDate: Date,
	_films: [ Schema.Types.ObjectId ]

});

var User = mongoose.model("User", userSchema);

module.exports.model = User;
module.exports.schema = userSchema;

module.exports.getUser = function(req, res) {

  User.find({name: req.body.name}, (user, err) => {
    res.json(user);
  });
}
