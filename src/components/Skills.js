import Icon1 from '../assets/icons/bootstrap.svg';
import Icon2 from '../assets/icons/bulma.png';
import Icon3 from '../assets/icons/cloudinary.png';
import Icon4 from '../assets/icons/css-3.png';
import Icon5 from '../assets/icons/django.png';
import Icon6 from '../assets/icons/ex.png';
import Icon7 from '../assets/icons/git.png';
import Icon8 from '../assets/icons/heroku.png';
import Icon9 from '../assets/icons/html.png';
import Icon10 from '../assets/icons/js.png';
import Icon11 from '../assets/icons/mongodb.png';
import Icon12 from '../assets/icons/mui.png';
import Icon13 from '../assets/icons/node.png';
import Icon14 from '../assets/icons/npm.png';
import Icon15 from '../assets/icons/netflify.png';
import Icon16 from '../assets/icons/postman.png';
import Icon17 from '../assets/icons/python.png';
import Icon18 from '../assets/icons/react.png';
import Icon19 from '../assets/icons/sass.png';
import Icon20 from '../assets/icons/sql.png';
import Icon21 from '../assets/icons/tp.png';

import React, { forwardRef, useState } from 'react';

const Skills = forwardRef((props, ref) => {
  const [hoveredText, setHoveredText] = useState('');

  return (
    <div
      className='skills-container'
      ref={ref}>
      <h1>Skills</h1>
      <div className='icons-container'>
          <h2>Frontend</h2>
          <div className='icon-section'>
            <div>
              <img
                src={Icon9}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'HTML'}</p>
            </div>
            <div>
              <img
                src={Icon4}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'CSS'}</p>
            </div>
            <div>
              <img
                src={Icon19}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'Sass'}</p>
            </div>
            <div>
              <img
                src={Icon10}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'JavaScript'}</p>
            </div>
            <div>
              <img
                src={Icon18}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'React'}</p>
            </div>
            <div>
              <img
                src={Icon12}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'MUI'}</p>
            </div>
            <div>
              <img
                src={Icon2}
                alt='icon'
                id='bulma'
              />
              <p className='icon-text'>{hoveredText || 'Bulma'}</p>
            </div>
            <div>
              <img
                src={Icon1}
                alt='icon'
              />
              <p className='icon-text'>{hoveredText || 'Bootstrap'}</p>
            </div>
          </div>
        <h2>Backend</h2>
        <div className='icon-section'>
          <div>
            <img
              src={Icon17}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Python'}</p>
          </div>
          <div>
            <img
              src={Icon5}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Django'}</p>
          </div>
          <div>
            <img
              src={Icon13}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Node.js'}</p>
          </div>
          <div>
            <img
              src={Icon6}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Express'}</p>
          </div>
          <div>
            <img
              src={Icon16}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Postman'}</p>
          </div>
          <div>
            <img
              src={Icon14}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'npm'}</p>
          </div>
        </div>
        <h2>Storage/Database</h2>
        <div className='icon-section'>
          <div>
            <img
              src={Icon7}
              alt='icon'
              id='git'
            />
            <p className='icon-text'>{hoveredText || 'GitHub'}</p>
          </div>
          <div>
            <img
              src={Icon8}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Heroku'}</p>
          </div>
          <div>
            <img
              src={Icon15}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'Netflify'}</p>
          </div>
          <div>
            <img
              src={Icon3}
              alt='icon'
              id='cloudinary'
            />
            <p className='icon-text'>{hoveredText || 'Cloudinary'}</p>
          </div>
          <div>
            <img
              src={Icon11}
              alt='icon'
              id='mongodb'
            />
            <p className='icon-text'>{hoveredText || 'MongoDb'}</p>
          </div>
          <div>
            <img
              src={Icon20}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'PostgreSQL'}</p>
          </div>
          <div>
            <img
              src={Icon21}
              alt='icon'
            />
            <p className='icon-text'>{hoveredText || 'TablePlus'}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
