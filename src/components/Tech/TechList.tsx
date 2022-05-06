import { FC } from "react";
import TechItem from "./TechItem";
import classes from "./TechList.module.scss";
import imgHtml from "../../assets/images/html-5.png";
import imgCss from "../../assets/images/css-3.png";
import imgJs from "../../assets/images/js.png";
import imgReact from "../../assets/images/react.png";
import imgTs from "../../assets/images/typescript.png";
import imgSass from "../../assets/images/sass.png";
import imgGit from "../../assets/images/git.png";
import imgFigma from "../../assets/images/figma.png";
import imgJira from "../../assets/images/jira.png";

interface Technology {
  tech: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    tech: "HTML",
    icon: imgHtml,
  },
  {
    tech: "CSS",
    icon: imgCss,
  },
  {
    tech: "JavaScript",
    icon: imgJs,
  },
  {
    tech: "React",
    icon: imgReact,
  },
  {
    tech: "Typescript",
    icon: imgTs,
  },
  {
    tech: "SASS",
    icon: imgSass,
  },
  {
    tech: "Jira",
    icon: imgJira,
  },
  {
    tech: "Git",
    icon: imgGit,
  },
  {
    tech: "Figma",
    icon: imgFigma,
  },
];

const TechList: FC = () => {
  return (
    <ul className={classes["tech-list"]}>
      {technologies.map((tech, i) => {
        return <TechItem key={i} icon={tech.icon} tech={tech.tech} />;
      })}
    </ul>
  );
};

export default TechList;
