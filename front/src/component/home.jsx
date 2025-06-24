import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [modoNoturno, setModoNoturno] = useState(false);

  const toggleModo = () => setModoNoturno(!modoNoturno);

  const estilos = modoNoturno ? estilosNoturno : estilosClaro;

  return (
    <div style={estilos.page}>
      {/* Barra de Navegação */}
      <nav style={estilos.navbar}>
        <div style={estilos.logo}>📖 Biblioteca</div>
        <ul style={estilos.navLinks}>
          <li><Link to="/cadastro-livro" style={estilos.link}>Livros</Link></li>
          <li><Link to="/cadastro-turma" style={estilos.link}>Turmas</Link></li>
          <li><Link to="/cadastro-autor" style={estilos.link}>Autores</Link></li>
          <li><Link to="/cadastro-emprestimo" style={estilos.link}>Emprestimo</Link></li>
        </ul>
        <button onClick={toggleModo} style={estilos.botao}>
          {modoNoturno ? "☀️" : "🌑"}
        </button>
      </nav>

      {/* Carrossel de Autores */}
      <div style={estilos.carouselContainer}>
        <h2 style={estilos.carouselTitle}>Autores em Destaque</h2>
        <div style={estilos.carousel}>
          {autores.map((autor, index) => (
            <div key={index} style={estilos.card}>
              <img src={autor.foto} alt={autor.nome} style={estilos.image} />
              <p style={estilos.nome}>{autor.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const autores = [
  { nome: 'Machado de Assis', foto: 'src/assets/m.webp' },
  { nome: 'Clarice Lispector', foto: 'src/assets/c.jpg' },
  { nome: 'José de Alencar', foto: 'src/assets/a.jpg' },
  { nome: 'Cecília Meireles', foto: 'src/assets/b.jpg' },
  { nome: 'Carlos Drummond', foto: 'src/assets/R.jpg' },
  { nome: 'Karl Marx', foto: 'src/assets/oip.jpg' },

];

const baseStyles = {
  fontFamily: "'Georgia', serif",
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  botao: {
    marginLeft: '20px',
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  carouselContainer: {
    margin: '40px auto',
    padding: '0 20px',
    maxWidth: '1100px',
    textAlign: 'center',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '10px 0',
  },
  card: {
    minWidth: '200px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  nome: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

const estilosClaro = {
  ...baseStyles,
  page: {
    background: 'linear-gradient(to right, #f2e6d9, #d5c4a1)',
    minHeight: '100vh',
    ...baseStyles,
  },
  navbar: {
    backgroundColor: '#8b5e3c',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '4px solid #5a3e1b',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
  carouselTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#5a3e1b',
  },
  card: {
    ...baseStyles.card,
    backgroundColor: '#fffaf5',
    border: '1px solid #d1bfa3',
  },
  nome: {
    ...baseStyles.nome,
    color: '#4b321b',
  },
  botao: {
    ...baseStyles.botao,
    backgroundColor: '#d5c4a1',
    color: '#4b321b',
  },
};

const estilosNoturno = {
  ...baseStyles,
  page: {
    background: 'linear-gradient(to right, #2c3e50, #34495e)',
    minHeight: '100vh',
    color: '#ecf0f1',
  },
  navbar: {
    backgroundColor: '#1a252f',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '4px solid #0c141b',
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontWeight: '500',
  },
  carouselTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ecf0f1',
  },
  card: {
    ...baseStyles.card,
    backgroundColor: '#2f4050',
    border: '1px solid #445566',
  },
  nome: {
    ...baseStyles.nome,
    color: '#ecf0f1',
  },
  botao: {
    ...baseStyles.botao,
    backgroundColor: '#95a5a6',
    color: '#2c3e50',
  },
};

export default Home;
