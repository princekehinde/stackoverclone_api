const mongoose = require("mongoose");
const {TEST_DB, LOCAL_DB} = require('./keys');
const dotenv = require("dotenv");
dotenv.config();

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === "prince_stack") {
    mongoUrl = TEST_DB || "mongodb://localhost:27017";
  } else {
    mongoUrl = LOCAL_DB;
   
  }
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;
// const mongoose = require('mongoose');


// let mongoUrl = null;


// const mongoConnection = () => {
//     if (process.env.NODE_ENV === 'stackOverflow') {
//         mongoUrl = TEST_DB || 'mongo://localhost/testing';
//     } else {
//         mongoUrl = DATA_DB;
//     }
//     return mongoose.connect(mongoUrl, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     });
// }

// module.exports = mongoConnection