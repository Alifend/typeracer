import React from "react";
import Header from "./components/Header/Header";
import Game from "./pages/Game";
import About from "./pages/About";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import "./global.css";
const App = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
