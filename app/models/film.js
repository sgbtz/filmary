// app/models/film.js

// grab models
var user = require("./user");

// grab the mongoose module
var mongoose = require("mongoose");

var Schema   = mongoose.Schema;

var filmSchema = new Schema({

	 poster_path: String,
	 adult: Boolean,
	 overview: String,
	 release_date: String,
	 genre_ids: [ Number ],
	 id: Number, // id from tmdb
	 original_title: String,
	 original_language: String,
	 title: String,
	 popularity: Number,
	 vote_count: Number,
	 vote_average: Number

});

var Film = mongoose.model("Film", filmSchema);

module.exports.model = Film;
module.exports.schema = filmSchema;

module.exports.getCatalogue = function(req, res) {

	Film.find({}, function(err, films) {
		// if there is an error retrieving, send the error
		if(err)
			res.send(err);

		res.json(films);
	});

}

module.exports.getFilms = function(req, res) {

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

module.exports.getFilm = function(req, res) {

	Film.findOne({ _id: req.params_id }, function(err, film) {
		// if there is an error retrieving, send the error
		if(err)
			res.send(err);

		res.json(film);
	});

}

module.exports.newFilm = function(req, res, next) {

	var film = new Film(req.body);

	film.save(film, function(err, result) {
		// if there is an error retrieving, send the error
		if(err)
			res.send(err);

		req.body._id = film._id
		next();
	});

}

module.exports.addFilm = function(req, res, next) {

	Film.findOne({ id: req.body.id }, function(err, film) {
		if (film) {
			console.log(film)
			req.body._id = film._id;
			user.addFilmToLibrary(req, res);
		}
		else {
			next();
		}
	});
}
