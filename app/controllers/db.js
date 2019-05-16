// app/controllers/db.js

// grab the mongoose module
var mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
