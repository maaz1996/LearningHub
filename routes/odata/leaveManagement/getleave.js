const router = require("express-promise-router")();
const passport = require("passport");
const { validateBody, schemas } = require("../../../validator/authValidate");
const odataController = require("../../../controller/odata/leaveManagement");
/*
NOTE: 
If we do not include our local passport file in our route file then you'll face belo error 
              [Error: Unknown authentication strategy "jwt"]
*/require("../../../validator/passport");

// Router Navigations
router
  .route("/getleave")
  .post(odataController.getLeave);

router
  .route("/postleave")
  .post(odataController.postLeave);


module.exports = router;
