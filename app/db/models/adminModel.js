// adminModel.js

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true },
});

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
