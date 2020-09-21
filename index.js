const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/index");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

db = mongoose.connect(
  `mongodb+srv://${config["userid"]}:${config["password"]}@${config["cluster"]}/${config["dbname"]}?retryWrites=true&w=majority`,
  options,
  function (error) {
    if (error) {
      console.log(error);
      mongoose.connect(
        `mongodb://localhost:27017/${config["dbname"]}`,
        options,
        function (error) {
          if (error) console.log(error);
          else console.log("connected to local mongodb");
        }
      );
    } else console.log("connected to atlas mongo");
  }
);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//CORS Headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    result: "Hello World, People",
  });
});

// User Routes
const userRoute = require("./routes/user/auth/userAuth");
app.use("/user", userRoute);

// Admin Routes
const adminAuthRoutes = require("./routes/admin/auth/adminAuth");
app.use("/admin", adminAuthRoutes);

// Admin Routes
const adminActionsRoutes = require("./routes/admin/actions/adminAction");
app.use("/admin/action", adminActionsRoutes);

//user action routes
const userActionRoutes = require("./routes/user/action/user");
app.use("/user/action", userActionRoutes);

app.listen(config["port"], () => {
  console.log(
    `Mode: ${config["server"]}, Server listening on port: ${config["port"]}`
  );
});
