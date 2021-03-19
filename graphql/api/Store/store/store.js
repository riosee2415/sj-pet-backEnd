import Store from "../../../models/Store";

export default {
  Query: {
    getStoreOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Store.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getAllStore: async (_, args) => {
      try {
        const result = await Store.find().sort({ title: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
