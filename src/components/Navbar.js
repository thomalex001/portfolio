import React from 'react';
import { useState } from 'react';

const navbarHeight = 71;

const Navbar = ({ aboutSection, skillsSection, experienceSection, projectsSection, contactSection }) => {
  
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
  
  const scrollDownToAbout = () => {
    if (aboutSection && aboutSection.current) {
      window.scrollTo({
        top: aboutSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollDownToSkills = () => {
    if (skillsSection && skillsSection.current) {
      window.scrollTo({
        top: skillsSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
  const scrollDownToExperience = () => {
    if (experienceSection && experienceSection.current) {
      window.scrollTo({
        top: experienceSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
    const scrollDownToProjects= () => {
      if (projectsSection && projectsSection.current) {
        window.scrollTo({
          top: projectsSection.current.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }
    };
    const scrollDownToContact= () => {
      if (contactSection && contactSection.current) {
        window.scrollTo({
          top: contactSection.current.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      };

    };
  return (
    <header className={`navbar ${isNavbarOpen ? 'expanded' : ''}`}>
      <section className='top-nav'>
        <input
          id='menu-toggle'
          type='checkbox'
        />
        <label
          class='menu-button-container'
          for='menu-toggle'>
          <div
            onClick={toggleNavbar}
            class='menu-button'></div>
        </label>
        <ul className='menu'>
          <li
            // className='navItem'
            onClick={scrollDownToSkills}>
            Skills
          </li>
          <li
            // className='navItem'
            onClick={scrollDownToProjects}>
            Projects
          </li>
          <li
            // className='navItem'
            onClick={scrollDownToExperience}>
            Experience
          </li>
          <li
            // className='navItem'
            onClick={scrollDownToAbout}>
            More About Me
          </li>
          <li
            // className='navItem'
            onClick={scrollDownToContact}>
            Contact
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;





