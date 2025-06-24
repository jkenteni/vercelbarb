import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} autoComplete="on">
        <div style={styles.avatar}>
          <i className="bi bi-envelope" style={{ fontSize: 32 }}></i>
        </div>
        <h2 style={styles.title}>Recuperar Senha</h2>
        <label style={styles.label} htmlFor="email">Email cadastrado</label>
        <input
          style={styles.input}
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
          disabled={enviado}
        />
        <button type="submit" style={styles.button} disabled={enviado || !email}>
          {enviado ? "Enviado!" : "Enviar link de recuperação"}
        </button>
        <div style={styles.links}>
          <button
            type="button"
            style={styles.linkButton}
            onClick={() => navigate("/")}
            disabled={enviado}
          >
            Voltar para login
          </button>
        </div>
        {enviado && (
          <div style={styles.successMsg}>
            Se o e-mail existir, um link de redefinição será enviado.
          </div>
        )}
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
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: -48,
    border: "4px solid #fff",
    boxShadow: "0 2px 8px rgba(85,60,30,0.08)",
  },
  title: {
    textAlign: "center",
    color: "#5a3e1b",
    marginBottom: 8,
    fontWeight: 700,
    fontSize: 22,
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
    opacity: 1,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginTop: 12,
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
  successMsg: {
    color: "#357a38",
    background: "#eafbe7",
    borderRadius: 6,
    padding: "10px 8px",
    marginTop: 14,
    textAlign: "center",
    fontSize: 15,
    border: "1px solid #b6e2b6",
  },
};

export default RecuperarSenha;
