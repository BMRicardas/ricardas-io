import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["text-box"]}>
        <h1 className={classes["heading-primary"]}>
          <span className={classes["heading-primary-sup"]}>Hello!</span>
          <span className={classes["heading-primary-main"]}>I'm Ričardas</span>
          <span className={classes["heading-primary-sub"]}>
            I'm a web developer
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
