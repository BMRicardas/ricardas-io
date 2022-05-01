import React from "react";
import classes from "./Section.module.scss";

const Section = ({ children, title }) => {
  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
