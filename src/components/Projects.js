import Project4img from '../assets/project4.png'
import Project3img from '../assets/project3.png'
import Project2img from '../assets/project2.png'
import Project1img from '../assets/project1.png'
import MusiqAll from '../assets/project5.png'



import { forwardRef } from 'react';


const Projects = forwardRef((props, ref) => {
  return (
    <div
      className='projects-container'
      ref={ref}>
      <h1>Projects</h1>
      <div className='project-box'>
        <fieldset className={'project new-project'}>
          <legend className='project-legend'>New Project 2025!</legend>
          <a
            href='https://musiq-all.co.uk'
            target='_blank'
            rel='noreferrer'>
            <h2>Musiq-All - Website</h2>
          </a>
          <h3>Technologies Used: React/JS, SASS, Axios</h3>
          <a
            href='https://musiq-all.co.uk'
            target='_blank'
            rel='noreferrer'>
            <img
              src={MusiqAll}
              alt='project1'></img>
          </a>
          <p>
            Why not start the year with a new Project! Musiq-All is my new
            creation for 2025! This website allows you to search for any musical
            Artist or band thanks to Discogs.com API. Once you have chosen your
            Artist, you will be directed to the Artist's page which will show
            all the albums available on the database. But wait, that's not all!
            Should there be 5 or more albums for this Artist, a Quiz will be
            available for you to test your knowledge! Good luck!
            <br></br>Analyzing each endpoints to get the most information was
            the key takeaway for me on this project. The main challenge was to
            work on the quiz functionalities. I wanted to improve my styling,
            responsiveness and accessibility skills as well, which I did!
          </p>
        </fieldset>
        <fieldset className='project'>
          <legend className='project-legend'>Project 1</legend>
          <a
            href='https://github.com/thomalex001/ga-project-1'
            target='_blank'
            rel='noreferrer'>
            <h2>Mario Space Invaders Game (Github)</h2>
          </a>
          <h3>Technologies Used: HTML, CSS, Javascript</h3>
          <a
            href='https://thomalex001.github.io/ga-project-1/'
            target='_blank'
            rel='noreferrer'>
            <img
              src={Project1img}
              alt='project1'></img>
          </a>
          <p>
            Built a Mario inspired Space Invaders game using only HTML, CSS and
            powered it with JavaScript. A challenging first project as I had
            only two weeks of Javascript/CSS knowledge and I designed the entire
            game by myself. <br></br>Creating a fully working game in such a
            short amount of time was very rewarding, adding designs and sounds
            was really fun too. Key learning and takeaways were to practice
            JavaScript in the DOM and the importance of planning. Mario World
            Invaders can be played by clicking on the image above (desktop
            version only at the moment!).
          </p>
        </fieldset>
        <fieldset className='project'>
          <legend className='project-legend'>Project 2</legend>
          <a
            href='https://github.com/thomalex001/ga-project-2'
            target='_blank'
            rel='noreferrer'>
            <h2>Rick & Morty API (Github)</h2>
          </a>
          <h3>Technologies Used: JS/React, SASS, Mui, Postman</h3>
          <a
            href='https://rick-morty-api-project.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <img
              src={Project2img}
              alt='project2'></img>
          </a>
          <p>
            Created a frontend web application with React in a pair-programming
            hackathon using an open-library API of the popular Rick & Morty
            animated series. The multi page application displays each
            character’s names, images and episode lists among others.<br></br>As
            well as sharing strengths and skills, this project really helped me
            consolidate my Javascript knowledge and introduced me to backend
            programming using Postman. The app is styled using SASS and MUI
            React components and it is deployed on Netlify.
          </p>
        </fieldset>
        <fieldset
          className='project'
          id='project3-box'>
          <legend className='project-legend'>Project 3</legend>
          <a
            href='https://github.com/thomalex001/ga_project_3_client'
            target='_blank'
            rel='noreferrer'>
            <h2>The Diary Library App (Github)</h2>
          </a>
          <h3>Technologies Used: Express/Node, JS/React, SASS</h3>
          <a
            href='https://the-diary-library-app.netlify.app/welcome/'
            target='_blank'
            rel='noreferrer'>
            <img
              src={Project3img}
              alt='project3'></img>
          </a>
          <p>
            Collaborated with two other students to develop a full-stack
            application with Express in Node.js, MongoDB as a database and React
            on the frontend. This project required a full day of planning using
            a detailed wireframe. Constant communication with my classmates on
            our Trello board was essential and version control with Git-Hub
            ensured a linear workflow which simulated a realistic work
            environment.<br></br>The app is styled with MUI React components
            plus added CSS. The database is deployed on MongoDB Cloud through a
            DB URI. The frontend is deployed on Netlify and the backend on
            Heroku.
          </p>
        </fieldset>
        <fieldset
          className='project'
          id='project4-box'>
          <legend className='project-legend'>Project 4</legend>
          <a
            href='http://github.com/thomalex001/ga-project-4-client'
            target='_blank'
            rel='noreferrer'>
            <h2>Vintage Cutsom Cycles App (Github)</h2>
          </a>
          <h3>Technologies Used: Python/Django, JS/React, SASS</h3>
          <a
            href='https://vintage-custom-cycles.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <img
              src={Project4img}
              alt='project4'></img>
          </a>
          <p>
            A solo final project to challenge myself in building and designing a
            full-stack application using a newly acquired language (Python) and
            framework (Django). Vintage Custom Cycles is a marketplace to buy
            second-hand bike products with the purpose of building your own
            bike.<br></br>Inspired by e-commerce websites, the app allows buyers
            to select their chosen products and virtually build a bike from
            spare parts, they can also place an order and see a confirmation
            with a summary of the items bought. The app is styled with MUI React
            components and SASS, the frontend is deployed on Netlify and the
            back-end on Heroku.
          </p>
        </fieldset>
      </div>
    </div>
  );
});

export default Projects