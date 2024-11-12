import React from "react";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.card}>
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
        <div className={styles.content}>
          <h1 className={styles.title}>Bienvenido a LibroMarket</h1>
          <p className={styles.subtitle}>
            Descubre un mundo de historias en un solo lugar
          </p>
          <button className={styles.cta}>Explorar Libros</button>
        </div>
      </div>
    </section>
  );
}
