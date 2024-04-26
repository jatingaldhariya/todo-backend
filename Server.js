const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const port = 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected To MongoDB.."))
  .catch((e) => console.log(e));

app.use(routes);
app.listen(process.env.PORT, () =>
  console.log(`Listening on: http://localhost:${port}`)
);
