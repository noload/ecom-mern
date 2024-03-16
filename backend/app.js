const express = require("express");

const app = express();

//route imports
const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use("/api/v1", product);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
