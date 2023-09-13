import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>Page not found...</span>
      <br /><br />
      <Link to={'/quote_machine'}>Ir a Quote Machine</Link>
    </div>
  );
};
