const express = require("express");
const app = express();
require("./db/connection");
const Product = require("./models/Product");
const router = require("./routes/router");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Product CRUD");
})


   
app.listen(PORT, () => {
console.log(`server is runing on port ${PORT}`);

})