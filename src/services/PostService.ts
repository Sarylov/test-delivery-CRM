import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { IOrders } from "./../models/orders";
interface IRecords {
  id: string;
  title: string;
  time: string;
  favorites: boolean;
}

export const postAPI = createApi({
  reducerPath: "postAPI",
  tagTypes: ["records"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IRecords[], number>({
      query: (limit: number = 5) => ({
        url: "/records",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "records" as const, id })),
              "records",
            ]
          : ["records"],
    }),
    addRecords: build.mutation({
      query: (body) => ({
        url: "/records",
        method: "POST",
        body,
      }),
      invalidatesTags: ["records"],
    }),
  }),
});
