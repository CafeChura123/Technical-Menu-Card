const express = require("express");
const router = express.Router();
const { placeOrder, getOrderList } = require("../controller/placeOrderController");
const authorization = require("../../Admin/verification/authorization");

router.get("/get-order-list", authorization, getOrderList);
router.post("/place-order", placeOrder);

module.exports = router;