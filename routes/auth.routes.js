const express = require("express");

const routerAuth = express.Router();

const authControllers = require("../controllers/auth.controllers");

routerAuth.post("/signup", authControllers.signup);
routerAuth.post("/signin", authControllers.signin);
routerAuth.get("/:id/history", authControllers.findOneUser);

module.exports = routerAuth;
