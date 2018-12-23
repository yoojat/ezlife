import Category from "../../../entities/Category";
import { GetCategoriesResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetCategories: async (_, __): Promise<GetCategoriesResponse> => {
      try {
        const categories = await Category.find();
        if (!categories) {
          return {
            ok: false,
            error: "카테고리를 찾을 수 없습니다",
            categories: null
          };
        }
        return {
          ok: true,
          error: null,
          categories
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          categories: null
        };
      }
    }
  }
};

export default resolvers;
