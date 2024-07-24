import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "seller",
  },
  avatar: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const shopModel = mongoose.model("shop", shopSchema);
export default shopModel;
