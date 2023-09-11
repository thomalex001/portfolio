import LogoGa from '../assets/logo-ga.png';
import LogoLf from '../assets/logolf.jpg';
import LogoTemper from '../assets/logotemper.png';
import { forwardRef } from 'react';


const Experience = forwardRef((props, ref) => {
  return (
    <div
      className='experience-container'
      ref={ref}>
      <h1>Experience</h1>
      <div className='experience-box'>
        <div className='experience-header-section'>
          <div className='experience-image-box'>
            <a
              href='https://generalassemb.ly/'
              target='_blank'
              rel='noreferrer'
              alt='logo-general-assembly'>
              <img
                src={LogoGa}
                alt='logo-general-assembly'
              />
            </a>
          </div>
          <div className='experience-header-text'>
            <h2>
              General Assembly Immersive Software Engineering Course - London
              (Online)
            </h2>
            <h3>Oct 2022 - Jan 2023</h3>
            <h3> 9-5 Mon-Fri with 400+ hours of homework.</h3>
          </div>
        </div>
        <p>
          General Assembly is a pioneer in education and career transformation,
          specializing in today’s most in-demand skills. What began as a
          co-working space in 2011 has since grown into a global learning
          experience with campuses in 20 cities and over 35,000 graduates
          worldwide. General Assembly provides award-winning, dynamic training
          to close the global skills gap.
          <br />
          During my 12 weeks at GA, I had the opportunity to learn and work with
          the most recent full stack technologies in the industry. I learned TDD
          fundamentals and covered multiple modules each ending with a project
          to reinforce my knowledge. Throughout the course, I worked
          independently, as well as in pair and group projects listed above.
          Overall this was a fantastic experience where I met students of all
          ages and background graduating with honors.
        </p>
      </div>
      <div className='experience-box'>
        <div className='experience-header-section'>
          <div className='experience-image-box'>
            <a
              href='https://lafromagerie.co.uk/'
              target='_blank'
              rel='noreferrer'
              alt='logo-la-fromagerie'>
              <img
                src={LogoLf}
                alt='logo-la-fromagerie'
              />
            </a>
          </div>
          <div className='experience-header-text'>
            <h2>
              Duty Manager - La Fromagerie Retail & Wholesale - London
              Marylebone
            </h2>
            <h3>Dec 2021 - Current{' '}(Part-Time) </h3>
          </div>
        </div>
        <p>
          La Fromagerie has three locations: Highbury (first opened 1992), it's
          flagship Marylebone (opened 2002) and more recently Bloomsbury. Each
          shop has it's signature walk-in cheese room, a café serving hot food
          with table service as well as regular Supper Evenings/Events
          throughout the year. The Wholesale Department has a dedicated team of
          cheesemongers based in a warehouse in Highbury, where the affinage
          operations take place in specially designed cheese rooms devoted to
          maturing & refining cheese.<br></br>Over the years La Fromagerie has become
          the London "go to" place for cheese lovers but also anyone attracted
          to a wide range of delicious homemade foods, as well as French/Italian
          products sometimes difficult (or impossible?!) to get your hands on in
          the UK.
        </p>
      </div>
      <div
        id='experience-bottom-box'
        className='experience-box'>
        <div className='experience-header-section'>
          <div className='experience-image-box'>
            <a
              href='https://temperrestaurant.com/'
              target='_blank'
              rel='noreferrer'
              alt='logo-temper-restaurant'>
              <img
                src={LogoTemper}
                alt='logo-temper-restaurant'
              />
            </a>
          </div>
          <div className='experience-header-text'>
            <h2>General Manager - Temper Restaurants - London Soho</h2>
            <h3>Feb 2019 - Dec 2021</h3>
          </div>
        </div>
        <p>
          Temper Soho landed on the very competitive London food scene with a
          bang. The concept was simple: a unique 7 foot long fire pit with
          counter seats all around as well as comfy booths, set in a basement in
          the heart of Soho's buzzing nightlife.<br></br>Music would be loud with 80's
          Hits, 90's Hip Hop or noughties Garage. Award Winning cocktails would
          complement the South American spicy and smoky bold flavors and chef
          Neil Rankin would be the star of the show. 6 years later and it keeps
          being talked about as one of the best restaurants London has to offer.
        </p>
      </div>
    </div>
  );
});

export default Experience;
