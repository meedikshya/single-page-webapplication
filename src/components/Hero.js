import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Hero.module.scss";
import image from "../Images/Hero123.jpg";

// Hero component definition
const Hero = ({ showSearchBar, onCloseSearch }) => {
  // Handle button click to scroll to belowSection
  const handleButtonClick = () => {
    const belowSection = document.getElementById("belowSection");
    if (belowSection) {
      belowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.image_container} id="heroSection">
      {/* Image and overlay */}
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${image})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          // height: "100vh",
        }}
      ></div>
      <div className={styles.image_overlay}></div>

      {/* Search bar */}
      {showSearchBar && (
        <div className={styles.search_bar}>
          <AiOutlineClose
            className={styles.close_icon}
            onClick={onCloseSearch}
          />
          <div className={styles.input_container}>
            <AiOutlineSearch className={styles.search_icon} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      )}

      {/* Text container */}
      <div className={styles.text_container}>
        <h1 className={styles.heading}>Beautiful analytics to grow smarter</h1>
        <p className={styles.paragraph}>
          Powerful, self-serve product and growth analytics to help you convert,
          engage and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Button to scroll to belowSection */}
        <button className={styles.button} onClick={handleButtonClick}>
          Why Catalog <FaArrowRight className={styles.arrow_icon} />
        </button>
      </div>

      {/* Placeholder section to scroll to */}
      <div id="belowSection" style={{ backgroundColor: "white" }}></div>
    </div>
  );
};

export default Hero;
