import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StoreContact = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    loc: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    mayPay: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: true,
    },
    isExistStore: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    completedAt: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAgreement: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`StoreContact`, StoreContact, `StoreContact`);
