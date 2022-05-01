import React, { FC } from "react";
import Section from "../../ui/Section/Section";
import ExperienceItem from "./ExperienceItem";
import classes from "./ExperienceList.module.scss";

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
    image:
      "https://i.pinimg.com/originals/88/68/df/8868df3962c30e0ba8c14760fa664af8.jpg",
    company: "Ričardas",
    companyUrl: "https://ricardas.io/",
    position: "Freelance",
    workingFrom: "2021.07",
    workingTo: "present",
  },
  {
    image:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kpdztxfchaiqsmiro3kx",
    company: "Devbridge",
    companyUrl: "https://www.devbridge.com/",
    position: "Frontend Developer",
    workingFrom: "2021.10",
    workingTo: "2022.01",
  },
];

const ExperienceList: FC = () => {
  return (
    <Section title="Experience? Here you go!">
      <ul className={classes["experience-list"]}>
        {/* <p>{`MONTH${lastDigitIsOne ? "" : "s"}`}</p> */}
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
  );
};

export default ExperienceList;
