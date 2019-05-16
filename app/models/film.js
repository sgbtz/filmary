// app/models/film.js

// grab the mongoose module
var mongoose = require("mongoose");

var Schema   = mongoose.Schema;

var filmSchema = new Schema({

	name: String

});

var Film = mongoose.model("Film", filmSchema);

module.exports.model = Film;
module.exports.schema = filmSchema;
