import React, { FC } from "react";
import Section from "../../ui/Section/Section";
import classes from "./AboutMe.module.scss";

const technologies = [
  {
    tech: "HTML",
    icon: "",
  },
  {
    tech: "CSS",
    icon: "",
  },
  {
    tech: "JavaScript",
    icon: "",
  },
  {
    tech: "React",
    icon: "",
  },
  {
    tech: "Typescript",
    icon: "",
  },
  {
    tech: "SCSS",
    icon: "",
  },
  {
    tech: "Git",
    icon: "",
  },
];

const AboutMe: FC = () => {
  return (
    <Section title="About Me">
      <div className={classes["about-me__main"]}>
        <div className={classes["about-me__main--col-1"]}>
          <p>
            Former professional poker player, currently working on a new career
            path. Seeking for an Entry Level/Junior Front-End Developer position
            in a reputed company where I can use my educational background to
            develop my skills.
          </p>
        </div>
        <div className={classes["about-me__main--col-2"]}>
          <h3
            className={`${classes["heading-tertiary"]} ${classes["u-margin-bottom-sm"]} ${classes["u-center-text"]}`}
          >
            I know how to use
          </h3>
          <ul>
            {technologies.map((tech, i) => {
              return (
                <li key={i}>
                  <img src={tech.icon} alt={tech.tech} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
