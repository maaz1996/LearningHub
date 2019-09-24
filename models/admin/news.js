const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const news = new Schema({
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
    date: {
        type: String
    }

});

const newsSchema = mongoose.model("news", news);
module.exports = newsSchema;