import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    background: 'linear-gradient(to right, #f2e6d9, #d5c4a1)', // degrade bege/livro antigo
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: "'Georgia', serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff8f0',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(85, 60, 30, 0.2)',
    maxWidth: '700px',
    width: '100%',
    border: '1px solid #d1bfa3',
  },
  title: {
    fontSize: '28px',
    color: '#5a3e1b',
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid #c2a376',
    paddingBottom: '10px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },
  field: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#4b321b',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #c0a98f',
    fontSize: '16px',
    backgroundColor: '#fdfaf6',
    color: '#3c2c1a',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '30px',
  },
  button: {
    backgroundColor: '#8b5e3c',
    color: '#fff',
    padding: '14px 32px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '14px',
    color: '#3c2c1a',
  },
};

function Cadlivro() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Livro cadastrado com sucesso!");
    navigate("/home");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Livro</h2>

        <form onSubmit={handleSubmit}>
          {/* Primeira linha - Nome do Livro e ISBN */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Nome do Livro:</label>
              <input
                type="text"
                style={styles.input}
                placeholder="Digite o nome do livro"
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>ISBN do Livro:</label>
              <input
                type="text"
                style={styles.input}
                placeholder="Digite o ISBN do livro"
                required
              />
            </div>
          </div>

          {/* Segunda linha - Autor e Gênero */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Autor do Livro:</label>
              <input
                type="text"
                style={styles.input}
                placeholder="Digite o nome do autor"
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Gênero do Livro:</label>
              <select style={styles.input} required>
                <option value="">Selecione um Gênero</option>
                <option value="ficcao-cientifica">Ficção Científica</option>
                <option value="fantasia">Fantasia</option>
                <option value="misterio">Mistério</option>
                <option value="policial">Policial</option>
                <option value="suspense">Suspense</option>
                <option value="terror">Terror</option>
                <option value="aventura">Aventura</option>
                <option value="romance">Romance</option>
                <option value="distopia">Distopia</option>
                <option value="drama">Drama</option>
                <option value="historico">Histórico</option>
                <option value="biografia">Biografia</option>
                <option value="autobiografia">Autobiografia</option>
                <option value="literatura-infantojuvenil">Literatura Infantojuvenil</option>
                <option value="poesia">Poesia</option>
                <option value="cronica">Crônica</option>
                <option value="ensaio">Ensaio</option>
                <option value="filosofia">Filosofia</option>
                <option value="literatura-viagem">Literatura de viagem</option>
                <option value="horror">Horror</option>
              </select>
            </div>
          </div>

          {/* Terceira linha - Quantidade de Páginas */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Quantidade de Páginas:</label>
              <input
                type="number"
                style={styles.input}
                placeholder="Digite a quantidade de páginas"
                required
              />
            </div>
          </div>

          {/* Botão de envio */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Cadastrar Livro
            </button>
          </div>
        </form>
      </div>

      {/* Rodapé */}
      <div style={styles.footer}>
        
      </div>
    </div>
  );
}

export default Cadlivro;
