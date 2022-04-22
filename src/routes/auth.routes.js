const { Router } = require("express");
const { body } = require("express-validator");
const {
  createUserWithEmail,
  loginWithEmailPassword,
} = require("../controllers/auth.controller");
const { checkValidation } = require("../middlewares/schemaValidator");
const routes = Router();

routes.post(
  "/signup",
  body("firstname").isString(),
  body("lastname").isString(),
  body("email").isString(),
  body("password").isString(),
  checkValidation,
  createUserWithEmail
);

routes.post(
  "/login",
  body("email").isString(),
  body("password").isString(),
  checkValidation,
  loginWithEmailPassword
);

module.exports = routes;
