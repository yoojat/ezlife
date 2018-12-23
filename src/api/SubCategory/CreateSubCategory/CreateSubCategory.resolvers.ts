import Category from "../../../entities/Category";
import SubCategory from "../../../entities/SubCategory";
import {
  CreateSubCategoryMutationArgs,
  CreateSubCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    CreateSubCategory: headResolver(
      async (
        _,
        args: CreateSubCategoryMutationArgs
      ): Promise<CreateSubCategoryResponse> => {
        const { name, order, categoryId } = args;

        try {
          const category = await Category.findOne({ id: categoryId });
          if (!category) {
            return {
              ok: false,
              error: "카테고리가 존재하지 않습니다"
            };
          }

          const recentSubCategory = await SubCategory.findOne(
            {},
            { order: { order: "DESC" } }
          );
          await SubCategory.create({
            name,
            order: order
              ? order
              : recentSubCategory
              ? recentSubCategory.order + 1
              : 1,
            categoryId
          }).save();

          return {
            ok: true,
            error: null
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message
          };
        }
      }
    )
  }
};

export default resolvers;
