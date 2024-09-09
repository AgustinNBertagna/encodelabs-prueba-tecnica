import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/\S+@\S+\.\S+/, "Invalid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { collection: "users" }
);

userSchema.pre("save", function (next) {
  this.id = this._id;
  next();
});

export default model<IUser>("User", userSchema);
