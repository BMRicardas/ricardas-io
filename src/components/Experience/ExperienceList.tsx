import { FC } from 'react';
import Section from '../../ui/Section/Section';
import ExperienceItem from './ExperienceItem';
import logoSourcery from '../../assets/images/sourcery.png';
import logoRicardas from '../../assets/images/myLogo.png';
import classes from './ExperienceList.module.scss';

interface Experience {
  image: string;
  company: string;
  companyUrl: string;
  position: string;
  workingFrom: string;
  workingTo: string;
}

const experiences: Experience[] = [
  {
    image: logoRicardas,
    company: 'Ricardas.io',
    companyUrl: 'https://ricardas.io/',
    position: 'Freelance',
    workingFrom: '2021.07',
    workingTo: 'present',
  },
  {
    image: logoSourcery,
    company: 'Sourcery Academy by Devbridge',
    companyUrl: 'https://sourceryacademy.com/',
    position: 'Front-End Developer',
    workingFrom: '2021.10',
    workingTo: '2022.01',
  },
];

const ExperienceList: FC = () => {
  return (
    <div className={classes.experience}>
      <Section title="Experience">
        <ul className={classes['experience__list']}>
          {experiences.map((item, i) => {
            return (
              <ExperienceItem
                key={i}
                image={item.image}
                company={item.company}
                companyUrl={item.companyUrl}
                position={item.position}
                workingFrom={item.workingFrom}
                workingTo={item.workingTo}
              />
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default ExperienceList;
