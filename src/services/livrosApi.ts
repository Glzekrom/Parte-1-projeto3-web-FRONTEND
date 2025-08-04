import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  editora: string;
  genero: string;
}

export const livrosApi = createApi({
  reducerPath: "livrosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5286/api/" }),
  endpoints: (builder) => ({
    getLivros: builder.query<Livro[], void>({
      query: () => "livros",
    }),
    criarLivro: builder.mutation<Livro, Partial<Livro>>({
      query: (livro) => ({
        url: "livros",
        method: "POST",
        body: livro,
      }),
    }),
    excluirLivro: builder.mutation<void, number>({
      query: (id) => ({
        url: `livros/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetLivrosQuery,
  useCriarLivroMutation,
  useExcluirLivroMutation,
} = livrosApi;
