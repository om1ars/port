import React from "react";
import "./about.scss";

import styles from "../styles/about.module.css";
import ImageContainer from "./parallaxText/ImageContainer";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Background</h1>
      <div className="">
        <ImageContainer />
      </div>

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
            Frontend-dev
          </div>
        </b>
      </div>
    </div>
  );
}
