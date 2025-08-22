import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about container section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        {/* Tagline added below the title */}
        <p className="tagline">
          <em>𝘛𝘳𝘺𝘪𝘯𝘨 𝘵𝘰 𝘥𝘰 𝘣𝘦𝘵𝘵𝘦𝘳..</em>
        </p>

        <p>
          I’m passionate about Web Development and continuously expanding my toolkit with automation, productivity tools, and creative platforms to bring ideas to life more effectively.
        </p>
        <p>
          I've worked with tools like <strong>Git</strong>, <strong>Docker</strong>, and <strong>Linux</strong>, and I'm actively learning <strong>n8n</strong>, <strong>Notion</strong>, and cloud platforms. On the web side, I enjoy creating clean, interactive interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>.
        </p>
        <p>
          Whether it's building something useful from scratch or contributing to a team project, I bring curiosity, problem-solving skills, and a strong desire to grow in real-world tech environments.
        </p>
      </div>
    </section>
  );
};

export default About;
