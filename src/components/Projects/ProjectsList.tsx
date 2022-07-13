import { FC } from "react";
import screenshotAutocomplete from "../../assets/images/autocomplete-screenshot.png";
import screenshotKeyboardEvents from "../../assets/images/keyboard-events-screenshot.png";
import screenshotMealPlannerApp from "../../assets/images/meal-planner-app-screenshot.png";
import Section from "../../ui/Section/Section";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectsList.module.scss";

interface Project {
  image: string;
  projectName: string;
  gitHub: string;
  demo: string;
}

const projects: Project[] = [
  {
    image: screenshotAutocomplete,
    projectName: "Autocomplete",
    gitHub: "https://github.com/BMRicardas/autocomplete",
    demo: "https://bmricardas.github.io/autocomplete/",
  },
  {
    image: screenshotMealPlannerApp,
    projectName: "Meal-planner-app",
    gitHub: "https://github.com/BMRicardas/meal-planner-app",
    demo: "https://bmricardas.github.io/meal-planner-app/",
  },
  {
    image: screenshotKeyboardEvents,
    projectName: "Keyboard-events",
    gitHub: "https://github.com/BMRicardas/keyboard-events",
    demo: "https://bmricardas.github.io/autocomplete/",
  },
];

const ProjectsList: FC = () => {
  return (
    <div className={classes.project}>
      <Section title="Projects">
        <ul className={classes["project__list"]}>
          {projects.map((project) => (
            <ProjectItem
              image={project.image}
              projectName={project.projectName}
              gitHub={project.gitHub}
              demo={project.demo}
            />
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default ProjectsList;
