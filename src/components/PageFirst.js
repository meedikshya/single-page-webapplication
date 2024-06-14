// PageFirst.js
import React from "react";
import styles from "../styles/PageFirst.module.scss";
import images from "../Images/containerI.jpg";
import imageFirst from "../Images/containerII.jpg";
import imageSecond from "../Images/containerIII.jpg";
import { FaArrowRight } from "react-icons/fa";

export const PageFirst = () => {
  return (
    // Feature section
    <div className={styles.body}>
      <div className={styles.text_container}>
        <h1 className={styles.heading}>Campaigns</h1>
        <p className={styles.paragraph}>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div id="pageFirst" className={styles.card_container}>
        <div className={styles.card}>
          <img src={images} alt="cardImage" />
          <div className={styles.card_content}>
            <h3>Open Data Directive</h3>
            <p>
              In view of Russia's military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia's military action against the Ukrainian people,
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src={imageFirst} alt="cardImage" />
          <div className={styles.card_content}>
            <h3>Beneficial Ownership</h3>
            <p>
              In view of Russia's military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia's military action against the Ukrainian people,
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src={imageSecond} alt="cardImage" />
          <div className={styles.card_content}>
            <h3>EU Recovery Transparency</h3>
            <p>
              In view of Russia's military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia's military action against the Ukrainian people,
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFirst;
