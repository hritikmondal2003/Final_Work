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
          I'm a passionate learner currently focused on both <strong>Web Development</strong> and <strong>DevOps</strong>. I love building responsive websites and exploring how automation, cloud tools, and deployment pipelines work behind the scenes.
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
