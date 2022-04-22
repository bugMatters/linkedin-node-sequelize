const jwt = require("jsonwebtoken");

exports.createJwtToken = async (id) => {
  const maxAge = 3 * 24 * 60 * 60;
  return jwt.sign({ id }, "Tanmay Secret Key", { expiresIn: maxAge });
};

exports.decodeToken = () => {
  return jwt.decode(token, "Tanmay Secret Key");
};
