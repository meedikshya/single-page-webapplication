import React from "react";
import "../styles/Mylogo.scss";

// Functional component for rendering a logo
const Mylogo = ({ logoSrc, altText }) => {
  return (
    <div className="mylogo">
      <img src={logoSrc} alt={altText} /> {/* Displaying the logo */}
    </div>
  );
};

export default Mylogo;
