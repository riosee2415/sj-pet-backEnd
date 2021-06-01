import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoticeBoard = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hit: {
      type: Number,
      required: true,
      default: 0,
    },
    fileOriginName1: {
      type: String,
      required: true,
    },
    filePath1: {
      type: String,
      required: true,
    },
    fileOriginName2: {
      type: String,
      required: true,
    },
    filePath2: {
      type: String,
      required: true,
    },
    fileOriginName3: {
      type: String,
      required: true,
    },
    filePath3: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`NoticeBoard`, NoticeBoard, `NoticeBoard`);
