import React from "react";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes["logo-box"]}>
      <p className={classes.logo}>R</p>
      <div>
        <p className={classes["text-main"]}>Ricardas.io</p>
        <p className={classes["text-sub"]}>Brazdžius</p>
      </div>
    </div>
  );
};

export default Logo;
