import Category from "../../../entities/Category";
import {
  DeleteCategoryMutationArgs,
  DeleteCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    DeleteCategory: headResolver(
      async (
        _,
        args: DeleteCategoryMutationArgs
      ): Promise<DeleteCategoryResponse> => {
        const { id } = args;

        try {
          const category = await Category.findOne({ id });
          if (!category) {
            return {
              ok: false,
              error: "해당 카테고리가 존재하지 않습니다"
            };
          }
          await category.remove();
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
