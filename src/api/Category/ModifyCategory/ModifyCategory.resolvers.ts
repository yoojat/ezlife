import Category from "../../../entities/Product";
import {
  ModifyCategoryMutationArgs,
  ModifyCategoryResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArgs";
import headResolver from "../../../utils/headResolver";

const resolvers: Resolvers = {
  Mutation: {
    ModifyCategory: headResolver(
      async (
        _,
        args: ModifyCategoryMutationArgs
      ): Promise<ModifyCategoryResponse> => {
        try {
          const { id } = args;
          const notNull: any = cleanNullArgs(args);
          await Category.update({ id }, { ...notNull });
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
