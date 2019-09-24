const adminrouter = require("express-promise-router")();
const passport = require("passport");
const { adminsignupValidateBody, adminsignupSchemas,adminsigninValidateBody,adminsigninSchemas } = require("../../../validator/authValidate");
const AdminController = require("../../../controller/admin/admin.auth.controller");
require("../../../validator/admin.passport");
// adminRouter Navigations
adminrouter
  .route("/signup")
  .post(adminsignupValidateBody(adminsignupSchemas.authSchema), AdminController.signup);

adminrouter
  .route("/signin")
  .post(
    adminsigninValidateBody(adminsigninSchemas.authSchema),
    passport.authenticate("admin-local", { session: false }),
    AdminController.signin
  );

adminrouter
  .route("/secret")
  .get(
    passport.authenticate("jwt", { session: false }),
    AdminController.secret
  );

module.exports = adminrouter;
