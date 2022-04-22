const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.encodePasswordWithBcrypt = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

exports.decodePasswordWithBcrypt = async (password, encryptedPassword) => {
  try {
    return await bcrypt.compare(password, encryptedPassword);
  } catch (error) {
    console.log(error);
  }
};
