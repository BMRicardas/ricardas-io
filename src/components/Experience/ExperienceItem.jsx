import React from "react";
import Card from "../../ui/Card/Card";
import classes from "./ExperienceItem.module.css";

const ExperienceItem = ({
  image,
  company,
  companyUrl,
  position,
  workingFrom,
  workingTo,
  onClickHandler,
}) => {
  const workingDuration = (a, b) => {
    const from = new Date(a);
    let to;
    if (b === "present") {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      to = new Date(`${year}.${month >= 10 ? month : `0${month}`}`);
    } else {
      to = new Date(b);
    }
    const difference =
      to.getMonth() -
      from.getMonth() +
      12 * (to.getFullYear() - from.getFullYear());

    return difference;
  };

  return (
    <Card onClickHandler={onClickHandler}>
      <li className={classes.item}>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={company} className={classes.image} />
        </a>
        <div>
          <h3>{position}</h3>
          <hr />
          <p>
            {workingFrom} - {workingTo}
          </p>
          <p>{workingDuration(workingFrom, workingTo)} months</p>
        </div>
      </li>
    </Card>
  );
};

export default ExperienceItem;
