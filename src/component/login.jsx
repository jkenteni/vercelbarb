import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CadastroAdmin from "./cadastroadmin";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simula login sem API
    setTimeout(() => {
      setLoading(false);
      // Aceita qualquer email/senha
      navigate("/home");
    }, 700);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Avatar Clássico */}
        <div style={styles.avatar}>
          <i className="bi bi-person" style={{ fontSize: '32px' }}></i>
        </div>

        <div style={styles.cardBody}>
          <h3 style={styles.title}>Login</h3>

          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                required
                style={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="senha" style={styles.label}>Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="••••••••"
                required
                style={styles.input}
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </div>

            <div style={styles.optionsRow}>
              <div style={styles.checkboxContainer}>
                <input type="checkbox" id="lembrar" style={styles.checkbox} />
                <label htmlFor="lembrar" style={styles.checkboxLabel}>Lembrar de mim</label>
              </div>
            </div>

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p style={styles.footerText}>
            Não tem uma conta? <a href="/cadastro-admin" style={styles.link}>Cadastre-se</a>
          </p>

           <p style={styles.footerText}>
            esqueceu a senha?  <a href="/recuperar-senha" style={styles.link}>recuperar</a>
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
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginBottom: '20px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '6px',
  },
  checkboxLabel: {
    color: '#4b321b',
  },
  link: {
    color: '#8b5e3c',
    textDecoration: 'underline',
    fontWeight: '500',
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
};

export default Login;
    transition: 'background-color 0.3s',
  },
  footerText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#4b321b',
    fontSize: '14px',
  },
};

export default Login;
