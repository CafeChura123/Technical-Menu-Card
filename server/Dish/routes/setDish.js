const express = require("express");
const router = express.Router();
const authorization = require("../../Admin/verification/authorization");
const {addDish} = require("../controller/dishSetController");

router.post("/add-dish", authorization, addDish);

module.exports = router;