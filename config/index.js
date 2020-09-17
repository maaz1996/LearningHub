const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  JWT_SECRET: "authentication",
  port: 4000,
  userid: process.env.USERID,
  password: process.env.PASSWORD,
  dbname: process.env.DBNAME,
  server: process.env.APP_NAME,
  cluster: process.env.CLUSTER,
};
