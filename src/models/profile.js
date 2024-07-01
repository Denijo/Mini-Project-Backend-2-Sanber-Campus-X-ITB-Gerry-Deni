const mongoose = require("mongoose");

const profileSchema = new mongoose({
  user_id: { type: Schema.Types.ObjectId, ref: "Users", required: true0 },
  fullName: { type: String, required: true },
  dob: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("Profile", profileSchema);
