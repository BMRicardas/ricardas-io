import React from "react";
import classes from "./Section.module.scss";

const Section = ({ children }) => {
  return <section className={classes["section"]}>{children}</section>;
};

export default Section;
