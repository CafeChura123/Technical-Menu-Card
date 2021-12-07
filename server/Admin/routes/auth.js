const express = require("express");
const router = express.Router();
const authorization = require("../verification/authorization");
const {signin} = require("../controller/authController");

router.get("/", authorization, (req, res) => {
    res.status(200).json({err:false, message:"welcome Admin"});
});

router.post("/signin", signin);

module.exports = router;