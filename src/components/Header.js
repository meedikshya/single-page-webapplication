import React, { useState, useEffect } from "react";
import { BiMenuAltRight, BiChevronDown } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineSearch } from "react-icons/ai";
import { FiBookOpen, FiUsers, FiVideo } from "react-icons/fi";
import styles from "../styles/Header.module.scss";
import ImageLogo from "../Images/Logomark.png";

const Header = ({ onSearchIconClick }) => {
  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const handleScrollToAboutUs = (e) => {
    e.preventDefault();
    const aboutUsSection = document.getElementById("AboutUS");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggles the menu state
  const menuToggler = () => setMenuOpen((prevState) => !prevState);

  // Toggles the resources dropdown
  const toggleResourcesDropdown = () =>
    setResourcesDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    // Checks screen size and scroll position
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setPastHero(heroBottom < 0);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.cf_header} ${scrolled ? styles.scrolled : ""} ${
        pastHero ? styles.pastHero : ""
      }`}
    >
      <div className={styles.cf_header__content}>
        <div className={styles.cf_logo_container}>
          <img
            src={ImageLogo}
            alt="logoImage"
            className={styles.cf_logo_image}
          />
          <span className={styles.cf_logo}>Catalog</span>
        </div>
        <nav
          className={`${styles.cf_nav} ${
            menuOpen ? styles[`cf_nav--open`] : ""
          } ${isSmallScreen ? styles[`cf_nav--vertical`] : ""}`}
        >
          <a className={styles.cf_nav__item} href={"/intern-task"}>
            Home
          </a>
          <a
            onClick={handleScrollToAboutUs}
            href="/"
            className={styles.navbar_link}
          >
            About Us
          </a>
          <a className={styles.cf_nav__item} href={"/intern-task"}>
            Case Studies
          </a>
          <div
            className={styles.cf_nav__item}
            onClick={toggleResourcesDropdown}
          >
            Resources
            <BiChevronDown
              className={`${styles.dropdown_icon} ${styles.icon}`}
            />
            {resourcesDropdownOpen && (
              <div className={styles.resources_dropdown}>
                <a href={"/"}>
                  <FiBookOpen className={styles.resources_icon} />
                  <span className={styles.dropdown_title}>Blog</span>
                </a>
                <p className={styles.dropdown_paragraph}>
                  The latest industry news, updates, and info
                </p>

                <a href={"/"}>
                  <FiUsers className={styles.resources_icon} />
                  <span className={styles.dropdown_title}>
                    Customer Stories
                  </span>
                </a>
                <p className={styles.dropdown_paragraph}>
                  Learn how our customers are making big changes
                </p>

                <a href={"/"}>
                  <FiVideo className={styles.resources_icon} />
                  <span className={styles.dropdown_title}>Video Tutorials</span>
                </a>
                <p className={styles.dropdown_paragraph}>
                  Get up and running on new features and techniques
                </p>
              </div>
            )}
          </div>
        </nav>
        <div className={styles.cf_actions}>
          <Button onSearchIconClick={onSearchIconClick} />
          <button className={styles.cf_header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = ({ onSearchIconClick }) => {
  return (
    <button
      className={`${styles.cf_button} ${styles.search_button}`}
      onClick={onSearchIconClick}
    >
      <AiOutlineSearch />
    </button>
  );
};

export default Header;
