import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 700);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} autoComplete="on">
        <div style={styles.avatar}>
          <i className="bi bi-person" style={{ fontSize: 40 }}></i>
        </div>
        <h2 style={styles.title}>Entrar</h2>
        <label style={styles.label} htmlFor="email">Email</label>
        <input
          style={styles.input}
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
        />
        <label style={styles.label} htmlFor="senha">Senha</label>
        <input
          style={styles.input}
          id="senha"
          type="password"
          placeholder="••••••••"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <div style={styles.options}>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} /> Lembrar de mim
          </label>
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <div style={styles.links}>
          <button
            type="button"
            style={styles.linkButton}
            onClick={() => navigate("/cadastro-admin")}
          >
            Cadastre-se
          </button>
          <button
            type="button"
            style={styles.linkButton}
            onClick={() => navigate("/recuperar-senha")}
          >
            Esqueceu a senha?
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #f2e6d9 0%, #d5c4a1 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Georgia, serif",
    padding: 16,
  },
  form: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 32px rgba(85,60,30,0.15)",
    padding: "40px 32px 32px",
    width: "100%",
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 12,
    border: "1px solid #d1bfa3",
  },
  avatar: {
    alignSelf: "center",
    background: "#8b5e3c",
    color: "#fff",
    borderRadius: "50%",
    width: 72,
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: -56,
    border: "4px solid #fff",
    boxShadow: "0 2px 8px rgba(85,60,30,0.08)",
  },
  title: {
    textAlign: "center",
    color: "#5a3e1b",
    marginBottom: 8,
    fontWeight: 700,
    fontSize: 24,
  },
  label: {
    color: "#4b321b",
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 2,
    marginTop: 8,
  },
  input: {
    padding: "10px 12px",
    borderRadius: 6,
    border: "1px solid #c0a98f",
    fontSize: 16,
    background: "#fdfaf6",
    color: "#3c2c1a",
    outline: "none",
    marginBottom: 2,
  },
  options: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0 0 0",
  },
  checkboxLabel: {
    color: "#4b321b",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontWeight: 400,
  },
  checkbox: {
    accentColor: "#8b5e3c",
    marginRight: 4,
  },
  button: {
    background: "#8b5e3c",
    color: "#fff",
    padding: "12px",
    fontSize: 16,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10,
    fontWeight: 600,
    transition: "background 0.2s",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginTop: 18,
    alignItems: "center",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#8b5e3c",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 500,
    padding: 0,
  },
};

export default Login;
