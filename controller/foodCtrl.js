const { Client } = require("cassandra-driver");
// const express = require("express");
// const asyncHandler = require("express-async-handler");

const client = new Client({
  cloud: {
    secureConnectBundle: "secure-connect-restaurant.zip",
  },
  credentials: {
    username: "KSeItikXESsltkZqSqodIYMJ",
    password:
      "pNJ_H4tAfyWQoECdsyc+S7fAoq8vnoDCL.H6ZfHqNy_,i4,v-3yiqO5uH8soY,JuOxpIN88GgUNcvLFTLDZYNsOdAmi,DxEi2mfF+NGIlexLb.BesC6XfpJPDFSFRPny",
  },
});

const getAllData = async (req, res) => {
  try {
    const query = "SELECT * FROM products.food ";
    client.execute(query, []).then((result) => {
      const rows = result.rows;
      console.log("Rows:", rows);
      res.json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleRow = async (req, res) => {
  const { id } = req.params;
  try {
    const query = `SELECT * FROM products.food WHERE foodId = ${id}`;
    client.execute(query, []).then((result) => {
      const rows = result.rows;
      console.log("Rows:", rows);
      res.json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllData, getSingleRow, 
};
