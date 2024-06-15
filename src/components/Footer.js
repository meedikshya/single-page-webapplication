import React from "react";
import styles from "../styles/Footer.module.scss";
import { FaTwitter, FaLinkedin, FaYoutube, FaArrowUp } from "react-icons/fa";
import images from "../Images/Logomark.png";
import logo from "../Images/cc-logo.png";

import imageUrl from "../Images/footer2.jpg";

export const Footer = () => {
  const scrollToHeroSection = () => {
    const heroSection = document.getElementById("heroSection");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.footer_container}>
      <div
        className={styles.image_container}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={styles.image_overlay}></div>
        <div className={styles.containers}>
          <div className={styles.containerI}>
            <div className={styles.logo_heading}>
              <img src={images} alt="imageLogo" />
              <h2>Catalog</h2>
            </div>
            <p>
              We are a collaboration of non-government organizations and
              professionals working to ensure transparency in government
              spending.
            </p>
            <div className={styles.social_media}>
              <div className={styles.icon_container}>
                <FaTwitter className={styles.icon} />
              </div>
              <div className={styles.icon_container}>
                <FaLinkedin className={styles.icon} />
              </div>
              <div className={styles.icon_container}>
                <FaYoutube className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.containerII}>
            <div className={styles.footer_list}>
              <div className={styles.column}>
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href="/*">Campaigns</a>
                  </li>
                  <li>
                    <a href="/">Resources</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="/">Transparency Toolkit</a>
                  </li>
                  <li>
                    <a href="/">Evidence</a>
                  </li>
                  <li>
                    <a href="/">Best Practices</a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>Work with us</h3>
                <ul>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Join Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.small_div}>
        <div className={styles.terms}>
          <a href="/">Terms and Conditions</a>
        </div>
        <div className={styles.logo_arrow} onClick={scrollToHeroSection}>
          <img src={logo} alt="Logo" />
          <FaArrowUp className={styles.up_arrow} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
