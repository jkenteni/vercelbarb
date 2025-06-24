import { useNavigate } from 'react-router-dom';

function CadEmprestimo() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode capturar e salvar os dados do empréstimo
    alert('Empréstimo cadastrado com sucesso!');

    // Redirecionar, se quiser
    navigate('/home'); // Altere para a rota desejada
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Empréstimo</h2>

        <form onSubmit={handleSubmit}>
          {/* Aluno e Turma */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Nome do Aluno</label>
              <input type="text" style={styles.input} placeholder="Ex: João da Silva" required />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Número da Turma</label>
              <input type="text" style={styles.input} placeholder="Ex: 2A" required />
            </div>
          </div>

          {/* Nome do Livro */}
          <div style={styles.row}>
            <div style={{ ...styles.field, flex: 1 }}>
              <label style={styles.label}>Nome do Livro</label>
              <input type="text" style={styles.input} placeholder="Ex: Dom Casmurro" required />
            </div>
          </div>

          {/* Datas */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Data de Empréstimo</label>
              <input type="date" style={styles.input} required />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Data de Devolução</label>
              <input type="date" style={styles.input} required />
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Cadastrar Empréstimo</button>
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

export default CadEmprestimo;
