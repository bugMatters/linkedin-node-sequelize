// Import Required Modules
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./utilities/db");
const { APP_PORT } = require("./utilities/config");
const { initializeRelations } = require("./database/database-relations");
const { mountRoutes } = require("./routes/routes");

// Instantiate EXPRESS.JS
const app = express();

app.use(express.json());

// Enable CORS middleware
app.use(cors());

// Maintain Database Relationship
initializeRelations();

// Initialize all the routes
mountRoutes(app);

// Sync Sequelize And Start The Server
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(APP_PORT, () => {
      console.log(`Your Server is running on port ${APP_PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed To Fetch Settings", error);
  });
