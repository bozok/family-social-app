const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

app.use(express.json());

// db connection
let isMongUp = false;
try {
  mongoose.connect(process.env.MONGODB_CONSTR);
  isMongUp = true;
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("MongoDB connection error: " + error);
}

// engine start
const port = process.env.APP_PORT || 8800;
if (isMongUp) {
  try {
    app.listen(port, () => {
      console.log(`Backed server is up and running on port ${port}`);
    });
  } catch (error) {
    console.log("Express error: " + error);
  }
} else {
  console.log("Cant reach to MongoDB");
}
