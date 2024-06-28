const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    bike_type: {
      type: String,
      required: true,
    },
    bike_type: {
      type: String,
      required: true,
    },
    bike_type: {
      type: String,
      required: true,
    },
    bike_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Bike", bikeSchema);
