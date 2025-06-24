import { useNavigate } from 'react-router-dom';

function Cadautor() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode coletar os dados do formulário
    alert('Autor cadastrado com sucesso!');
    
    // Redirecionar para outra rota, se necessário
    navigate('/home'); // Altere para onde quiser ir após o cadastro
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Autor</h2>
        <form onSubmit={handleSubmit}>
          {/* Nome e Data de Nascimento */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Nome do Autor</label>
              <input
                type="text"
                placeholder="Ex: Machado de Assis"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Data de Nascimento</label>
              <input
                type="date"
                style={styles.input}
                required
              />
            </div>
          </div>

          {/* Gênero Literário */}
          <div style={styles.row}>
            <div style={{ ...styles.field, flex: 1 }}>
              <label style={styles.label}>Gênero Literário</label>
              <select style={styles.input} required>
                <option value="">Selecione um gênero</option>
                <option value="romance">Romance</option>
                <option value="poesia">Poesia</option>
                <option value="conto">Conto</option>
                <option value="ensaio">Ensaio</option>
                <option value="cronica">Crônica</option>
                <option value="teatro">Teatro</option>
                <option value="filosofia">Filosofia</option>
              </select>
            </div>
          </div>

          {/* Escola Literária */}
          <div style={styles.row}>
            <div style={{ ...styles.field, flex: 1 }}>
              <label style={styles.label}>Escola Literária <span style={{ fontWeight: 'normal', fontStyle: 'italic' }}>(opcional)</span></label>
              <input
                type="text"
                placeholder="Ex: Realismo, Modernismo"
                style={styles.input}
              />
            </div>
          </div>

          {/* Foto do Autor */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Foto do Autor</label>
              <input type="file" style={styles.inputFile} accept="image/*" />
            </div>
          </div>

          {/* Botão */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Cadastrar Autor</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: 'linear-gradient(to right, #f2e6d9, #d5c4a1)',
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
  inputFile: {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #c0a98f',
    backgroundColor: '#fdfaf6',
    color: '#3c2c1a',
    fontFamily: 'inherit',
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
};

export default Cadautor;
