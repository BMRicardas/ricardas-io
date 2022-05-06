import { FC } from "react";
import classes from "./TechItem.module.scss";

interface Props {
  icon: string;
  tech: string;
}

const TechItem: FC<Props> = ({ icon, tech }) => {
  return (
    <li className={classes["tech-item"]}>
      <img src={icon} alt={tech} className={classes["tech-item__img"]} />
      <h6 className={classes["tech-item__label"]}>{tech}</h6>
    </li>
  );
};

export default TechItem;
