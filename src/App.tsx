// import React, { useState } from 'react';
import { useState } from 'react';
// import HamburgerMenu from './components/HamburgerMenu';
import WaveAnimation from './components/WaveAnimation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-app">
      {/* Top Navigation */}
      <nav className="top-navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Samuel Zihao Lin</span>
      </div>
          <div className="nav-buttons">
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
        </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section id="home" className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Samuel Zihao Lin</span>
              </h1>
              <p className="hero-subtitle">
                Data Analyst & Machine Learning / AI Engineer
              </p>
              <p className="hero-description">
                I transform complex data into actionable insights using Python, SQL, and advanced analytics. 
                Specializing in statistical analysis, predictive modeling, and data visualization to drive 
                business decisions and innovation.
              </p>
              
            {/* About Me Section */}
            <div className="about-section">
              <h3 className="about-title">About Me</h3>
              <p className="about-description">
                Passionate data analyst with expertise in Python, SQL, and machine learning. 
                I specialize in transforming complex datasets into actionable insights through 
                statistical analysis, predictive modeling, and data visualization. With experience 
                in Snowflake, AWS, and advanced analytics tools, I help organizations make 
                data-driven decisions that drive business growth and innovation.
              </p>
              <div className="about-line"></div>
            </div>
              
              <div className="cta-buttons">
                <a href="#projects" className="cta-btn cta-btn-primary" onClick={() => setActiveSection('projects')}>
                  View My Work
                </a>
                <a href="#contact" className="cta-btn cta-btn-secondary" onClick={() => setActiveSection('contact')}>
                  Get In Touch
                </a>
                <a href="/SamuelLin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
                  Download Resume
                </a>
              </div>
              
              {/* Expanded Skills Tags - Organized by Data Analyst Importance */}
              <div className="expanded-skills">
                <h3>Core Data Analysis Skills</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">Python</span>
                  <span className="skill-tag-large">SQL</span>
                  <span className="skill-tag-large">Pandas</span>
                  <span className="skill-tag-large">NumPy</span>
                  <span className="skill-tag-large">Data Cleaning and Preprocessing</span>
                  <span className="skill-tag-large">Data Visualization</span>
                  <span className="skill-tag-large">Statistical Analysis</span>
                  <span className="skill-tag-large">Machine Learning Model Evaluation</span>
                  <span className="skill-tag-large">Regression Analysis</span>
                  <span className="skill-tag-large">Jupyter Notebook</span>
                </div>
                
                <h3>Advanced Analytics & Machine Learning</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">Scikit-learn</span>
                  <span className="skill-tag-large">PyTorch</span>
                  <span className="skill-tag-large">Deep Learning</span>
                  <span className="skill-tag-large">Time Series Analysis</span>
                  <span className="skill-tag-large">Predictive Modeling</span>
                  <span className="skill-tag-large">Feature Engineering</span>
                  <span className="skill-tag-large">Decision Trees and Random Forests</span>
                  <span className="skill-tag-large">YOLOv8</span>
                  <span className="skill-tag-large">Ultralytics</span>
                </div>
                
                <h3>Data Engineering & Cloud Platforms</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">Snowflake</span>
                  <span className="skill-tag-large">Snowpark</span>
                  <span className="skill-tag-large">PySpark</span>
                  <span className="skill-tag-large">Data Engineering</span>
                  <span className="skill-tag-large">Data Wrangling</span>
                  <span className="skill-tag-large">AWS</span>
                  <span className="skill-tag-large">Azure</span>
                  <span className="skill-tag-large">Git/GitHub/GitLab</span>
                </div>
                
                <h3>Visualization & Business Intelligence</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">Matplotlib</span>
                  <span className="skill-tag-large">Tableau</span>
                  <span className="skill-tag-large">Power BI</span>
                  <span className="skill-tag-large">Google Sheets/Excel</span>
                  <span className="skill-tag-large">Excel</span>
                  <span className="skill-tag-large">Yfinance</span>
                </div>
                
                <h3>Specialized Tools & Technologies</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">OpenCV</span>
                  <span className="skill-tag-large">Computer Vision</span>
                  <span className="skill-tag-large">Speech Recognition</span>
                  <span className="skill-tag-large">Web Scraping</span>
                  <span className="skill-tag-large">Network Analysis</span>
                  <span className="skill-tag-large">PyTesseract</span>
                  <span className="skill-tag-large">PyAutoGui</span>
                  <span className="skill-tag-large">Asyncio</span>
                </div>
                
                <h3>Programming & Development</h3>
                <div className="skills-grid-large">
                  <span className="skill-tag-large">JavaScript</span>
                  <span className="skill-tag-large">TypeScript</span>
                  <span className="skill-tag-large">React</span>
                  <span className="skill-tag-large">HTML/CSS</span>
                  <span className="skill-tag-large">Java</span>
                  <span className="skill-tag-large">C#</span>
                  <span className="skill-tag-large">C++</span>
                  <span className="skill-tag-large">R</span>
                  <span className="skill-tag-large">MATLAB</span>
                  <span className="skill-tag-large">Haskell</span>
                  <span className="skill-tag-large">Vite</span>
                  <span className="skill-tag-large">Firebase</span>
                  <span className="skill-tag-large">.NET Framework 4.8</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="projects-section">
            <div className="container">
              <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-content">
                  <h3>Market Mapping</h3>
                  <p>Advanced market analysis and data visualization tool for financial insights and trend analysis.</p>
                  <div className="project-tech">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Data Analysis</span>
                    <span className="skill-tag">Visualization</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/MarketMapping" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <h3>Real-Time Full Body Replication</h3>
                  <p>Advanced computer vision system for real-time human body tracking and replication using machine learning.</p>
                  <div className="project-tech">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Computer Vision</span>
                    <span className="skill-tag">Machine Learning</span>
                    <span className="skill-tag">Real-time Processing</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/RealTimeFullBodyReplication" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <h3>American Sign Language Translator</h3>
                  <p>Real-time American Sign Language translation system using computer vision and machine learning.</p>
                  <div className="project-tech">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Computer Vision</span>
                    <span className="skill-tag">Real-time Processing</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/American-Sign-Language-Translator-Real-Time" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <h3>Bank Guardian</h3>
                  <p>Discord bot that allows players to securely store and retrieve items in a virtual bank system with item management capabilities.</p>
                  <div className="project-tech">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Discord Bot</span>
                    <span className="skill-tag">Database</span>
                    <span className="skill-tag">API Development</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/Bank-Guardian" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <h3>Meme Evolution</h3>
                  <p>Data analysis project studying the evolution and spread of memes across social media platforms.</p>
                  <div className="project-tech">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Data Analysis</span>
                    <span className="skill-tag">Social Media</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/MemeEvolution-CIS400" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <h3>Portfolio Website</h3>
                  <p>Modern, responsive portfolio website built with React, TypeScript, and Three.js featuring interactive 3D wave animations and a clean, professional design.</p>
                  <div className="project-tech">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">Three.js</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Vite</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/5ALin/Portfolio" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        )}

        {/* Contact Info */}
        {activeSection === 'contact' && (
          <section id="contact" className="contact-section">
            <div className="container">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-info-simple">
                <div className="contact-item">
                  <strong>Email:</strong> 4130samuellin@gmail.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> 516-265-8184
                </div>
                <div className="contact-item">
                  <strong>GitHub:</strong> <a href="https://github.com/5ALin" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>@5ALin</a>
                </div>
                <div className="contact-item">
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/samuellin4/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Samuel Lin</a>
                </div>
                <div className="contact-item">
                  <strong>Resume:</strong> <a href="/SamuelLin_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Download PDF</a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Wave Animation Background */}
      <WaveAnimation />
      </div>
  );
}

export default App;