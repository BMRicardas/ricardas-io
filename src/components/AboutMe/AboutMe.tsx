import { FC } from "react";
import Section from "../../ui/Section/Section";
import TechList from "../Tech/TechList";
import classes from "./AboutMe.module.scss";

const AboutMe: FC = () => {
  return (
    <div className={classes["about-me"]}>
      <Section title="About Me">
        <div className={classes["about-me__main"]}>
          <div className={classes["about-me__main--col"]}>
            <p>
              Former professional poker player, currently working on a new
              career path. Seeking for an Entry Level/Junior Front-End Developer
              position in a reputed company where I can use my educational
              background to develop my skills.
            </p>
          </div>
          <div className={classes["about-me__main--col"]}>
            <h3 className={classes["about-me__heading-tertiary"]}>I use</h3>
            <TechList />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutMe;
