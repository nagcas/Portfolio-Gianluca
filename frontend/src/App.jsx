import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Routes>
        <Route path="*" element={""} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
