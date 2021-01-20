import React from "react";
import styles from "./App.module.css";
import { login } from "./api";

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    login(ev.target[0].value, ev.target[1].value)
      .then((token) => {
        setLoading(false);
        window.sessionStorage.setItem("token", token);
        window.location.href = "/catalog";
      })
      .catch((err) => {
        alert("An error occurred! " + err.message);
      });
  };
  return (
    <div className={styles.container}>
      {isSessionExpired() && <p>Sessione scaduta.</p>}
      <div className={styles.card}>
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              name="username"
              className={styles.field}
              type="text"
              autoComplete="username"
              required
            />
          </label>
          <label>
            Password
            <input
              name="password"
              className={styles.field}
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <input
            className={styles.submit}
            type="submit"
            value={loading ? "Autenticazione..." : "Login"}
          />
        </form>
      </div>
      <p>
        Click <strong>Login</strong> to simulate the authentication
      </p>
    </div>
  );
}

function isSessionExpired() {
  const params = new URLSearchParams(window.location.search);
  return params.has("unauthorized");
}
