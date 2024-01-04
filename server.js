const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Raju");
});

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});
