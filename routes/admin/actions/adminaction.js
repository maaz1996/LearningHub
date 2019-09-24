const router = require("express-promise-router")();
const passport = require("passport");
const AdminController = require("../../../controller/admin/actions.admin.controller");
require("../../../validator/admin.passport");
// adminRouter Navigations

router
    .route("/admin/:userid")
    .get((req, res, next) =>
        AdminController.user(req, res, next))
    .post((req, res, next) =>
        AdminController.user(req, res, next));

router.route("/add/company").post(AdminController.add);
router
    .route("/add/news")
    .post((req, res, next) => AdminController.addNews(req, res, next))
    .get((req, res, next) => AdminController.viewNews(req, res, next))
router
    .route("/add/event")
    .post((req, res, next) => AdminController.addEvents(req, res, next))
    .get((req, res, next) => AdminController.viewEvents(req, res, next))
router
    .route("/add/faq")
    .post((req, res, next) => AdminController.addFaq(req, res, next))
    .get((req, res, next) => AdminController.viewFaq(req, res, next))
router
    .route("/delete/faq")
    .delete((req, res, next) => AdminController.deleteFaq(req, res, next))


module.exports = router;