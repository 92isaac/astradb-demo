
const express = require('express');
const dbConnect = require("./config/dbConnect")
const { notFound, errorhandler } = require("./middlewares/errorHandler")
// const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT
const foodRoute = require("./routes/foodRouter")
const morgan = require("morgan");

dbConnect()
app.use(morgan('dev'))
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/food", foodRoute);


app.use(notFound)
app.use(errorhandler)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });