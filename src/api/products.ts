import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  inStock: boolean;
  rating: {
    rate: number;
    count: number;
  };
}

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface ProductAPIInterface {
  category?: string;
  limit?: number;
  sort?: "desc" | "asc";
}

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
  endpoints: (builder) => ({
    fetchProductById: builder.query({
      query: (id) => `${id}`,
    }),
    fetchProductsByCategory: builder.query<ProductInterface[], string>({
      query: (category) => `${category}`,
    }),
    fetchAllCategories: builder.query<string[], void>({
      query: () => "categories",
    }),
    fetchProducts: builder.query<ProductInterface[], ProductAPIInterface>({
      query: ({ category, sort = "asc", limit = 20 }) => {
        const params = new URLSearchParams();
        console.log("Aiosmtjdas", sort, limit);
        if (sort) params.append("sort", sort);
        if (limit) params.append("limit", limit.toString());

        console.log(`${category ? category : ""}?${params.toString()}`);
        return `${category ? `category/${category}` : ""}?${params.toString()}`;
      },
      transformResponse: (response: ProductInterface[]) => {
        const transformedProducts = response.map((element) => ({
          ...element,
          inStock: getRandomNumber(0, 100) > 50, // 50% chance of being in stock
        }));

        return transformedProducts;
      },
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchAllCategoriesQuery,
  useFetchProductsByCategoryQuery,
} = productsApi;
