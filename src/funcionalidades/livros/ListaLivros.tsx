import {
  useGetLivrosQuery,
  useExcluirLivroMutation,
} from "../../services/livrosApi";

const ListaLivros = () => {
  const { data: livros, isLoading } = useGetLivrosQuery();
  const [excluirLivro] = useExcluirLivroMutation();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <ul>
      {livros?.map((l) => (
        <li key={l.id}>
          {l.titulo} - {l.autor}
          <button onClick={() => excluirLivro(l.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaLivros;
