import ProfileImage from '../assets/profile.png'


const MainPage = () => {
  return (
    <div>
    <div className='firstAndLastName'>
      <div className='firstname'>
      <h1>A L E X</h1>
      <h2>Junior Software Engineer.</h2>
      </div>
      <h1>T H O M A S</h1>
    </div>
    <img className='profileImage' src={ProfileImage} alt='profile-Image'/>
    </div>
  );
}

export default MainPage