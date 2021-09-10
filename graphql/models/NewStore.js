import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NewStore = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`NewStore`, NewStore, `NewStore`);
