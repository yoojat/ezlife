import SubCategory from "../../../entities/Subcategory";
import {
  DeleteSubCategoryMutationArgs,
  DeleteSubCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    DeleteSubCategory: headResolver(
      async (
        _,
        args: DeleteSubCategoryMutationArgs
      ): Promise<DeleteSubCategoryResponse> => {
        const { id } = args;

        try {
          const subCategory = await SubCategory.findOne({ id });
          if (!subCategory) {
            return {
              ok: false,
              error: "해당 하위 카테고리가 존재하지 않습니다"
            };
          }
          await subCategory.remove();
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
