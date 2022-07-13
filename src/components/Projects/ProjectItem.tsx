import { FC } from 'react';
import classes from './ProjectItem.module.scss';

interface Props {
  image: string;
  projectName: string;
  gitHub: string;
  demo: string;
}

const ProjectItem: FC<Props> = ({ image, projectName, gitHub, demo }) => {
  return (
    <li className={`${classes['project-item']} ${classes.btn}`}>
      <img
        src={image}
        alt={projectName}
        className={classes['project-item__image']}
      />
      <div className={classes['project-item__main']}>
        <h3 className={classes['project-item__tertiary--main']}>
          {projectName}
        </h3>

        <div className={classes['project-item__links']}>
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className={classes['project-item__link']}
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes['project-item__link']}
          >
            Live Demo
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
