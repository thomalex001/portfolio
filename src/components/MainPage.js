import ProfileImage from '../assets/profile.png'
import gitIcon from '../assets/icons/github-profile-icon.png'
import linkedInIcon from '../assets/icons/linkedin-profile-icon.png';

const MainPage = () => {
  return (
    <div>
      <div className='firstAndLastName'>
        <div className='firstname'>
          <h1>A L E X</h1>
          <h2>Junior Software Engineer.</h2>
        </div>
        <div>
          <h1>T H O M A S</h1>
        </div>
      </div>
      <div className='profile-container'>
        <div className='image-container'>
          <div className='overlay-container'>
            <img
              className='profileImage'
              src={ProfileImage}
              alt='profile'
            />
            <a
              href='https://github.com/thomalex001'
              target='_blank'
              rel='noreferrer'>
              <img
                className='overlay-git-icon'
                src={gitIcon}
                alt='git-icon'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/alex-thomas-london/'
              target='_blank'
              rel='noreferrer'>
              <img
                className='overlay-linkedin-icon'
                src={linkedInIcon}
                alt='linked-in-icon'
              />
            </a>
          </div>
        </div>
        <div className='profile-text'>
          <h3>A little bit about me...</h3>
          <h4>
            Hi there 👋 I'm Alex! I have been fascinated with the Tech industry
            for many years and recently discovered a love for coding. I
            litteraly caught the bug (no pun intended) whilst self-learning
            which led me to seek a career change in this field.
          </h4>
          <h4>
            And so, in late 2022, I enrolled in a Software Engineering Immersive
            course to dive deeper into all aspects of Full-Stack Engineering. My
            background is in hospitality with over 15 years experience where I
            had the opportunity to work with passionate and fun people in an
            environment that is as challenging as it is rewarding. I love
            working within team, helping others and getting out of my comfort
            zone when I can!
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MainPage