import { height } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1 style={{ minHeight: "87vh", height: "auto" }}>
      Not Found Page <br />
      <Link to="/">Go home</Link>
    </h1>
  );
};

export default NotFound;
