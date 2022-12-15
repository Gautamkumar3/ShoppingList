const mongoose = require("mongoose");

let bookMarksSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quant: { type: Number, required: true },
    priority: { type: String, enum: ["high", "medium", "low"], required: true },
    date: {
      type: String,
      required: true,
      default: new Date(Date.now()).toLocaleTimeString("en-GB"),
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BookMarks = mongoose.model("bookmark", bookMarksSchema);

module.exports = BookMarks;
