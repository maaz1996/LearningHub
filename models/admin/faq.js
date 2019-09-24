const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const faq = new Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
});

const faqSchema = mongoose.model("FAQs", faq);
module.exports = faqSchema;