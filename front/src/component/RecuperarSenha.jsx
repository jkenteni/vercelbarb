import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula envio local
    alert("Se o e-mail existir, um link de redefinição será enviado.");
    navigate("/"); // volta para a tela de login
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          <i className="bi bi-envelope" style={{ fontSize: '28px' }}></i>
        </div>

        <div style={styles.cardBody}>
          <h3 style={styles.title}>Recuperar Senha</h3>

          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>Email cadastrado</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>Enviar link de recuperação</button>
          </form>

          <p style={styles.footerText}>
            Lembrou da senha? <a href="/" style={styles.link}>Fazer login</a>
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

export default RecuperarSenha;
};

export default RecuperarSenha;
