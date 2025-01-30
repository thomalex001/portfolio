import React from 'react';
import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

const navbarHeight = 60;

const Navbar = ({
  aboutSection,
  skillsSection,
  experienceSection,
  projectsSection,
  contactSection
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  //*********HIDE CONTACT ELEMENT WHEN RESIZING PAGE OR SCROLLING*********//
  useEffect(() => {
    const hideContact = () => {
      setIsContactVisible(false);
      setIsNavbarOpen(false);
    };

    window.addEventListener('resize', hideContact);
    window.addEventListener('scroll', hideContact);

    return () => {
      window.removeEventListener('resize', hideContact);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setIsContactVisible(false);
  };
  const toggleContact = () => {
    setIsContactVisible(!isContactVisible);
  };

  const scrollDownToAbout = () => {
    setIsNavbarOpen(false);
    setIsContactVisible(false);
    if (aboutSection && aboutSection.current) {
      window.scrollTo({
        top: aboutSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollDownToSkills = () => {
    setIsNavbarOpen(false);
    setIsContactVisible(false);
    if (skillsSection && skillsSection.current) {
      window.scrollTo({
        top: skillsSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
  const scrollDownToExperience = () => {
    setIsNavbarOpen(false);
    setIsContactVisible(false);
    if (experienceSection && experienceSection.current) {
      window.scrollTo({
        top: experienceSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
  const scrollDownToProjects = () => {
    setIsNavbarOpen(false);
    setIsContactVisible(false);
    if (projectsSection && projectsSection.current) {
      window.scrollTo({
        top: projectsSection.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className='navbar'>
      <section className='top-nav'>
        <input
          id='menu-toggle'
          type='checkbox'
          checked={isNavbarOpen}
        />
        <label
          className='menu-button-container'
          htmlFor='menu-toggle'
          onClick={toggleNavbar}>
          <div className='menu-button'></div>
        </label>
        <ul className='menu'>
          <li
            id='li-skills'
            onClick={scrollDownToSkills}>
            Skills
          </li>
          <li onClick={scrollDownToProjects}>Projects</li>
          <li onClick={scrollDownToExperience}>Experience</li>
          <li onClick={scrollDownToAbout}>More About Me</li>
          <li onClick={toggleContact}>
            Contact
            <div
              className={
                isContactVisible ? 'contact-toggle is-active' : 'contact-toggle'
              }>
              <div className='email-contact-box'>
                <a
                  href='mailto:thomasalex06@gmail.com'
                  alt='alex-thomas-email'>
                  {' '}
                  <Icon name='mail' />
                </a>
              </div>
              <div className='linked-in-contact-box'>
                <a
                  href='https://www.linkedin.com/in/alex-thomas-london/'
                  alt='alex-thomas-linked-in'
                  target='blank'
                  rel='noreferrer'>
                  <Icon name='linkedin' />
                </a>
              </div>
              <div className='github-contact-box'>
                <a
                  href='https://github.com/thomalex001/'
                  alt='alex-thomas-linked-in'
                  target='blank'
                  rel='noreferrer'>
                  <Icon name='github square' />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;



