import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoticeBoard = new Schema(
  {
    type: {
      type: String,
      required: true,
      default: "-",
    },
    title: {
      type: String,
      required: true,
      default: "안녕하세요",
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
      default: "-",
    },
    hit: {
      type: Number,
      required: true,
      default: 0,
    },
    fileOriginName1: {
      type: String,
      required: true,
      default: "-",
    },
    filePath1: {
      type: String,
      required: true,
      default: "-",
    },
    fileOriginName2: {
      type: String,
      required: true,
      default: "-",
    },
    filePath2: {
      type: String,
      required: true,
      default: "-",
    },
    fileOriginName3: {
      type: String,
      required: true,
      default: "-",
    },
    filePath3: {
      type: String,
      required: true,
      default: "-",
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
      default: "-",
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`NoticeBoard`, NoticeBoard, `NoticeBoard`);
