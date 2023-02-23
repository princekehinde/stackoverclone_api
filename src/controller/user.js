const UserManager = require("../utils/service/user");
const {
  successResponse,
  errorResponse,
} = require("../utils/helper/response");
const model = require('../model/index')

class UserController {
  static async Signup(req, res) {
    try {
            const result = await UserManager.register(req.body);
      
            if (result.statusCode === 400)
              return errorResponse(res, result.statusCode, result.message);
      
            return successResponse(
              res,
              result.statusCode,
              result.message,
              result.data
            );
          } catch (error) {
            return errorResponse(res, 500, error.message);
          }
        }

        static async login(req, res) {
          try {
            const result = await UserManager.login(req.body);
      
            if (result.statusCode === 404 || result.statusCode === 400)
              return errorResponse(res, result.statusCode, result.message);
      
            return successResponse(
              res,
              result.statusCode,
              result.message,
              result.data
            );
          } catch (error) {
            return errorResponse(res, 500, error.message, console.log(error));
          }
        }

};


module.exports = UserController