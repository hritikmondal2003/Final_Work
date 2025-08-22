import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">Hritik Mondal</h1>
        <h2 className="hero-subtitle">Web Developer & DevOps Learner</h2>
        <p className="hero-description">
          I’m an aspiring developer passionate about building web applications and exploring modern tools and technologies. I enjoy turning ideas into reality with clean, functional code and continuously learning how to improve development workflows through automation, cloud, and productivity tools.
        </p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn-primary"
        >
          View My Projects
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="/images/1748584738494.jpeg"
          alt="Hritik Mondal"
          className="floating hero-profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;
