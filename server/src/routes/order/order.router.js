const express = require("express");
const orderRouter = express.Router();
const CrudOperations = require("../../services/class.crud.operations");
const orderService = require("../../models/order.models");

const orderCrudOperations = new CrudOperations(orderService);

orderRouter.post("/neworder", orderCrudOperations.httpCreateNewDocument);
orderRouter.get("/", orderCrudOperations.httpGetAllDocuments);

module.exports = orderRouter;
