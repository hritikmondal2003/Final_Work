import React from 'react';
import './Skills.css';

const skills = [
  // Tools & Platforms
  'n8n',
  'Notion',
  'Docker',
  'Linux (Ubuntu)',
  'GitHub',
  'VS Code',
  'Git Bash',
  'Discord',
  'MS Word',
  'MS Excel',
  'MS PowerPoint',
  'Canva',
  'Vercel',
  'Render',

  // Concepts
  'Prompt Engineering (ChatGPT)',
  'Fast Learning & Adaptability',

  // Achievements
  'LeetCode Rank: 6,50,913',
  'GitHub Contributions: 100+',
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