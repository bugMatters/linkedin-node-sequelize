const { JsonWebTokenError } = require("jsonwebtoken");
const { TokenExpiredError } = require("jsonwebtoken");
const { decodeToken } = require("../utilities/jwt");

exports.authValidator = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")?.[1];

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Headers!" });
  }
  try {
    const payload = decodeToken(token);

    req.user = payload;
    console.log(user);
    next();
  } catch (error) {
    if (
      error instanceof TokenExpiredError ||
      error instanceof JsonWebTokenError
    ) {
      return res
        .status(401)
        .json({ success: false, path: req.path, message: error.message });
    }
    return res
      .status(500)
      .json({ success: false, path: req.path, message: err.message });
  }
};
