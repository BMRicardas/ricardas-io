import { FC } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceList from "./components/Experience/ExperienceList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/index.scss";

const App: FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <ExperienceList />
      <Footer />
    </>
  );
};

export default App;
