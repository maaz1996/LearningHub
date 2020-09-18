const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const masterdata = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  userid: {
    type: String,
  },
  dob: {
    type: Date,
  },
  companyname: {
    type: String,
  },
});

const masterSchema = mongoose.model("masterdata", masterdata);
module.exports = masterSchema;
