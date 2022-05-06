import { FC, ReactNode } from "react";
import classes from "./Section.module.scss";

interface Props {
  children: ReactNode;
  title: string;
}

const Section: FC<Props> = ({ children, title }) => {
  return (
    <section className={classes.section}>
      <h2 className={classes["section__title"]}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
