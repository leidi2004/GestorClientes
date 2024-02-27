import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getClientes: builder.query({
      query: () => '/clientes',
      providesTags: ["clientes"],
    }),
    getCliente: builder.query({
      query: (identificacion) => `clientes/${identificacion}`
    }),
    createCliente: builder.mutation({
      query: (newCliente) => ({
        url: '/clientes',
        method: 'POST',
        body: newCliente,
      }),
      invalidatesTags: ["clientes"],
    }),
    deleteCliente: builder.mutation({
      query: (identificacion) => ({
        url: `/clientes/${identificacion}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["clientes"],
    }),
    updateCliente: builder.mutation({
      query: ({ identificacion, ...updatedCliente }) => ({
        url: `/clientes/${identificacion}`,
        method: 'PUT',
        body: updatedCliente,
      }),
      invalidatesTags: ["clientes"],
    }),
  }),
});

export const {
  useGetClientesQuery,
  useGetClienteQuery,
  useDeleteClienteMutation,
  useUpdateClienteMutation,
  useCreateClienteMutation,
} = api;
