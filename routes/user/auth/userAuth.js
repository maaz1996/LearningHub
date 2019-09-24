const router = require("express-promise-router")();
const passport = require("passport");
const { signupValidateBody, signupSchemas,signinValidateBody, signinSchemas } = require("../../../validator/authValidate");
const UserController = require("../../../controller/user/user.auth.controller");
/*
NOTE: 
If we do not include our local passport file in our route file then you'll face belo error 
              [Error: Unknown authentication strategy "jwt"]
*/
require("../../../validator/passport");

// Router Navigations
router
  .route("/signup")
  .post(signupValidateBody(signupSchemas.authSchema), UserController.signup);

router
  .route("/signin")
  .post(
    signinValidateBody(signinSchemas.authSchema),
    passport.authenticate("user-local", { session: false }),
    UserController.signin
  );


module.exports = router;
