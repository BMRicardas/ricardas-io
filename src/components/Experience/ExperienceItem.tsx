import React, { FC } from "react";
import Card from "../../ui/Card/Card";
import classes from "./ExperienceItem.module.css";

interface Props {
  image: string;
  company: string;
  companyUrl: string;
  position: string;
  workingFrom: string;
  workingTo: string;
}

const ExperienceItem: FC<Props> = ({
  image,
  company,
  companyUrl,
  position,
  workingFrom,
  workingTo,
}) => {
  const workingDuration = (a: string, b: string) => {
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

    return +difference;
  };

  const isMonthPlural = () => {
    const duration = workingDuration(workingFrom, workingTo);
    if (duration <= 0) {
      return "0 months";
    } else if (duration === 1) {
      return "1 month";
    } else {
      return `${duration} months`;
    }
  };

  return (
    <a href={companyUrl} target="_blank" rel="noopener noreferrer">
      <Card>
        <li className={classes.item}>
          <img src={image} alt={company} className={classes.image} />
          <div>
            <h3>{position}</h3>
            <hr />
            <p>
              {workingFrom} - {workingTo}
            </p>
            {/* <p>{`${workingDuration(workingFrom, workingTo)} months`}</p> */}
            <p>{isMonthPlural()}</p>
          </div>
        </li>
      </Card>
    </a>
  );
};

export default ExperienceItem;
