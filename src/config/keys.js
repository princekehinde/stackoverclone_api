require('dotenv').config();

module.exports = {
  LOCAL_DB: process.env.LOCAL_DB,
  PRODUCTON_DB: process.env.PRODUCTION_DB,
  TEST_DB: process.env.TEST_DB,
  JWTSecret: process.env.JWT_SECRET
};