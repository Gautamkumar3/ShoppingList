const express = require("express");
const Products = require("../Schema/product.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  const { title, quant, priority, description } = req.body;
  if ((!title, !quant, !priority, !description)) {
    return res.statusCode(500).send("All fields are required");
  }
  try {
    let product = new Products({ title, quant, priority, description });
    await product.save();
    res.status(200).send(product);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.get("/", async (req, res) => {
  try {
    let allProducts = await Products.find();
    res.status(200).send(allProducts);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

module.exports = app;
