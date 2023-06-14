const express = require("express");
const userRouter = express.Router();
const CrudOperations = require("../../services/class.crud.operations");
const userService = require("../../models/user.models");

const userCrudOperations = new CrudOperations(userService);

userRouter.post("/signup", userCrudOperations.httpCreateNewDocument);
userRouter.get("/", userCrudOperations.httpGetAllDocuments);
module.exports = userRouter;
