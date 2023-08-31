import { Icon } from 'semantic-ui-react';

const Contact = () => {
  return (
    <div className='contact-main-container'>
      <h1>Contact</h1>
      <div className='contact-container'>
        <div className='contact-box'>
          <Icon
            name='mail'
            size='big'
          />
          <h2>thomasalex06@gmail</h2>
        </div>
        <div className='contact-box'>
          <Icon
            className='icon'
            name='linkedin'
            size='big'
          />

          <a
            href='https://www.linkedin.com/in/alex-thomas-london/'
            alt='alex-thomas-linked-in'
            target='blank'
            rel='noreferrer'>
            <h2>in/alex-thomas-london</h2>
          </a>
        </div>
        <div className='contact-box'>
          <Icon
            name='github square'
            size='big'
          />
          <a
            href='https://github.com/thomalex001/'
            alt='alex-thomas-linked-in'
            target='blank'
            rel='noreferrer'>
            <h2>github.com/thomalex001</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
