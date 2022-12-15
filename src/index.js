const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const ProductRouter = require("./modal/product.router");
const BookMarksRouter = require("./modal/bookmarks.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/product", ProductRouter);
app.use("/bookmarks", BookMarksRouter);

app.get("/", (req, res) => {
  res.send("Wecome");
});

app.listen(8080, async () => {
  await dbConnect();
  console.log("Server is running on port 8080");
});
