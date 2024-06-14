import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Hero.module.scss";

// Hero component definition
const Hero = ({ showSearchBar, onCloseSearch }) => {
  // State for cover removal animation
  const [coverRemoved, setCoverRemoved] = useState(false);

  // Handle button click to scroll to belowSection
  const handleButtonClick = () => {
    const belowSection = document.getElementById("belowSection");
    if (belowSection) {
      belowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Simulate cover removal after a delay on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setCoverRemoved(true);
    }, 5000); // Delay of 5 seconds

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.image_container} id="heroSection">
      {/* Cover div with fade-out animation */}
      <div
        className={`${styles.cover} ${coverRemoved ? styles.fadeOut : ""}`}
      ></div>

      {/* Image and overlay */}
      <div className={styles.image}></div>
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
      <div id="belowSection" style={{ backgroundColor: "white" }}>
        {/* Content for the section you want to scroll to */}
      </div>
    </div>
  );
};

export default Hero;
