import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates'; // ✅ Moved below
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import './styles/Custom.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates /> {/* ✅ Now placed after Projects */}
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default App;
