import './estilos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaHome from "./componentes/telas/telaHome";
import TelaCadastroFuncionarios from "./componentes/telas/telaCadastroFuncionarios";
import TelaCadastroProduto from "./componentes/telas/telaCadastroProdutos";
import TelaCadastroFornecedores from "./componentes/telas/telaCadastroFornecedores";
import Tela404 from './componentes/telas/tela404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaHome />} />
          <Route path="/funcionarios" element={<TelaCadastroFuncionarios />} />
          <Route path="/produtos" element={<TelaCadastroProduto />} />
          <Route path="/fornecedores" element={<TelaCadastroFornecedores />} />
          <Route path="/*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
