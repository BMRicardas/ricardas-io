import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactsList from "./components/Contacts/ContactsList";
import ExperienceList from "./components/Experience/ExperienceList";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HomePage>
      <AboutMe />
      <ExperienceList />
      <ContactsList />
      <Footer />
    </HomePage>
  );
}

export default App;
