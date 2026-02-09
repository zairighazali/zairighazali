import { useState } from "react";
import "../App.css";
import profile from "../assets/profile.PNG";
import profile2 from "../assets/profile2.JPG";
import lokaljobVideo from "../assets/lokaljob.mov";
import harimauVideo from "../assets/HM.mov";
import portfolioVideo from "../assets/404.mov";
import profilevideo from "../assets/profile.mp4";
import jclalbum from "../assets/jclalbum.jpeg";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false); // false = IT, true = Music

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // IT Resume Data
  const itData = {
    name: "Zairi Ghazali",
    tagline: "Creative Developer & Problem Solver",
    profileImage: profile,
    skills: [
      { name: "React", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Firebase", level: 3 },
      { name: "Docker", level: 2 },
    ],
    otherSkills: ["Linux", "Node.js", "SQL", "Git", "REST APIs", "AWS"],
    projects: [
      {
        title: "LokalJOB",
        description: "Full-stack freelancer marketplace with payment integration",
        tech: ["React", "Node.js", "Firebase"],
        videoUrl: lokaljobVideo,
      },
      {
        title: "Harimau Malaya",
        description: "Malaysia National Football Team fan site",
        tech: ["Next.js", "Firebase", "Tailwind"],
        videoUrl: harimauVideo,
      },
      {
        title: "404Found.studio",
        description:
          "Designed and developed a clean, responsive landing page using modern frontend practices",
        tech: ["React", "Next.js", "Tailwind"],
        videoUrl: portfolioVideo,
      },
    ],
    experiences: [
      {
        role: "Software Developer / Technical Support",
        company: "Self Employed",
        period: "2016 - Present",
        responsibilities: [
          "Provided long term freelance Linux system administration support, configuring, maintaining and troubleshooting servers to ensure stable and reliable development and testing environments",
          "Managed AWS resources (EC2, S3, IAM) for deployment, access control, and monitoring",
          "Supported debugging, optimization, and execution of applications and workloads, applying strong problem-solving skills across Linux, Python scripting, and system-level tooling",
        ],
      },
      {
        role: "Technical Support / Data Research Assistant ",
        company: "Self Employed",
        period: "2021 - 2025",
        responsibilities: [
          "Provided Linux-based technical support and reproducible research environments for University of Malaya and CERN student projects",
          "Assisted PhD researchers with Python scripting and data processing workflows",
          "Managed Linux environments using command-line tools and reproducible setups",
        ],
      },
    ],
    about: {
      intro: [
        "Hello! I'm Zairi Ghazali, a passionate developer with a love for creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.",
        "I believe in continuous learning and staying updated with the latest industry trends. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
      ],
      highlights: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "100%", label: "Client Satisfaction" },
      ],
    },
    contact: {
      email: "mohdzairighazali@yahoo.com",
      linkedin: "https://www.linkedin.com/in/zairi-ghazali-5774901aa/",
    },
  };

  // Music Resume Data
  const musicData = {
    name: "Zairi 'Adam' Ghazali",
    tagline: "Session Musician & Producer",
    profileImage: profile2,
    skills: [
      { name: "Guitar", level: 5 },
      { name: "Keyboard", level: 4 },
      { name: "Music Production", level: 4 },
      { name: "Live Performance", level: 5 },
    ],
    otherSkills: ["Cubase", "Logic Pro", "Mixing", "Mastering", "Sound Design", "MIDI"],
    projects: [
      {
        title: "Di Simpang Tiga",
        description: "Johny Comes Lately debut album featuring 10 original tracks",
        tech: ["Guitar", "Keyboard", "Vocals"],
        videoUrl: "https://www.youtube.com/watch?v=DWMrM_EYpss&list=OLAK5uy_nbkUKJuzLHayfNMeNAA4rKzRvyn6Ufd0s", 
      },
      {
        title: "Kemenangan Sebenar",
        description: "Music video from Johny Comes Lately's album",
        tech: ["Guitar", "Synth", "Composition"],
        videoUrl: "https://www.youtube.com/watch?v=WUmP4-S0SXw&list=RDWUmP4-S0SXw&start_radio=1", 
      },
      {
        title: "Pergi",
        description: "Single release",
        tech: ["Guitar", "Synth", "Composition"],
        videoUrl: "https://www.youtube.com/embed/ee1sFMIdFGU", 
      },
    ],
    experiences: [
      {
        role: "Session Musician",
        company: "Various Studios",
        period: "2005 - 2023",
        responsibilities: [
          "Recorded guitar and synth tracks for local bands and solo artists",
          "Collaborated with bands on arrangements and song structures",
          "Arranged and composed music for studio recordings",
        ],
      },
      {
        role: "Music Tutor",
        company: "Independent",
        period: "2015 - Present",
        responsibilities: [
          "Teached guitar and keyboard to students of all ages and skill levels",
          "Personalized lesson plans to meet individual student goals",
          "Encouraged creativity and musical expression",
        ],
      },
    ],
    about: {
      intro: [
        "Music has been my lifelong passion, shaping my journey since 2005. I began as a session musician, performing with a wide range of bands across different styles and settings. Over the years, I’ve also collaborated with various artists and bands on songwriting and recording projects, contributing both creatively and technically to the music-making process.",
        "As a musician and producer, I focus on creating sonic experiences that connect on an emotional level. From intimate acoustic sessions to full-scale studio productions, I bring dedication, versatility, and a deep respect for authentic musical expression to every project. Whether on stage or in the studio, my goal is always the same: to create music that resonates, inspires, and lasts.",
      ],
      highlights: [
        { value: "20+", label: "Years Performing" },
        { value: "50+", label: "Songs Featured" },
        { value: "100+", label: "Live Shows" },
      ],
    },
    contact: {
      email: "mohdzairighazali@yahoo.com",
      linkedin: "https://www.linkedin.com/in/zairi-ghazali-5774901aa/",
    },
  };

  const currentData = isFlipped ? musicData : itData;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % currentData.projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + currentData.projects.length) % currentData.projects.length,
    );
  };

  return (
    <div className={`resume-container ${isFlipped ? "music-mode" : ""}`}>
      <div className="flip-card-container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          {/* IT Side (Front) */}
          <div className="flip-card-front">
            <div className="header">
              <h1 className="name-title">{itData.name}</h1>
              <p className="tagline">{itData.tagline}</p>
            </div>

            <div className="picture" onClick={handleFlip}>
              <img src={itData.profileImage} alt="Profile" className="profile-img clickable" />
              <div className="flip-hint">Click to see music portfolio</div>
            </div>

            <nav className="nav-buttons">
              <button className="nav-btn" onClick={() => openModal("about")}>
                <span>About Me</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("skills")}>
                <span>Skills</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("projects")}>
                <span>Projects</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("experience")}>
                <span>Experience</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("contact")}>
                <span>Contact</span>
              </button>
            </nav>
          </div>

          {/* Music Side (Back) */}
          <div className="flip-card-back">
            <div className="header">
              <h1 className="name-title">{musicData.name}</h1>
              <p className="tagline">{musicData.tagline}</p>
            </div>

            <div className="picture" onClick={handleFlip}>
              <img src={musicData.profileImage} alt="Profile" className="profile-img clickable" />
              <div className="flip-hint">Click to see IT portfolio</div>
            </div>

            <nav className="nav-buttons">
              <button className="nav-btn" onClick={() => openModal("about")}>
                <span>About Me</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("skills")}>
                <span>Skills</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("projects")}>
                <span>Projects</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("experience")}>
                <span>Experience</span>
              </button>
              <button className="nav-btn" onClick={() => openModal("contact")}>
                <span>Contact</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            {activeModal === "about" && (
              <div className="modal-inner">
                <h2 className="modal-title">About Me</h2>
                <div className="about-content">
                  {currentData.about.intro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="highlights">
                    {currentData.about.highlights.map((item, index) => (
                      <div key={index} className="highlight-item">
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeModal === "skills" && (
              <div className="modal-inner">
                <h2 className="modal-title">Technical Skills</h2>
                <div className="skills-content">
                  {currentData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`dot ${i < skill.level ? "filled" : "empty"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="other-skills">
                  <h3>Others</h3>
                  <div className="skill-tags">
                    {currentData.otherSkills.map((skill, index) => (
                      <span key={index} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeModal === "projects" && (
              <div className="modal-inner">
                <h2 className="modal-title">Featured Projects</h2>
                <div className="carousel-container">
                  <button className="carousel-btn prev" onClick={prevProject}>
                    ‹
                  </button>

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
                        <source
                          src={currentData.projects[currentProjectIndex].videoUrl}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="project-info">
                      <h3>{currentData.projects[currentProjectIndex].title}</h3>
                      <p>{currentData.projects[currentProjectIndex].description}</p>
                      <div className="tech-stack">
                        {currentData.projects[currentProjectIndex].tech.map((tech, i) => (
                          <span key={i} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="carousel-btn next" onClick={nextProject}>
                    ›
                  </button>
                </div>
                <div className="carousel-indicators">
                  {currentData.projects.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === currentProjectIndex ? "active" : ""}`}
                      onClick={() => setCurrentProjectIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeModal === "experience" && (
              <div className="modal-inner">
                <h2 className="modal-title">Work Experience</h2>
                <div className="experience-content">
                  {currentData.experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="experience-item"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
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

            {activeModal === "contact" && (
              <div className="modal-inner">
                <h2 className="modal-title">Let's Connect</h2>
                <div className="contact-content">
                  <p className="contact-intro">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hello!
                  </p>
                  <div className="contact-icons">
                    <a
                      href={`mailto:${currentData.contact.email}`}
                      className="contact-icon email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </a>
                    <a
                      href={currentData.contact.linkedin}
                      className="contact-icon linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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