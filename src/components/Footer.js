import { Icon } from 'semantic-ui-react';
import ScrollToTop from './common/ScrollToTop';
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <footer
      className='contact-container'
      ref={ref}>
      <div className='contact-inner-container'>
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
      <ScrollToTop />
    </footer>
  );
});

export default Contact;
