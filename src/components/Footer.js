import ScrollToTop from './common/ScrollToTop';
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <footer
      className='footer'
      ref={ref}>
      <ScrollToTop />
    </footer>
  );
});

export default Contact;
