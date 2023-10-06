const express1 = require("express");

const router = express1.Router();

const userController = require("../controller/user");

router.post("/user", userController.createUser);

module.exports = router;
