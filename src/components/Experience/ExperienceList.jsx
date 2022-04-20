import React from "react";
import ExperienceItem from "./ExperienceItem";
import classes from "./ExperienceList.module.css";

const DUMMY_EXP = [
  {
    id: Math.random().toString(),
    image:
      "https://i.pinimg.com/originals/88/68/df/8868df3962c30e0ba8c14760fa664af8.jpg",
    company: "Ričardas",
    companyUrl: "https://ricardas.io/",
    position: "Freelance",
    workingFrom: "2021.07",
    workingTo: "present",
  },
  {
    id: Math.random().toString(),
    image:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kpdztxfchaiqsmiro3kx",
    company: "Devbridge",
    companyUrl: "https://www.devbridge.com/",
    position: "Frontend Developer",
    workingFrom: "2021.10",
    workingTo: "2022.01",
  },
  {
    id: Math.random().toString(),
    image:
      "https://resources.mynewsdesk.com/image/upload/b_auto,c_pad,h_628,q_auto:good,w_1200/syd5e1nftde8plfo3ymy.jpg",
    company: "Visma",
    companyUrl: "https://www.visma.lt/",
    position: "Fullstack Developer",
    workingFrom: "2022.01",
    workingTo: "present",
  },
];

const ExperienceList = () => {
  const clickHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Experience? Here you go!</h2>
      <ul className={classes["experience-list"]}>
        {DUMMY_EXP.map((item) => {
          return (
            <ExperienceItem
              key={item.id}
              image={item.image}
              company={item.company}
              companyUrl={item.companyUrl}
              position={item.position}
              workingFrom={item.workingFrom}
              workingTo={item.workingTo}
              onClickHandler={() => clickHandler(item.companyUrl)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceList;
