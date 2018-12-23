import Category from "../../../entities/Category";
import SubCategory from "../../../entities/SubCategory";
import {
  ModifySubCategoryMutationArgs,
  ModifySubCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArgs";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    ModifySubCategory: headResolver(
      async (
        _,
        args: ModifySubCategoryMutationArgs
      ): Promise<ModifySubCategoryResponse> => {
        try {
          const { id, categoryId } = args;

          if (categoryId) {
            const category = await Category.findOne({ id: categoryId });
            if (!category) {
              return {
                ok: false,
                error: "해당 카테고리가 존재하지 않습니다"
              };
            }
          }

          const notNull: any = cleanNullArgs(args);
          await SubCategory.update({ id }, { ...notNull });
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
