const express = require("express");
const morgan = require("morgan"); //for easy login to console

const app = express();
app.use(morgan("dev"));
module.exports = app;
