const express = require("express");
require("dotenv").config();
const todos = require("./routes/todos");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB. Listening on Port ${port}`);
    });
  })
  .catch((err) => console.log(err));
