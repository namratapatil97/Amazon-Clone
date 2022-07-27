require("dotenv").config();
const express = require("express");
const app = express();
const port = 8005;
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./db/conn");

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);



app.listen(port,() => {
    console.log(`server is running on port number ${port}`);
});

DefaultData();
