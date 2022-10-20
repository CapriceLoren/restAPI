import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Film = new Schema({
    "title": String,
    "original_title": String,
    "description": String,
    "director": String,
    "release_date": Number,
    "people": [],
    "species": [],
    "locations": [],
    "vehicles": [],
});

export default mongoose.model("films", Film);