const express = require("express");
//Require express and router
const router = express.Router();
const { email, phone, birthday, password } = require("@jdols-fs/validator");

const { signup } = require("../controllers/signup");
//POST
router.post("/signup", email, phone, birthday, password, signup);

module.exports = router;
