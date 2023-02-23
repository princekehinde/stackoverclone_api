const { decodeToken } = require("../utils/helper/jwt");
const { errorResponse } = require("../utils/helper/response");

async function isUserAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return errorResponse(res, 499, "Token required");
  }

  const user = await decodeToken(authorization);

  if (!user || user.statusCode === 401)
    return errorResponse(res, 401, "Invalid user token");

  req.user = user;
  return next();
}


module.exports = {
  isUserAuthenticated,
};