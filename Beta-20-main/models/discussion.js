const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        default: "Unknown",
    },
    msg: {
        type: String,
        maxLength: 500,
    },
    created_at: {
        type: Date,
    },
});

const Discussion = mongoose.model("Discussion", discussionSchema);
module.exports = Discussion;
