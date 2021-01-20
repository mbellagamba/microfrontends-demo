import React from "react";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Micro-frontends Demo</h1>
      <p className={styles.subtitle}>Landing page</p>
      <p>Click on login to load the authentication micro-frontend.</p>
      <a className={styles.action} href="/auth">
        Login
      </a>
    </div>
  );
}
