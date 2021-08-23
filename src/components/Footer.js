import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  return (
    <div
      sx={{
        width: "100%",
        height: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        color: "gray",
      }}
    >
      <p>
        Made with{" "}
        <img
          src="/gray.png"
          alt="Logo"
          height={10}
          width={10}
          sx={{ color: "gray", cursor: "pointer" }}
        />
      </p>
    </div>
  );
};

export default Footer;
