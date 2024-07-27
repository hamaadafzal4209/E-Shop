import mongoose from "mongoose";

const coupounCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  minAmount: {
    type: Number,
  },
  maxAmount: {
    type: Number,
  },
  shop: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const coupounsCodeModel = mongoose.model("coupuncode", coupounCodeSchema);
export default coupounsCodeModel;
