import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.module.scss";

export const Error404 = () => {
  return (
    <div className="error-container" id="errorPage">
      <h1>404</h1>
      <p>Oops! The page you're looking for could not be found.</p>
      <Link to="/" className="button">
        Go back to homepage
      </Link>
    </div>
  );
};

export default Error404;
