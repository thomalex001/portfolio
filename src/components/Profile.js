import ProfileImage from '../assets/profile-sq.png'
import gitIcon from '../assets/icons/github-profile-icon.png'
import linkedInIcon from '../assets/icons/linkedin-profile-icon.png';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='fullname-container'>
        <div className='firstname'>
          <h1 className='animate__animated animate__slideInLeft'>A L E X</h1>
          <h2 className='animate__animated animate__bounceInDown animate__delay-1s	'>
            Junior Software Engineer.
          </h2>
        </div>
        <div>
          <h1 id='last-name' className='animate__animated animate__slideInRight	'>
            T H O M A S
          </h1>
        </div>
      </div>
      <div className='image-and-text-container'>
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
        <div className='profile-text-container'>
          <h3>A little bit about me...</h3>
          <p>
            Hi there 👋 I'm Alex! I have been fascinated with the Tech industry
            for many years and recently discovered a love for coding. I
            literally caught the bug (no pun intended) whilst self-learning
            which led me to seek a career change in this field.
          </p>
          <p>
            And so, in 2023, I enrolled in a Software Engineering Immersive
            course to dive deeper into all aspects of Full-Stack Engineering. My
            background is in hospitality with over 15 years experience where I
            had the chance to work with passionate and fun people in an
            environment that is as challenging as it is rewarding. I love
            working within a team, helping others and getting out of my comfort
            zone when the opportunity comes along!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile