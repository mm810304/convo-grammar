import Link from 'next/link';

import { navLinks } from '../constants/navLinks';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.mainText}>
          Have a Question or See a Mistake? </h3>
          <h3 className={styles.contact}><a className="footer-a" href="mailto:support@convoenglish.co">Contact Us</a> - support@convoEnglish.co
        </h3>
      </div>
      <div>
        <h3 className={styles.mainText}>
          copyright&copy;{new Date().getFullYear()}
          <span> ConvoEnglish LLC </span> all rights reserved
        </h3>
      </div>
      <div>
        <h3 className={styles.mainText}>
          <Link className="footer-a" href={navLinks[2].url}><a>More Free English Lessons</a></Link>
        </h3>
      </div>


    </footer>
  );
};

export default Footer;