const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/index");

db = mongoose.connect("mongodb+srv://root:password@123@dev-i9qmj.mongodb.net/mydb?retryWrites=true&w=majority", { useNewUrlParser: true });

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// User Routes
const userRoute = require("./routes/user/auth/userAuth");
app.use("/user", userRoute);

// Admin Routes
const adminAuthRoutes = require("./routes/admin/auth/adminAuth");
app.use("/admin", adminAuthRoutes);

//odata leavemanagement
const odatamanagement = require("./routes/odata/leaveManagement/getleave");
app.use("/odata", odatamanagement);

// Admin Routes
const adminActionsRoutes = require("./routes/admin/actions/adminAction");
app.use("/admin/action", adminActionsRoutes);

//user personal info routes
const personalRoutes = require("./routes/user/action/user");
app.use("/personal", personalRoutes);

//admin personal route 
const adminpersonalRoutes = require("./routes/admin/actions/adminaction");
app.use("/personal", adminpersonalRoutes);


app.listen(config["port"], () => {
    console.log(`Server listening on port: ${config["port"]}`);
});