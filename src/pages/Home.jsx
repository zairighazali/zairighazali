import { useState } from 'react';
import '../App.css';
import profile from '../assets/profile.PNG';
import lokaljobVideo from '../assets/lokaljob.mov';
import harimauVideo from '../assets/HM.mov';
import portfolioVideo from '../assets/404.mov';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const skills = [
    { name: 'React', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'Firebase', level: 3 },
    { name: 'Docker', level: 2 }
  ];

  const projects = [
    {
      title: 'LokalJOB',
      description: 'Full-stack freelancer marketplace with payment integration',
      tech: ['React', 'Node.js', 'Firebase'],
      videoUrl: lokaljobVideo
    },
    {
      title: 'Harimau Malaya',
      description: 'Malaysia National Football Team fan site',
      tech: ['Next.js', 'Firebase', 'Tailwind'],
      videoUrl: harimauVideo
    },
    {
      title: '404Found.studio',
      description: 'Designed and developed a clean, responsive landing page using modern frontend practices',
      tech: ['React', 'Next.js', 'Tailwind'],
      videoUrl: portfolioVideo
    }
  ];

  const experiences = [
    {
      role: 'Software Developer / Technical Support',
      company: 'Self Employed',
      period: '2016 - Present',
      responsibilities: [
        'Provided long term freelance Linux system administration support, configuring, maintaining and troubleshooting servers to ensure stable and reliable development and testing environments',
        'Managed AWS resources (EC2, S3, IAM) for deployment, access control, and monitoring',
        'Supported debugging, optimization, and execution of applications and workloads, applying strong problem-solving skills across Linux, Python scripting, and system-level tooling'
      ]
    },
    {
      role: 'Technical Support / Data Research Assistant ',
      company: 'Self Employed',
      period: '2021 - 2025',
      responsibilities: [
        'Provided Linux-based technical support and reproducible research environments for University of Malaya and CERN student projects',
        'Assisted PhD researchers with Python scripting and data processing workflows',
        'Managed Linux environments using command-line tools and reproducible setups'
      ]
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="resume-container">
      <div className="header">
        <h1 className="name-title">Zairi Ghazali</h1>
        <p className="tagline">Creative Developer & Problem Solver</p>
      </div>

      <div className="picture">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>

      <nav className="nav-buttons">
        <button className="nav-btn" onClick={() => openModal('about')}>
          {/* <span className="btn-icon">👤</span> */}
          <span>About Me</span>
        </button>
        <button className="nav-btn" onClick={() => openModal('skills')}>
          {/* <span className="btn-icon">⚡</span> */}
          <span>Skills</span>
        </button>
        <button className="nav-btn" onClick={() => openModal('projects')}>
          {/* <span className="btn-icon">🚀</span> */}
          <span>Projects</span>
        </button>
        <button className="nav-btn" onClick={() => openModal('experience')}>
          {/* <span className="btn-icon">💼</span> */}
          <span>Experience</span>
        </button>
        <button className="nav-btn" onClick={() => openModal('contact')}>
          {/* <span className="btn-icon">📧</span> */}
          <span>Contact</span>
        </button>
      </nav>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>

            {activeModal === 'about' && (
              <div className="modal-inner">
                <h2 className="modal-title">About Me</h2>
                <div className="about-content">
                  <p>
                    Hello! I'm Zairi Ghazali, a passionate developer with a love for creating
                    beautiful and functional web experiences. With expertise in modern web
                    technologies, I bring ideas to life through clean code and thoughtful design.
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with the latest industry
                    trends. When I'm not coding, you'll find me exploring new technologies,
                    contributing to open-source projects, or sharing knowledge with the developer
                    community.
                  </p>
                  <div className="highlights">
                    <div className="highlight-item">
                      <h3>5+</h3>
                      <p>Years Experience</p>
                    </div>
                    <div className="highlight-item">
                      <h3>50+</h3>
                      <p>Projects Completed</p>
                    </div>
                    <div className="highlight-item">
                      <h3>100%</h3>
                      <p>Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'skills' && (
              <div className="modal-inner">
                <h2 className="modal-title">Technical Skills</h2>
                <div className="skills-content">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`dot ${i < skill.level ? 'filled' : 'empty'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="other-skills">
                  <h3>Other Technologies</h3>
                  <div className="skill-tags">
                    <span className="tag">Linux</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">SQL</span>
                    <span className="tag">Git</span>
                    <span className="tag">REST APIs</span>
                    <span className="tag">AWS</span>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'projects' && (
              <div className="modal-inner">
                <h2 className="modal-title">Featured Projects</h2>
                <div className="carousel-container">
                  <button className="carousel-btn prev" onClick={prevProject}>‹</button>
                  
                  <div className="project-card">
                    <div className="video-container">
                      <video
                        key={currentProjectIndex}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="project-video"
                      >
                        <source src={projects[currentProjectIndex].videoUrl} type="video/mp4" />
                      </video>
                    </div>
                    <div className="project-info">
                      <h3>{projects[currentProjectIndex].title}</h3>
                      <p>{projects[currentProjectIndex].description}</p>
                      <div className="tech-stack">
                        {projects[currentProjectIndex].tech.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="carousel-btn next" onClick={nextProject}>›</button>
                </div>
                <div className="carousel-indicators">
                  {projects.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                      onClick={() => setCurrentProjectIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeModal === 'experience' && (
              <div className="modal-inner">
                <h2 className="modal-title">Work Experience</h2>
                <div className="experience-content">
                  {experiences.map((exp, index) => (
                    <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.15}s` }}>
                      <div className="exp-header">
                        <h3>{exp.role}</h3>
                        <span className="exp-period">{exp.period}</span>
                      </div>
                      <p className="exp-company">{exp.company}</p>
                      <ul className="exp-responsibilities">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="modal-inner">
                <h2 className="modal-title">Let's Connect</h2>
                <div className="contact-content">
                  <p className="contact-intro">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                  <div className="contact-icons">
                    <a
                      href="mailto:mohdzairighazali@yahoo.com"
                      className="contact-icon email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zairi-ghazali-5774901aa/"
                      className="contact-icon linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <footer className="footer">
        <span>Powered by </span>
        <a
          href="https://www.404found.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          404Found.Studio
        </a>
      </footer>

    </div>
  );
}