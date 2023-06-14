const express = require("express");
const api = express.Router();
const userRouter = require("./user/user.router");
const orderRouter = require("./order/order.router");

api.use("/users", userRouter);
api.use("/orders", orderRouter);
module.exports = api;
