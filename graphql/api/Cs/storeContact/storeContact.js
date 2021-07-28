import { CURRENT_TIME } from "../../../../utils/commonUtils";
import StoreContact from "../../../models/StoreContact";

export default {
  Query: {
    getStoreContact: async (_, args) => {
      const { isComplete } = args;

      try {
        const result = await StoreContact.find({ isComplete }).sort({
          createdAt: 1,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    modifyStoreContactComplete: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await StoreContact.updateOne(
          { _id: id },
          {
            isComplete: true,
            completedAt: current,
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    createStoreContact: async (_, args) => {
      const {
        name,
        loc,
        mobile,
        mayPay,
        email,
        isExistStore,
        description,
        isAgreement,
      } = args;

      try {
        const createdAt = await CURRENT_TIME();
        const result = await StoreContact.create({
          name,
          loc,
          mobile,
          mayPay,
          email,
          isExistStore,
          description,
          isAgreement,
          createdAt,
          completedAt: "-",
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    createNavStoreContact: async (_, args) => {
      const { name, mobile } = args;

      try {
        const createdAt = await CURRENT_TIME();

        const result = await StoreContact.create({
          name,
          mobile,
          createdAt,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
