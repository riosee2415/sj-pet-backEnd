import NewStore from "../../../models/NewStore";

export default {
  Query: {
    getNewStoreAdmin: async (_, args) => {
      try {
        const result = await NewStore.find();

        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },

    getNewStoreAdminOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await NewStore.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getAllNewStore: async (_, args) => {
      try {
        const result = await NewStore.find();

        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },

  Mutation: {
    updateNewStoreOne: async (_, args) => {
      const { id, title, thumbnailPath } = args;

      try {
        const result = await NewStore.updateOne(
          { _id: id },
          {
            $set: {
              title,
              thumbnailPath,
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
