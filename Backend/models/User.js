import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  avatar: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
