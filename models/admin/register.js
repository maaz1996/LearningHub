const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const companySchema = new Schema({
  companyname: {
    type: String,
    required: true
  },
  companyid: {
    type: String,
    required: true
  },
  companyurl: {
    type: mongoose.SchemaTypes.Url,
    required: true
  },
  cloudprovider: {
    type: String,
    required: true
  },
  idp: {
    type: mongoose.SchemaTypes.Url,
    required: true
  },
  tokenurl: {
    type: mongoose.SchemaTypes.Url,
    required: true
  },
  clientid: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  privatekey: {
    type: String,
    required: true
  }
  
});

const CompanyActions = mongoose.model("company", companySchema);
module.exports = CompanyActions;
