import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCard}>
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
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>LibroMarket</h3>
            <p>Tu marketplace de libros favorito</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Enlaces rápidos</h4>
            <ul>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#books">Libros</a>
              </li>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Contacto</h4>
            <p>Email: info@libromarket.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 LibroMarket. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
