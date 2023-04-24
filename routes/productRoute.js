const express = require("express");
const productController = require("../controllers/productController");
// const authController = require("./../controller/authController");

const router = express.Router();
router.route("/").post(productController.createProduct);
// router.route("/:id").delete(productController.deleteProduct);
module.exports = router;
