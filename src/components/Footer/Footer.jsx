import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <div className={classes.footer}>
      © <a href="http://ricardas.io">Ricardas.io</a> {currentYear}. All Rights
      Reserved.
    </div>
  );
};

export default Footer;
