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

module.exports.getFilms = function(req, res) {
	console.log("getfulms")
	_films = [];
	for (film in req.query) {
		_films.push( new mongoose.Types.ObjectId(req.query[film]) );
	}
	Film.find({ _id: { $in: _films } }, function(err, films) {
		// if there is an error retrieving, send the error
		if(err)
			res.send(err);

		res.json(films);
	});

}
