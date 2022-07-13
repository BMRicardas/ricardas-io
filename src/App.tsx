import { FC } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import ExperienceList from './components/Experience/ExperienceList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectsList from './components/Projects/ProjectsList';
import './styles/index.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <ProjectsList />
      <ExperienceList />
      <Footer />
    </>
  );
};

export default App;
