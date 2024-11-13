import React from "react";
import styles from "./BookSection.module.css";
import { books } from "./BooksData";

export default function BookSection() {
  return (
    <section className={styles.bookSection}>
      <div className={styles.sectionCard}>
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
        <div className={styles.cardContent}>
          <h2 className={styles.sectionTitle}>Nuestros Libros</h2>
          <div className={styles.bookGrid}>
            {books.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.bookCover}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.svg?height=250&width=200";
                  }}
                />
                <div className={styles.bookInfo}>
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.bookAuthor}>{book.author}</p>
                  <p className={styles.bookPrice}>${book.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
