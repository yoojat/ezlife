import SubCategory from "../../../entities/SubCategory";
import { GetSubCategoriesResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetSubCategories: async (_, __): Promise<GetSubCategoriesResponse> => {
      try {
        const subCategories = await SubCategory.find();
        if (!subCategories) {
          return {
            ok: false,
            error: "카테고리를 찾을 수 없습니다",
            subCategories: null
          };
        }
        return {
          ok: true,
          error: null,
          subCategories
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          subCategories: null
        };
      }
    }
  }
};

export default resolvers;
