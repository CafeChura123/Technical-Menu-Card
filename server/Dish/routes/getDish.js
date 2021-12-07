const express = require("express");
const router = express.Router();
const {getDishes} = require("../controller/dishGetController");

router.get("/get-dishes", getDishes);

module.exports = router;