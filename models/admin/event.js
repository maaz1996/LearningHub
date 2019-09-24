const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const event = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    tags: {
        type: Array
    },
    timestamp: {
        type: String
    }
});

const eventSchema = mongoose.model("events", event);
module.exports = eventSchema;