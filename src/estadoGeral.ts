import { configureStore } from "@reduxjs/toolkit";
import { livrosApi } from "./services/livrosApi";
import autoresReducer from "./funcionalidades/autores/controleAutores";
import editorasReducer from "./funcionalidades/editoras/controleEditoras";
import generosReducer from "./funcionalidades/generos/controleGeneros";

export const store = configureStore({
  reducer: {
    autores: autoresReducer,
    editoras: editorasReducer,
    generos: generosReducer,
    [livrosApi.reducerPath]: livrosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(livrosApi.middleware),
});

export type TipoEstadoGeral = ReturnType<typeof store.getState>;
export type TipoDespacho = typeof store.dispatch;
