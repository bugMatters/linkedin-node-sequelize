const User = require("../models/user.model");
const {
  encodePasswordWithBcrypt,
  decodePasswordWithBcrypt,
} = require("../utilities/bcrypt");
const { createJwtToken } = require("../utilities/jwt");

exports.createUserWithEmail = async (req, res) => {
  let { firstname, lastname, email, password } = req.body;

  try {
    const isAlreadyExist = await User.findOne({ where: { email } });

    if (isAlreadyExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exist!" });
    }

    password = await encodePasswordWithBcrypt(password);

    await User.create({ firstname, lastname, email, password });
    return res.status(201).json({ success: true, message: "User Created." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginWithEmailPassword = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not registered!" });
    }

    if (!(await decodePasswordWithBcrypt(password, user.password))) {
      return res
        .status(400)
        .json({ success: false, message: "Password incorrect!" });
    }

    const token = await createJwtToken(user.id);

    return res.status(200).json({
      success: true,
      message: "You are successfully logged in",
      token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
