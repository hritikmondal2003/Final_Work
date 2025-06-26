import React, { useState } from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'Programming in C',
    issuer: 'University of Michigan (Coursera)',
    link: 'https://coursera.org/verify/MJLFPKF94QF6',
  },
  {
    title: 'Programming in Python',
    issuer: 'Meta (Coursera)',
    link: 'https://coursera.org/verify/D2SYB2I2NOCT',
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM (Coursera)',
    link: 'https://coursera.org/verify/0DVZ2IXWOTXE',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM (Coursera)',
    link: 'https://coursera.org/verify/USEP793KFN0Z',
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google (Coursera)',
    link: 'https://coursera.org/verify/ZT0HI0A1R8ME',
  },
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google (Coursera)',
    link: 'https://coursera.org/verify/K386UJA46YPM',
  },
  {
    title: 'Project Planning: Putting It All Together',
    issuer: 'Google (Coursera)',
    link: 'https://coursera.org/verify/A4NGGAF6XUF6',
  },
  {
    title: 'Project Execution: Running the Project',
    issuer: 'Google (Coursera)',
    link: 'https://coursera.org/verify/S55301LR75E1',
  },
  {
    title: 'Prepare for AZ-204: Developing Solutions for Microsoft Azure',
    issuer: 'Microsoft (Coursera)',
    link: 'https://coursera.org/verify/BS85XV7GFHU5',
  },
  {
    title: 'Foundations of DevOps and Git',
    issuer: 'Packt (Coursera)',
    link: 'https://coursera.org/verify/FGTWHRA0RKFI',
  },
  {
    title: 'Advanced Git and GitHub Practices',
    issuer: 'Packt (Coursera)',
    link: 'https://coursera.org/verify/V1Z7ZRH1H9UD',
  },
  {
    title: 'Build Automation and Continuous Integration',
    issuer: 'Packt (Coursera)',
    link: 'https://coursera.org/verify/QP74FMPF47CC',
  },
  {
    title: 'Advanced DevOps Tools and Practices',
    issuer: 'Packt (Coursera)',
    link: 'https://coursera.org/verify/06O8JFA4ARXJ',
  },
  {
    title: 'Docker Basics for DevOps',
    issuer: 'KodeKloud (Coursera)',
    link: 'https://coursera.org/verify/V5AI4F29ZFTN',
  },
  {
    title: 'DevOps Complete Specialization',
    issuer: 'Coursera',
    link: 'https://coursera.org/verify/specialization/WJI7KAYQ7YDN',
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="certificates container section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-list">
        {visibleCertificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
      <div className="show-toggle">
        <button className="btn-primary" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  );
};

export default Certificates;
