const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    title: String,
    author: String,
    dateUploaded: Date,
    category: String,
    type: String,
    content: String, // URL or actual content
    tags: [String],
    difficultyLevel: String
  });
  
  
const Material = mongoose.model('Material', materialSchema);
module.exports = Material;
  