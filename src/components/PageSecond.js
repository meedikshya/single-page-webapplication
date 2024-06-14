import React from "react";
import styles from "../styles/PageSecond.module.scss";
import { FaArrowRight } from "react-icons/fa";

import { Slider } from "./Slider";

import imageFirst from "../Images/personFirst.jpg";
import imageSecond from "../Images/personDecond.jpg";
import imageThird from "../Images/personThird.jpg";
import imageFourth from "../Images/personFourth.jpg";

export const PageSecond = () => {
  return (
    // Feature SectionII
    <div className={styles.body} id="AboutUS">
      <div className={styles.container}>
        <div className={styles.box_one}>
          <div className={styles.text_container}>
            <h1 className={styles.heading}>Who we are</h1>
            <p className={styles.paragraph}>
              We are a collaboration of Non Govt. and professionals working to
              ensure that government spending is done fairly, openly,
              efficiently, and creates the best value for money and best
              outcomes for Europe. We are working at the national and EU levels
              to advance the principles of openness in spending of funds,
              procurement, and company ownership within the EU.
            </p>
            <a href="/" className={styles.btn}>
              <span className={styles.btn_text}>See More</span>{" "}
              <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
        <div className={styles.box_two}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageFirst} alt="cardImage" />
            </div>
            <div className={styles.cardText}>
              <h3>Adriana Homolova</h3>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageSecond} alt="cardImage" />
            </div>
            <div className={styles.cardText}>
              <h3>Sandor Lederer</h3>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageThird} alt="cardImage" />
            </div>
            <div className={styles.cardText}>
              <h3>Karolis Granickas</h3>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageFourth} alt="cardImage" />
            </div>
            <div className={styles.cardText}>
              <h3>Marcus Joseph</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scroll_div}>
        <Slider />
      </div>
    </div>
  );
};
