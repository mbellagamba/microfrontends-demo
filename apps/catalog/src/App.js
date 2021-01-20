import React from "react";
import { getRobots } from "./api";
import styles from "./App.module.css";

export default function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    getRobots()
      .then(setItems)
      .catch((err) => {
        if (err.message.match(/unauthorized/i)) {
          window.location.href = "/auth?unauthorized=true";
        } else {
          alert("An error occurred: " + err.message);
        }
      });
  });
  return (
    <div className={styles.container}>
      <header>
        <h1>Catalog</h1>
      </header>
      <article>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.image} width="100" height="100" />
              {item.name}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
