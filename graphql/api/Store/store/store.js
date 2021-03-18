import Store from "../../../models/Store";

export default {
  Query: {
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
