import React from 'react';
import './Skills.css';

const skills = [
  // Programming Languages & Web
  'C Programming',
  'Python',
  'JavaScript (JS)',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'React.js',

  // DevOps & Tools
  'Git & GitHub',
  'Docker',
  'Jenkins',
  'Kubernetes',
  'VS Code',
  'Ubuntu (Linux)',
  'Vercel',

  // Concepts & Platforms
  'DevOps Practices',
  'REST APIs',
  'Cloud Deployment',
  'Object-Oriented Programming (OOP)',
  'Artificial Intelligence (Intro)',
  'Prompt Engineering (ChatGPT)',
  'Computer Networks',

  // Soft Skills
  'Team Collaboration',
  'Problem Solving',
  'Fast Learning & Adaptability',
  'Creativity & Design Thinking',
  'Time Management',
];

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
