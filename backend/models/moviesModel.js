const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    img: {type: String, required: true, trim: true},
    year: {type: Number, required: true, trim: true},
    genre: {type: [String], required: true, trim: true},
    rating: {type: Number, required: true, trim: true}
});

const MovieModel = mongoose.model("movie", movieSchema);
module.exports = { MovieModel };