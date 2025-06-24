import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import Cadlivro from './component/cadlivro';
import Cadturma from './component/cadturma';
import CadEmprestimo from './component/cademprestimo';
import Cadautor from './component/cadautor';
import CadastroAdmin from './component/cadastroadmin';
import Home from './component/home';
import RecuperarSenha from './component/RecuperarSenha';


import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro-admin" element={<CadastroAdmin />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha/>}/>
        <Route path="/cadastro-livro" element={<Cadlivro />} />
        <Route path="/cadastro-turma" element={<Cadturma />} />
        <Route path="/cadastro-emprestimo" element={<CadEmprestimo />} />
        <Route path="/cadastro-autor" element={<Cadautor />} />
      </Routes>
    </Router>
  );
}

export default App;
