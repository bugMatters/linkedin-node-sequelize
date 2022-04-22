const authRoutes = require("./auth.routes");

exports.mountRoutes = (app) => {
  app.use(authRoutes);
};
