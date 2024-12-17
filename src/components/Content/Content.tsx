import React from "react";
import styles from "./Content.module.css";

const Content: React.FC = () => {
  return (
    <main className={styles.Content}>
      <h1>Добро пожаловать!</h1>
      <p>Это ваш контент, доступный после входа в систему.</p>
    </main>
  );
};

export default Content;
