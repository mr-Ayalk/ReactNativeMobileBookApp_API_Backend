import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
