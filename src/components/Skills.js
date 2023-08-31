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

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1>Skills</h1>
      <div className='icons-container'>
          <h2>FrontEnd</h2>
        <div className='icon-section'>
        <img src={Icon9} alt='icon' />
        <img src={Icon4} alt='icon' />
        <img src={Icon19} alt='icon'/>
        <img src={Icon10} alt='icon'/>
        <img src={Icon18} alt='icon'/>
        <img src={Icon1} alt='icon' />
        <img src={Icon14} alt='icon'/>
        <img src={Icon2} alt='icon' id='bulma'/>
        <img src={Icon12} alt='icon'/>
        </div>
        <h2>Back End</h2>
        <div className='icon-section'>
        <img src={Icon5} alt='icon' />
        <img src={Icon17} alt='icon'/>
        <img src={Icon13} alt='icon'/>
        <img src={Icon6} alt='icon' />
        <img src={Icon16} alt='icon'/>
        </div>
        <h2>Storage/Database</h2>
        <div className='icon-section'>
        <img src={Icon8} alt='icon' />
        <img src={Icon15} alt='icon' />
        <img src={Icon11} alt='icon' id='mongodb'/>
        <img src={Icon3} alt='icon' id='cloudinary' />
        <img src={Icon20} alt='icon'/>
        <img src={Icon21} alt='icon'/>
        <img src={Icon7} alt='icon' id='git' />
        </div>
    </div>
    </div>
  );
};

export default Skills;
