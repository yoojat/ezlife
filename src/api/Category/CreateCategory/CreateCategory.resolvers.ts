import Category from "../../../entities/Product";
import {
  CreateCategoryMutationArgs,
  CreateCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    CreateCategory: headResolver(
      async (
        _,
        args: CreateCategoryMutationArgs
      ): Promise<CreateCategoryResponse> => {
        const { name, order } = args;

        const recentCategory = await Category.findOne(
          {},
          { order: { order: "DESC" } }
        );

        try {
          await Category.create({
            name,
            order: order ? order : recentCategory ? recentCategory.order + 1 : 1
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
