const mongoose = require("mongoose");
const {LOCAL_DB, TEST_DB} = require('./keys');
const dotenv = require("dotenv");
dotenv.config();

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === "development") {
    mongoUrl = TEST_DB || "mongodb://localhost:27017"
    mongoUrl = LOCAL_DB || "mongodb://localhost:27017/stack";
  } else {
    mongoUrl = LOCAL_DB;
   
  }
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;