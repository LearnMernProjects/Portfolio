import React from 'react';
import './index.css';
import Navbar from './section/Navbar.jsx'
import { FlipWord } from "./components/FlipWord.jsx";
import Hero from './section/Hero';
import { Astronaut } from './components/Astronaut.jsx';
import { Canvas } from '@react-three/fiber';
import Projects from './section/Projects.jsx';
import HeroText from "./components/HeroText.jsx";
import ParallaxBackground from "./components/ParallaxBackground.jsx";
import About from './section/About.jsx';
import Project from './components/Project.jsx';
import Contact from './section/Contact.jsx';
import Footer from './section/Footer.jsx';
const App = () => {
  return (
    <div className='relative min-h-screen'>
     
      
      <h1>Hello</h1>
      <Navbar />
      
      <ParallaxBackground />
      <HeroText />
      <About/>
      <Projects/>
      <Hero />
      <Contact/>
     <Footer/>
     
    </div>
  );
};

export default App;
