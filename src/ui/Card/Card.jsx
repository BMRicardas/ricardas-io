import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, onClickHandler }) => {
  return (
    <div className={classes.card} onClick={onClickHandler}>
      {children}
    </div>
  );
};

export default Card;
