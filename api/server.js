const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
//db
connectDB();
//middleware
app.use(express.json());

// cors middleware
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
