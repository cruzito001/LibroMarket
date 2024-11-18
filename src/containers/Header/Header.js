import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            <div
              className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className={`${styles.navContainer} ${
              isMenuOpen ? styles.open : ""
            }`}
          >
            <div className={styles.mobileNav} ref={menuRef}>
              <button
                className={styles.closeButton}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
              <ul className={styles.navLinks}>
                <li>
                  <a
                    href="#home"
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#books"
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Libros
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nosotros
                  </a>
                </li>
                <li className={styles.cartContainer} ref={cartRef}>
                  <button
                    className={`${styles.navLink} ${styles.cartLink}`}
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    aria-expanded={isCartOpen}
                  >
                    🛒
                  </button>
                  {isCartOpen && (
                    <div className={styles.cartModal}>
                      <div className={styles.modalTools}>
                        <div className={styles.circle}>
                          <span
                            className={`${styles.box} ${styles.red}`}
                          ></span>
                        </div>
                        <div className={styles.circle}>
                          <span
                            className={`${styles.box} ${styles.yellow}`}
                          ></span>
                        </div>
                        <div className={styles.circle}>
                          <span
                            className={`${styles.box} ${styles.green}`}
                          ></span>
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
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
