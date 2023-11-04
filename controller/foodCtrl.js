const { client } = require("../config/dbConnect");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
// const fs = require('fs').promises;


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


// const getAllData = async (req, res) => {
//     try {
//       const page = req.query.page || 1;  // Get the requested page from query parameter, default to 1
//       const limit = req.query.limit || 3; // Get the limit of results per page, default to 10
  
//       const query = "SELECT * FROM products.food";
  
//       const result = await client.execute(query, [], { prepare: true });
  
//       const rows = result.rows;
//       console.log("Rows:", rows);
  
//       const startIndex = (page - 1) * limit;
//       const endIndex = Math.min(startIndex + limit, rows.length);
  
//       const paginatedResults = rows.slice(startIndex, endIndex);
  
//       res.json(paginatedResults);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
  

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

const deleteARow = async (req, res) => {
  const { id } = req.params;
  try {
    // DELETE FROM products WHERE id = 12345;
    const query = `DELETE FROM products.food WHERE  foodid = ${id}`;
    client.execute(query, []).then((result) => {
      const rows = result.rows;
      console.log("Rows:", rows);
      res.json({ message: "Item deleted successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProductRow = async (req, res) => {
  try {
    const { foodid, added, category, description, images,  name, price } = req.body;
    const filePath = req.file.path;
    // const imageBuffer =  Buffer.from(image, 'base64'); // replace image with imageBuffer in the client.execute() method
    // const imageBuffer = Buffer.from(req.file.buffer, 'base64');

    const query = `
        INSERT INTO products.food (foodid, added, category, description, images, name, price)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

    await client.execute(
      query,
      [uuid, new Date(), category, description, filePath, name, parseInt(price)],
      { prepare: true }
    );

    res.json({ message: "Item created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllData,
  getSingleRow,
  addProductRow,
  deleteARow,
};
