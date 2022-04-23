import React, { FC } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceList from "./components/Experience/ExperienceList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectsList from "./components/Projects/ProjectsList";
import WarmUpProjectsList from "./components/Projects/WarmUpProjectsList";

const App: FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <ExperienceList />
      <WarmUpProjectsList />
      <ProjectsList />
      <Footer />
    </>
  );
};

export default App;
