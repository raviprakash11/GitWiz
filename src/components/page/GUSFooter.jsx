import React from "react";
import { FOOTER_TEXT, FOOTER_SUB_TEXT } from "../GUSUtility";
import "./../GUSStyle.css";

const GUSFooter = function () {
  return (
    <footer className="footer-area">
      <center>
        <p>
          <span className="footer-text">{FOOTER_TEXT}</span>
          <br />
          <span className="footer-subtext">{FOOTER_SUB_TEXT}</span>
        </p>
      </center>
    </footer>
  );
};

export default GUSFooter;
