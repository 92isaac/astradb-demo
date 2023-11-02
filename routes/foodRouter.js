// const { Client } = require("cassandra-driver");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public/images' }); // Specify a directory to save uploaded files
const { getAllData, getSingleRow, addProductRow, deleteARow } = require("../controller/foodCtrl") 


router.get("/all", getAllData)
router.get("/:id", getSingleRow)
router.delete("/delete/:id", deleteARow)
router.post("/", upload.single('image'), addProductRow)

module.exports = router;
