// components/HamburgerMenu.tsx
import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  onSectionChange: (section: string) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <div className={styles.menuContainer}>
      {/* The Hamburger Button */}
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* The Dropdown Menu */}
      <nav className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        <button 
          className={`${styles.navButton} ${activeSection === 'home' ? styles.active : ''}`}
          onClick={() => handleNavigation('home')}
          type="button"
        >
          Home
        </button>
        <button 
          className={`${styles.navButton} ${activeSection === 'projects' ? styles.active : ''}`}
          onClick={() => handleNavigation('projects')}
          type="button"
        >
          Projects
        </button>
        <button 
          className={`${styles.navButton} ${activeSection === 'contact' ? styles.active : ''}`}
          onClick={() => handleNavigation('contact')}
          type="button"
        >
          Contact
        </button>
        <button 
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          type="button"
        >
          Close Menu
        </button>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
