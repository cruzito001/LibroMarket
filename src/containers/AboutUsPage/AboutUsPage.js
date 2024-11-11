import React from "react";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
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
          <div className={styles.card__content}>
            <h3 className={styles.title}>Nuestra Visión</h3>
            <p className={styles.content}>
              Ser la librería líder que inspira y transforma vidas a través de
              la magia de los libros, creando espacios donde cada historia
              encuentra su lector perfecto.
            </p>
          </div>
        </div>

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
          <div className={styles.card__content}>
            <h3 className={styles.title}>Nuestra Misión</h3>
            <p className={styles.content}>
              Proporcionar acceso a la mejor literatura, fomentar el amor por la
              lectura y crear una comunidad vibrante de lectores apasionados.
            </p>
          </div>
        </div>

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
          <div className={styles.card__content}>
            <h3 className={styles.title}>Nuestros Valores</h3>
            <p className={styles.content}>
              Pasión por la literatura, excelencia en servicio, innovación
              continua y compromiso con nuestra comunidad de lectores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
