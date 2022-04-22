import React from "react";
import Card from "../../ui/Card/Card";
// import classes from "./ProjectsItem.module.css";

const ProjectsItem = () => {
  return (
    <Card>
      <div>
        <img
          src="https://getuikit.com/v2/docs/images/placeholder_600x400_2.svg"
          alt="Sample"
        />
        <p></p>
      </div>
      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </Card>
  );
};

export default ProjectsItem;
