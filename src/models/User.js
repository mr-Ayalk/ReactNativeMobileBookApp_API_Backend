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
















// **SIGNUP WORKFLOW**

// 1. You type your username, email, and password into the signup form.
// 2. The app makes sure you’ve filled out everything correctly (password long enough, valid email format).
// 3. When you tap "Sign Up," your information is sent to the server.
// 4. The server checks its database to see if your username or email is already being used by someone else.
// 5. If everything is good, the server creates a new user account for you.
// 6. The server generates a JWT (JSON Web Token), which is like a special digital ID card.
// 7. The server sends this token back to your app along with some basic info about your account.
// 8. The app stores this token on your device using something called AsyncStorage (like a small file cabinet for app data).
// 9. You’re now logged in and can use the app 🎉




