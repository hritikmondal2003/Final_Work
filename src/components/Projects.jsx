import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'College Final Year Project',
    description:
      'A low-cost IoT-based real-time Air Quality & Environmental Monitoring System using ESP32. Integrated with MQ135, MQ2, MQ7, PMS5003, and DHT11 sensors for CO, CO₂, VOCs, smoke, particulate matter, temperature & humidity tracking. Features GPS for moving vehicles, Wi-Fi connectivity for live dashboards, optional cloud storage, and alerts for unsafe air quality.',
    tags: ['IoT', 'ESP32', 'Arduino', 'NodeMCU', 'Sensors', 'Cloud', 'SmartCities', 'AirQuality'],
    githubLink: 'https://github.com/hritikmondal2003',
    liveDemo: [
  {
    name: 'Demo 1: Arduino + IoT + Embedded Systems',
    url: 'https://www.linkedin.com/posts/tushar-shaw-072b79262_arduino-iot-embeddedsystems-activity-7342814174256746497-qcpC'
  },
  {
    name: 'Demo 2: ESP32 Air Quality Project',
    url: 'https://www.linkedin.com/posts/tushar-shaw-072b79262_iot-esp32-airquality-activity-7364531447283531776-DqKX'
  },
  {
    name: 'Demo 3: Veroboard (Ready & Soldered)',
    url: 'https://www.linkedin.com/posts/tushar-shaw-072b79262_veroboard-with-header-pin-ready-and-soldered-activity-7364531379168018433--RQp'
  }
],
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my projects and skills. Built with React and deployed on Vercel.',
    tags: ['React', 'JavaScript', 'CSS', 'Vercel'],
    githubLink: 'https://github.com/hritikmondal2003/portfolio.git',
    liveDemo: [
      { name: '🌐 Live Demo 1', url: 'https://portfolio-flame-seven-30.vercel.app/' },
      { name: '🌐 Live Demo 2', url: 'https://portfolio-preview.vercel.app/' }
    ],
  },
  {
    title: 'AI-Powered Bhagavatam Chatbot',
    description:
      'An AI chatbot that simplifies Śrīmad-Bhāgavatam verses using NLP and Srila Prabhupada’s purports. Integrated with Vedabase.io for dynamic scriptural interpretation.',
    tags: ['Python', 'NLP', 'REST API', 'Vedabase.io'],
    githubLink:
      'https://github.com/Nehaadak/geeta-verse-explainer/tree/main/Desktop/Projects/ai%20web%20interface',
    liveDemo: [
      { name: '🤖 Try Chatbot', url: 'https://geeta-verse-explainer.vercel.app/' }
    ],
  },
  {
    title: 'OIBSIP Temperature Converter',
    description:
      'A simple and interactive temperature converter application that converts values between Celsius, Fahrenheit, and Kelvin.',
    tags: ['HTML', 'CSS', 'JavaScript', 'OIBSIP'],
    githubLink: 'https://github.com/hritikmondal2003/OIBSIP-TEMPERATURE-CONVERTER',
    liveDemo: [
      { name: '🌡️ Temperature Converter Demo', url: 'https://oibsip-temperature-converter.vercel.app/' }
    ],
  },
  {
    title: 'OIBSIP Landing Page',
    description:
      'A stylish and responsive landing page built as part of OIBSIP internship. Designed to capture user attention and provide clean layout for content.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page'],
    githubLink: 'https://github.com/hritikmondal2003/OIBSIP-LANDING-Page',
    liveDemo: [
      { name: '📄 Landing Page Demo', url: 'https://oibsip-landing-page-beta.vercel.app/' }
    ],
  },
  {
    title: 'Blockbuster Deals on Computer Accessories',
    description:
      'A visually engaging landing page highlighting limited-time deals on computer accessories. Designed for responsiveness and e-commerce marketing.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubLink:
      'https://github.com/hritikmondal2003/Blockbuster-Deals-on-Computer-Accessories',
    liveDemo: [],
  }
];

// Pinned project
const pinnedProject = {
  title: 'Happy New Year 2024 Web Greeting',
  description:
    'A fun and interactive Happy New Year 2024 greeting web page designed with animated effects and a festive UI experience.',
  tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
  githubLink: 'https://github.com/hritikmondal2003/Happynewyear2024-',
  liveDemo: [
    { name: '🎉 Greeting Demo', url: 'https://newyear2024.vercel.app/' }
  ],
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

          {Array.isArray(project.liveDemo) &&
            project.liveDemo.map((demo, index) => (
              <a
                key={index}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {demo.name}
              </a>
            ))}
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