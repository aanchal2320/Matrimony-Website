import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    friendRequests: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    dob: {
      type: Date,
      default: Date.now,
    },
    religion: {
      type: String,
      default: "Hindu",
    },
    annualIncome: {
      type: Number,
      default: 0,
    },
    nationality: {
      type: String,
      default: "",
    },
    maritialStatus: {
      type: String,
      default: "",
    },
    horoscope: {
      type: String,
      default: "",
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
