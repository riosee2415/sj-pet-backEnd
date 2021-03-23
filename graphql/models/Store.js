import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Store = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lnt: {
      type: String,
      required: true,
    },
    att: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    workTime: {
      type: String,
      required: true,
    },
    isImportant: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Store`, Store, `Store`);
