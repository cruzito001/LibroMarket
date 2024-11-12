import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerCard}>
        <div className={styles.tools}>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.red}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.yellow}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.green}`}></span>
          </div>
        </div>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className={styles.icon}>📚</span>
            <span className={styles.text}>LibroMarket</span>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home" className={styles.navLink}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#books" className={styles.navLink}>
                Libros
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
