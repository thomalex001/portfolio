import { Icon } from 'semantic-ui-react';
import ScrollToTop from './common/ScrollToTop';
import CopyButton from './common/CopyButton';
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const linkToCopy = 'thomasalex06@gmail.com';
  return (
    <footer
      className='contact-container'
      ref={ref}>
      <h1>Contact</h1>
      <div className='contact-inner-container'>
        <div className='email-contact-box'>
          <Icon name='mail' />

          <h2>thomasalex06@gmail</h2>
          <CopyButton link={linkToCopy} />
        </div>
        <div className='linked-in-contact-box'>
          <Icon name='linkedin' />

          <a
            href='https://www.linkedin.com/in/alex-thomas-london/'
            alt='alex-thomas-linked-in'
            target='blank'
            rel='noreferrer'>
            <h2>in/alex-thomas-london</h2>
          </a>
        </div>
        <div className='github-contact-box'>
          <Icon name='github square' />
          <a
            href='https://github.com/thomalex001/'
            alt='alex-thomas-linked-in'
            target='blank'
            rel='noreferrer'>
            <h2>github.com/thomalex001</h2>
          </a>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
});

export default Contact;
