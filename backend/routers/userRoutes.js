const express = require("express");

const router = express.Router();

const{login, register, saveDaytrip} = require("../controllers/userController");
router.post("/login", login);
router.post("/register", register);
router.put("/save", saveDaytrip)

module.exports = router;