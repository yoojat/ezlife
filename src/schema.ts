import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")
  // api 폴더안에 깊이에 상관 없이 .graphql로 끝나는 파일들을 모두 가져옴
);
const allResolvers: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);
const mergedTypes = mergeTypes(allTypes as any);
const mergedResolvers = mergeResolvers(allResolvers);
const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
} as any);
export default schema;
