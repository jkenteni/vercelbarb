import { useNavigate } from "react-router-dom";

function cadturma() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Turma cadastrada com sucesso!");
    navigate("/home");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Turma</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Campo ID da Turma */}
          <div style={styles.field}>
            <label htmlFor="turmaId" style={styles.label}>
              Código da Turma (2 dígitos)
            </label>
            <input
              type="text"
              id="turmaId"
              name="turmaId"
              placeholder="Ex: 01"
              pattern="\d{2}"
              maxLength={2}
              required
              style={styles.input}
            />
          </div>

          {/* Campo Nome da Turma */}
          <div style={styles.field}>
            <label htmlFor="turmaNome" style={styles.label}>
              Nome da Turma
            </label>
            <input
              type="text"
              id="turmaNome"
              name="turmaNome"
              placeholder="Ex: Turma A"
              required
              style={styles.input}
            />
          </div>

          {/* Botão de Enviar */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Cadastrar Turma
            </button>
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
    maxWidth: '500px',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  field: {
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
    marginTop: '20px',
    textAlign: 'center',
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

export default cadturma;
