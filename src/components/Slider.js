import React, { useRef } from "react";
import MyLogo from "./Mylogo.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../styles/Slider.scss";
import logo1 from "../Images/logo1.png"; // Import your logo images
import logo2 from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
import logo4 from "../Images/logo4.png";
import logo5 from "../Images/logo5.png";
import logo6 from "../Images/logo1.png";
import logo7 from "../Images/logo2.png";

export const Slider = () => {
  const boxRef = useRef(null); // Reference to the scrolling container

  // Function to scroll left by the width of one logo
  const btnpressprev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth / 5; // Calculate width of one logo
      boxRef.current.scrollLeft -= width; // Scroll left
    }
  };

  // Function to scroll right by the width of one logo
  const btnpressnext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth / 5; // Calculate width of one logo
      boxRef.current.scrollLeft += width; // Scroll right
    }
  };

  return (
    <div className="product-carousel">
      {/* Previous button */}
      <button className="pre-btn" onClick={btnpressprev}>
        <p>
          <MdChevronLeft /> {/* Left arrow icon */}
        </p>
      </button>
      {/* Next button */}
      <button className="next-btn" onClick={btnpressnext}>
        <p>
          {" "}
          <MdChevronRight /> {/* Right arrow icon */}
        </p>
      </button>

      <div className="product-container" ref={boxRef}>
        {/* Render logos dynamically */}
        <MyLogo logoSrc={logo1} altText="Logo 1" />
        <MyLogo logoSrc={logo2} altText="Logo 2" />
        <MyLogo logoSrc={logo3} altText="Logo 3" />
        <MyLogo logoSrc={logo4} altText="Logo 4" />
        <MyLogo logoSrc={logo5} altText="Logo 5" />
        <MyLogo logoSrc={logo6} altText="Logo 6" />
        <MyLogo logoSrc={logo7} altText="Logo 7" />
      </div>
    </div>
  );
};

export default Slider;
