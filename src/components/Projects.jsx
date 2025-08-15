import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'College Final Year Project',
    description:
      'An IoT-based real-time air quality monitoring system integrated with GPS for moving vehicles. Built using MQ135 & PMS5003 sensors, Arduino/NodeMCU, with optional cloud storage and alerts for unsafe air quality.',
    tags: ['IoT', 'Arduino', 'NodeMCU', 'Sensors', 'Cloud'],
    githubLink: 'https://github.com/hritikmondal2003',
    liveDemo:
      'https://www.linkedin.com/posts/er-tushar-shaw-072b79262_arduino-iot-embeddedsystems-activity-7342814174256746497-kT58?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIW8V4BfsiwVLydlKv1YAkeKZJ6Hn4guTU',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my DevOps projects and skills. Built with React and deployed on Vercel.',
    tags: ['React', 'JavaScript', 'CSS', 'Vercel'],
    githubLink: 'https://github.com/hritikmondal2003/portfolio.git',
    liveDemo: [
      { name: 'Live Demo 1', url: 'https://portfolio-flame-seven-30.vercel.app/' },
      { name: 'Live Demo 2', url: 'https://portfolio-preview.vercel.app/' }
    ],
  },
  {
    title: 'AI-Powered Bhagavatam Chatbot',
    description:
      'An AI chatbot that simplifies Śrīmad-Bhāgavatam verses using NLP and Srila Prabhupada’s purports. Integrated with Vedabase.io for dynamic scriptural interpretation.',
    tags: ['Python', 'NLP', 'REST API', 'Vedabase.io'],
    githubLink:
      'https://github.com/Nehaadak/geeta-verse-explainer/tree/main/Desktop/Projects/ai%20web%20interface',
    liveDemo: 'https://geeta-verse-explainer.vercel.app/',
  },
  {
    title: 'OIBSIP Temperature Converter',
    description:
      'A simple and interactive temperature converter application that converts values between Celsius, Fahrenheit, and Kelvin.',
    tags: ['HTML', 'CSS', 'JavaScript', 'OIBSIP'],
    githubLink: 'https://github.com/hritikmondal2003/OIBSIP-TEMPERATURE-CONVERTER',
    liveDemo: 'https://oibsip-temperature-converter.vercel.app/',
  },
  {
    title: 'OIBSIP Landing Page',
    description:
      'A stylish and responsive landing page built as part of OIBSIP internship. Designed to capture user attention and provide clean layout for content.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page'],
    githubLink: 'https://github.com/hritikmondal2003/OIBSIP-LANDING-Page',
    liveDemo: 'https://oibsip-landing-page-beta.vercel.app/',
  },
  {
    title: 'Blockbuster Deals on Computer Accessories',
    description:
      'A visually engaging landing page highlighting limited-time deals on computer accessories. Designed for responsiveness and e-commerce marketing.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubLink:
      'https://github.com/hritikmondal2003/Blockbuster-Deals-on-Computer-Accessories',
    liveDemo: '',
  }
];

// Pinned project
const pinnedProject = {
  title: 'Happy New Year 2024 Web Greeting',
  description:
    'A fun and interactive Happy New Year 2024 greeting web page designed with animated effects and a festive UI experience.',
  tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
  githubLink: 'https://github.com/hritikmondal2003/Happynewyear2024-',
  liveDemo: 'https://newyear2024.vercel.app/',
};

const ProjectCard = ({ project, pinned }) => {
  return (
    <div className={`project-card ${pinned ? 'pinned-project' : ''}`}>
      <div className="project-content">
        {pinned && <span className="pinned-badge">📌 Pinned</span>}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
          )}

          {Array.isArray(project.liveDemo)
            ? project.liveDemo.map((demo, index) => (
                <a
                  key={index}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {demo.name}
                </a>
              ))
            : project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
              )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <h2 className="section-title">My Projects</h2>

      {/* Pinned Project */}
      <ProjectCard project={pinnedProject} pinned />

      {/* All other projects */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
