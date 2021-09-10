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
        const result = await Store.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
