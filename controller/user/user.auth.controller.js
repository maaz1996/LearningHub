const JWT = require("jsonwebtoken");
const User = require("../../models/user/auth");
const userServices = require("../../services/user.services.auth");
require('../../validator/passport');
const { JWT_SECRET } = require("../../config");
signToken = user => {
  return JWT.sign(
    {
      iss: "Cool",
      sub: user._id,
      iat: new Date().getTime(),
      exp: new Date().setTime(new Date().getTime() + 1200000)
    },
    JWT_SECRET
  );
};
module.exports = {
  // SIGN UP
  signup: async (req, res, next) => {
    const { email, password, companyname, userid } = req.value.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(200).send({ error: "email is already in use" });
    }
    const response = await userServices.username(userid);
    if (response && response.length == 0) {
      res.status(200).send({
        status: 400,
        message: {
          "result": "User doesn't exist"
        }
      });
    }
    else {
    const newUser = new User({ email, password, companyname, userid });
    await newUser.save();
    const token = signToken(newUser);
      res.status(200).send({
        status: 200,
        message: {
          "token": token,
          "firstName": response[0].first_name_personal_information,
          "lastName": response[0].last_name_personal_information,
          "result": "IMPLEMENTED "
        }
      });
    }
  },

  // SIGN IN
  signin: async (req, res, next) => {
    if (req.user.message == "Incorrect username") {
      res.status(200).json({ Status: "User doesn't Exist" });

    }
    else if (req.user.message == "Incorrect password") {
      res.status(200).json({ Status: "Incorrect Password" });

    }
    else {
      const response = await userServices.username(req.user.userid);
      res.status(200).send({
        status: 200,
        message: {
          "Status": "Login Successful",
          "data": response[0],
          "result": "IMPLEMENTED "
        }
      });

    }
    //console.log('req.user:',req.user);
    if (req.user.message == "Incorrect username"){
      res.status(200).json({Status : "User doesn't Exist"});
    
    }
    else if (req.user.message == "Incorrect password"){
      res.status(200).json({Status : "Incorrect Password"});
    
    }
else{
    res.status(200).json({  Status: "Login Successful" });
}
  }
};
