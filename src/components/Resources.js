import React from "react";
import styles from "../styles/Resources.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { TbTool } from "react-icons/tb";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { MdDone } from "react-icons/md";

export const Resources = () => {
  return (
    <div className={styles.body}>
      <div className={styles.text_container}>
        <h1 className={styles.heading}>Latest Resources</h1>
        <p className={styles.paragraph}>
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices.
        </p>
      </div>
      <div id="pageFirst" className={styles.card_container}>
        <div className={styles.card}>
          <div
            className={styles.icon_div}
            style={{ backgroundColor: "#F8F1FF" }}
          >
            <TbTool className={styles.icon} style={{ color: "#A276FF" }} />
          </div>
          <div className={styles.card_content}>
            <h3>Defence Elvis</h3>
            <p>
              It allows creating networks of public spending on good services
              used in defense in 28 EU Countries
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.icon_div}
            style={{ backgroundColor: "#F3F6FF" }}
          >
            <MdOutlineStickyNote2
              className={styles.icon}
              style={{ color: "#7291FF" }}
            />
          </div>
          <div className={styles.card_content}>
            <h3>Defence Elvis</h3>
            <p>
              It allows creating networks of public spending on good services
              used in defense in 28 EU Countries
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.icon_div}
            style={{ backgroundColor: "#FAE6E0" }}
          >
            <MdDone className={styles.icon} style={{ color: "#FF5400" }} />
          </div>
          <div className={styles.card_content}>
            <h3>Defence Elvis</h3>
            <p>
              It allows creating networks of public spending on good services
              used in defense in 28 EU Countries
            </p>
            <a href="/" className={styles.btn}>
              Learn More <FaArrowRight className={styles.arrow_icon} />
            </a>
          </div>
        </div>
      </div>
      <button className={styles.button}>View All Resources</button>
    </div>
  );
};
