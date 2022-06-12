const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes/v1");
const ApiError = require("./utils/ApiError");
const app = express();
// const { jwtStrategy } = require("./config/passport");


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// enable cors
app.use(cors());
app.options("*", cors());


// send back a 404 error for any unknown api request

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

module.exports = app;