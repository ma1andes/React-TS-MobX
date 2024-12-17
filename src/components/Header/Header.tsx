import React from "react";
import { observer } from "mobx-react-lite";
import loginStore from "../LogIn/LogIn";
import styles from "./Header.module.css";

const Header: React.FC = observer(() => {
  return (
    <header className={styles.Header}>
      <nav className={styles.HeaderNav}>
        <a href="#">
          <img
            src="src/static/img/logo.webp"
            alt="logo_link_landing-page"
            className={styles.HeaderLogo}
          />
        </a>
        <a className={styles.headerLinks} href="#">Home</a>
        <a className={styles.headerLinks} href="#">About</a>
        <a className={styles.headerLinks} href="#">Contact</a>
      </nav>
      <button
        className={styles.HeaderButton}
        onClick={() => loginStore.toggleLogin()}
      >
        {loginStore.isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </header>
  );
});  

export default Header;
