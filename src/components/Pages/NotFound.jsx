import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1 style={{ minHeight: "87vh", height: "auto", textAlign: "center" }}>
      Not Found Page <br />
      <Link to="/front-website">Go home</Link>
    </h1>
  );
};

export default NotFound;
