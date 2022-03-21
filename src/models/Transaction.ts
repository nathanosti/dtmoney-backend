import mongoose, { Schema } from "mongoose";
import { ITransaction } from "../utils/types";

const transactionSchema = new Schema<ITransaction>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isPositive: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Transaction", transactionSchema);
