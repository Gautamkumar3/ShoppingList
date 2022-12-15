const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quant: { type: Number, required: true },
    priority: { type: String, enum: ["high", "medium", "low"], required: true },
    date: {
      type: String,
      required: true,
      default: new Date(Date.now()).toLocaleTimeString("en-GB", {
        hour12: false,
      }),
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("product", ProductSchema);

module.exports = Products;
