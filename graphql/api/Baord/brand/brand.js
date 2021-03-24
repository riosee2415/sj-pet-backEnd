import { CURRENT_TIME } from "../../../../utils/commonUtils";
import Brand from "../../../models/Brand";

export default {
  Query: {
    getBrand: async (_, args) => {
      const { limit, currentPage } = args;
      try {
        const result = await Brand.find()
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getBrandList: async (_, args) => {
      try {
        const result = await Brand.find({ isDelete: false });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAllBrandList: async (_, args) => {
      try {
        const result = await Brand.find();

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    createBrand: async (_, args) => {
      const { thumbnail, title } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Brand.create({
          thumbnail,
          title,
          isDelete: false,
          hit: 0,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyBrandBasic: async (_, args) => {
      const { id, title, thumbnail } = args;

      try {
        const result = await Brand.updateOne(
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

    deleteBrand: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Brand.updateOne(
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
