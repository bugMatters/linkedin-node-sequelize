const { validationResult } = require("express-validator");

exports.checkValidation = async (req, res, next) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
