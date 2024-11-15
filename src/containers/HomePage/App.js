import React from "react";
import Header from "../Header/Header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import BookSection from "../BookSection/BookSection";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <HeroBanner />
      <main className={styles.main}>
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}
