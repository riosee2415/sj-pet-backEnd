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
      const { limit, currentPage } = args;
      try {
        const result = await Store.find()
          .limit(limit)
          .skip(currentPage * limit)
          .sort({ title: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getTotalStore: async (_, args) => {
      try {
        const result = await Store.find().sort({ title: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAllStoreByImportant: async (_, args) => {
      try {
        const result = await Store.find({ isImportant: true }).sort({
          title: 1,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getStoreTotalPageClient: async (_, args) => {
      const { limit } = args;

      try {
        const result = await Store.find();

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },

  Mutation: {
    createStoreOne: async (_, args) => {
      const { title, address, lnt, att, thumbnailPath, tel, workTime } = args;

      try {
        const result = await Store.create({
          title,
          address,
          lnt,
          att,
          thumbnailPath,
          tel,
          workTime,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateStoreOne: async (_, args) => {
      const {
        id,
        title,
        address,
        lnt,
        att,
        thumbnailPath,
        tel,
        workTime,
      } = args;

      try {
        const result = await Store.updateOne(
          { _id: id },
          {
            $set: {
              title,
              address,
              lnt,
              att,
              thumbnailPath,
              tel,
              workTime,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteStoreOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Store.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
