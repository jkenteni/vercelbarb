import { useNavigate, Link } from 'react-router-dom';

function CadastroAdmin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    // Simulação local, sem backend

    navigate('/'); // Redireciona para a página de login
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          <i className="bi bi-person-plus" style={{ fontSize: '32px' }}></i>
        </div>

        <div style={styles.cardBody}>
          <h3 style={styles.title}>Cadastro</h3>

          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label htmlFor="nome" style={styles.label}>Nome completo</label>
              <input type="text" id="nome" placeholder="Seu nome" required style={styles.input} />
            </div>

            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                required
                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="senha" style={styles.label}>Senha</label>
              <input type="password" id="senha" placeholder="••••••••" required style={styles.input} />
            </div>

            <div style={styles.field}>
              <label htmlFor="confirmarSenha" style={styles.label}>Confirmar Senha</label>
              <input type="password" id="confirmarSenha" placeholder="••••••••" required style={styles.input} />
            </div>

            <button type="submit" style={styles.button}>Cadastrar</button>
          </form>

          <p style={styles.footerText}>
            Já tem uma conta? <Link to="/" style={styles.link}>Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: 'linear-gradient(to right, #f2e6d9, #d5c4a1)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Georgia', serif",
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff8f0',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(85, 60, 30, 0.2)',
    width: '100%',
    maxWidth: '400px',
    padding: '40px 30px 30px',
    position: 'relative',
    border: '1px solid #d1bfa3',
  },
  avatar: {
    width: '80px',
    height: '80px',
    backgroundColor: '#8b5e3c',
    color: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid white',
  },
  cardBody: {
    marginTop: '50px',
  },
  title: {
    textAlign: 'center',
    fontSize: '26px',
    color: '#5a3e1b',
    marginBottom: '25px',
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    color: '#4b321b',
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  input: {
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #c0a98f',
    fontSize: '16px',
    backgroundColor: '#fdfaf6',
    color: '#3c2c1a',
  },
  button: {
    backgroundColor: '#8b5e3c',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footerText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#4b321b',
    fontSize: '14px',
  },
  link: {
    color: '#8b5e3c',
    textDecoration: 'underline',
    fontWeight: '500',
  },
};


export default CadastroAdmin;
