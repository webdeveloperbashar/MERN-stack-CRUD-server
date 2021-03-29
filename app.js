const express = require("express"); // import express js
const mongoose = require("mongoose"); // import mongoose
const app = express(); // call express
const cors = require("cors"); // cors origin allow;
const router = require("./routes"); // import local routes
const password = "4HwewYjC5vHVOysc"; // DB password
const username = "e-commerceUser"; // DB username
const dbName = "test-db"; // DB name
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/salaries", router);

const uri = `mongodb+srv://${username}:${password}@cluster0.oss1b.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 2020;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`);
    });
  });