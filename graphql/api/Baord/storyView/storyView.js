import { CURRENT_TIME } from "../../../../utils/commonUtils";
import StoryView from "../../../models/StoryView";

export default {
  Query: {
    getStoryView: async (_, args) => {
      const { limit, currentPage } = args;
      try {
        const result = await StoryView.find()
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getStoryViewList: async (_, args) => {
      try {
        const result = await StoryView.find({ isDelete: false });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    createStoryView: async (_, args) => {
      const { thumbnail, title, content } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await StoryView.create({
          thumbnail,
          title,
          content,
          isDelete: false,
          hit: 0,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyStoryView: async (_, args) => {
      const { id, content } = args;

      try {
        const result = await StoryView.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              content,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyStoryViewBasic: async (_, args) => {
      const { id, title, thumbnail } = args;

      try {
        const result = await StoryView.updateOne(
          { _id: id },
          {
            $set: {
              title,
              thumbnail,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteStoryView: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await StoryView.updateOne(
          { _id: id },
          {
            $set: {
              isDelete: true,
              deletedAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
