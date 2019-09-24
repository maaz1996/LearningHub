const router = require("express-promise-router")();
const PersonalController = require("../../../controller/user/user.action.controller")();
const NewsController = require("../../../controller/admin/actions.admin.controller");

// Router Navigations
router
    .route("/user/:userid")
    .get((req, res, next) =>
        PersonalController.user(req, res, next))
    .post((req, res, next) =>
        PersonalController.user(req, res, next));

router
    .route('/user/document/:userid')
    .get((req, res, next) =>
        PersonalController.userDocument(req, res, next));

router
    .route('/user/status/:userid')
    .get((req, res, next) =>
        PersonalController.userStatus(req, res, next));
router
    .route("/add/news")
    .get((req, res, next) => (NewsController.viewNews((req, res, next))))

module.exports = router;