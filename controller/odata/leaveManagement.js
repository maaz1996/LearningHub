const JWT = require("jsonwebtoken");
const User = require("../../models/user/auth");


module.exports = {
  // SIGN UP
  getLeave: async (req, res, next) => {
    console.log("chal rha hai");
    res.status(200).json({Status: "chal rha hai" });
  },
  postLeave: async (req, res, next) => {
    res.status(200).json({Status: "chal rha hai" });
  }
};
