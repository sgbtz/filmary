// app/routes.js

// grab models
var user = require("./models/user");
var film = require("./models/film");

// grab controllers
var auth = require("./controllers/auth");

var router = require("express").Router();

module.exports = function(app){

		// add new user
		router.post("/signup-user", user.newUser);
		// login user
		router.post("/login-user", auth.getTokenUser);

		// routes which need previous token check
		router.use(auth.checkToken);
		// get a user information
		router.get("/user/:_id", user.getUser);
		router.get("/films", film.getFilms);
		router.get("/catalogue", film.getCatalogue);
		router.post("/add-film/:username", film.addFilm, film.newFilm, user.addFilmToLibrary)
		router.put("/remove-film/:username/:film_id", user.checkFilmId, user.removeFilmFromLibrary);

	app.use("/api", router);

  // route to handle all angular requests
	app.all("*", function(req, res, err){
    res.sendFile("/public/index.html", { root: __dirname + "/.."}); // load our public/index.html file
  });
}
