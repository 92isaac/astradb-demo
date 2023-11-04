// const { Client } = require("cassandra-driver");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const { getAllData, getSingleRow, addProductRow, deleteARow } = require("../controller/foodCtrl") 
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const { getDocumentData } = require("../controller/blogCtrl");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads' 
  }
});

const upload = multer({ storage: storage });


router.get("/blogs", getDocumentData)
router.get("/all", getAllData)
router.get("/:id", getSingleRow)
router.delete("/delete/:id", deleteARow)
router.post("/", upload.single('image'), addProductRow)

module.exports = router;
