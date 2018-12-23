export const typeDefs = ["type CreateCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateCategory(name: String!, order: Int): CreateCategoryResponse!\n  DeleteCategory(id: Int!): DeleteCategoryResponse!\n  ModifyCategory(id: Int!, name: String, order: Int): ModifyCategoryResponse!\n  CreateProduct(name: String!, order: Int, content: String!): CreateProductResponse!\n  CreateSubCategory(name: String!, order: Int, categoryId: Int!): CreateSubCategoryResponse!\n  DeleteSubCategory(id: Int!): DeleteSubCategoryResponse!\n  ModifySubCategory(id: Int!, name: String, order: Int, categoryId: Int): ModifySubCategoryResponse!\n}\n\ntype DeleteCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetCategoriesResponse {\n  ok: Boolean!\n  error: String\n  categories: [Category]\n}\n\ntype Query {\n  GetCategories: GetCategoriesResponse!\n  category: Category\n  product: Product\n  GetSubCategories: GetSubCategoriesResponse!\n  subCategory: SubCategory\n  user: User\n}\n\ntype ModifyCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Category {\n  id: Int!\n  name: String!\n  order: Int!\n  createdAt: String!\n  updatedAt: String!\n  subCategories: [SubCategory]\n}\n\ntype CreateProductResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  order: Int!\n  content: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype CreateSubCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype DeleteSubCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetSubCategoriesResponse {\n  ok: Boolean!\n  error: String\n  subCategories: [SubCategory]\n}\n\ntype ModifySubCategoryResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SubCategory {\n  id: Int!\n  name: String!\n  order: Int!\n  category: Category\n  categoryId: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: Int!\n  uniqueKey: String\n  userId: String!\n  password: String!\n  inputPassword: String\n  createdAt: String\n  updatedAt: String\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetCategories: GetCategoriesResponse;
  category: Category | null;
  product: Product | null;
  GetSubCategories: GetSubCategoriesResponse;
  subCategory: SubCategory | null;
  user: User | null;
}

export interface GetCategoriesResponse {
  ok: boolean;
  error: string | null;
  categories: Array<Category> | null;
}

export interface Category {
  id: number;
  name: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  subCategories: Array<SubCategory> | null;
}

export interface SubCategory {
  id: number;
  name: string;
  order: number;
  category: Category | null;
  categoryId: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  order: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetSubCategoriesResponse {
  ok: boolean;
  error: string | null;
  subCategories: Array<SubCategory> | null;
}

export interface User {
  id: number;
  uniqueKey: string | null;
  userId: string;
  password: string;
  inputPassword: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  CreateCategory: CreateCategoryResponse;
  DeleteCategory: DeleteCategoryResponse;
  ModifyCategory: ModifyCategoryResponse;
  CreateProduct: CreateProductResponse;
  CreateSubCategory: CreateSubCategoryResponse;
  DeleteSubCategory: DeleteSubCategoryResponse;
  ModifySubCategory: ModifySubCategoryResponse;
}

export interface CreateCategoryMutationArgs {
  name: string;
  order: number | null;
}

export interface DeleteCategoryMutationArgs {
  id: number;
}

export interface ModifyCategoryMutationArgs {
  id: number;
  name: string | null;
  order: number | null;
}

export interface CreateProductMutationArgs {
  name: string;
  order: number | null;
  content: string;
}

export interface CreateSubCategoryMutationArgs {
  name: string;
  order: number | null;
  categoryId: number;
}

export interface DeleteSubCategoryMutationArgs {
  id: number;
}

export interface ModifySubCategoryMutationArgs {
  id: number;
  name: string | null;
  order: number | null;
  categoryId: number | null;
}

export interface CreateCategoryResponse {
  ok: boolean;
  error: string | null;
}

export interface DeleteCategoryResponse {
  ok: boolean;
  error: string | null;
}

export interface ModifyCategoryResponse {
  ok: boolean;
  error: string | null;
}

export interface CreateProductResponse {
  ok: boolean;
  error: string | null;
}

export interface CreateSubCategoryResponse {
  ok: boolean;
  error: string | null;
}

export interface DeleteSubCategoryResponse {
  ok: boolean;
  error: string | null;
}

export interface ModifySubCategoryResponse {
  ok: boolean;
  error: string | null;
}
