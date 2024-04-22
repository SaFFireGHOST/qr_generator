import React from "react";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer>
      <p className="p1">
        Made by{" "}
        <img className="image_12" src="/Untitled.png" alt="mdsmmcj"></img>
        <a className={styles.anchor} href="https://github.com/SaFFireGHOST">
          Koushik
        </a>
      </p>
    </footer>
  );
}