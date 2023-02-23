const express = require('express');
const validation = require('../utils/validation/user')
const Usercontroller = require('../controller/user')
const Middleware = require("../middleware/authmiddleware");


const Router = express.Router();

Router.post('/Signup', 
    validation.validateSignUp,
    validation.validatePassword,
    Usercontroller.Signup
)

Router.post('/SignIn',
validation.ValidateSignIn,
Usercontroller.login
)

module.exports = Router