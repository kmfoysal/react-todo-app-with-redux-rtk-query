import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"]
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Todos']
    }),

    editTodo: builder.mutation({
      query: ({id, data})=> ({
        url: `/todos/${id}`,
        method: "PATCH",
        body:data
      }),
      invalidatesTags: ["Todos"]
    })
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useEditTodoMutation } = apiSlice;