

import React from 'react';

const navbarHeight = 71;

const Navbar = ({ aboutSection, skillsSection, experienceSection, projectsSection, contactSection }) => {
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
      }
    };
  return (
    <header className='header'>
      <div className='navbar'>
        <div>
          <div
            className='navItem'
            onClick={scrollDownToSkills}>
            Skills
          </div>
          <div
            className='navItem'
            onClick={scrollDownToProjects}>
            Projects
          </div>
          <div
            className='navItem'
            onClick={scrollDownToExperience}>
            Experience
          </div>
          <div
            className='navItem'
            onClick={scrollDownToAbout}>
            More About Me
          </div>
          <div
            className='navItem'
            onClick={scrollDownToContact}>
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





