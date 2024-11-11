import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
