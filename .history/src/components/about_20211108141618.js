import React from "react";
import './about.scss'

import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div class="Iam">
        <p>I am </p>
        <b>
          <div class="innerIam">
            Omar
            <br />
            Programmer
            <br />
            Youtuber
            <br />
            Gamer
            <br />
            Algorith
          </div>
        </b>
      </div>
    </div>
  );
}
