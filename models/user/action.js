const mongoose = require("mongoose");

const getDataFromMaster = function(collectionName, query, callback) {
  mongoose.connect(
    "mongodb+srv://admin:dbadmin@cluster0-dweca.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const connection = mongoose.connection;
  connection.on("open", function() {
    mongoose.connection.db.collection(collectionName, function(
      err,
      collection
    ) {
      collection.find(query).toArray(callback);
    });
  });
  connection.on("error", console.error.bind(console, "connection error:"));
};
const getDataFromPersonal = function(collectionName, query, callback) {
  mongoose.connect(
    "mongodb+srv://admin:dbadmin@cluster0-dweca.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const connection = mongoose.connection;
  connection.on("open", function() {
    mongoose.connection.db.collection(collectionName, function(
      err,
      collection
    ) {
      collection
        .find(query)
        .project({
          _id: 0,
          fnfStatus: 0,
          pfTransferStatus: 0,
          form16Status: 0,
          uanDetails: 0
        })
        .toArray(callback);
    });
  });
};
const getDataFromPersonalStatus = function(collectionName, query, callback) {
  mongoose.connect(
    "mongodb+srv://admin:dbadmin@cluster0-dweca.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const connection = mongoose.connection;
  connection.on("open", function() {
    mongoose.connection.db.collection(collectionName, function(
      err,
      collection
    ) {
      collection
        .find(query)
        .project({
          _id: 0,
          userId: 1,
          fnfStatus: 1,
          pfTransferStatus: 1,
          form16Status: 1,
          uanDetails: 1
        })
        .toArray(callback);
    });
  });
  connection.on("error", console.error.bind(console, "connection error:"));
};

module.exports = {
  getDataFromMaster,
  getDataFromPersonal,
  getDataFromPersonalStatus
};
