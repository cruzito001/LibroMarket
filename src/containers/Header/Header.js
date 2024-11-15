import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

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
            <li className={styles.cartContainer} ref={cartRef}>
              <a
                href="#compra"
                className={`${styles.navLink} ${styles.cartLink}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsCartOpen(!isCartOpen);
                }}
              >
                🛒
              </a>
              {isCartOpen && (
                <div className={styles.cartModal}>
                  <div className={styles.modalTools}>
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
                  <div className={styles.cartPreview}>
                    <h3>Tu Carrito</h3>
                    <p>No hay items en tu carrito.</p>
                    <a href="#compra" className={styles.viewCartButton}>
                      Ver Carrito
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
