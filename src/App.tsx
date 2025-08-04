import CadastroAutor from "./funcionalidades/autores/CadastroAutor";
import CadastroEditora from "./funcionalidades/editoras/CadastroEditora";
import CadastroGenero from "./funcionalidades/generos/CadastroGenero";
import CadastroLivro from "./funcionalidades/livros/CadastroLivro";
import ListaLivros from "./funcionalidades/livros/ListaLivros";

function App() {
  return (
    <div>
      <h1>Biblioteca</h1>
      <CadastroAutor />
      <CadastroEditora />
      <CadastroGenero />
      <CadastroLivro />
      <hr />
      <h2>Livros Cadastrados</h2>
      <ListaLivros />
    </div>
  );
}

export default App;
