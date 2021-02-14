import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

import { navLinks } from '../constants/navLinks';

import styles from './navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
            <h2 className={styles.logo}><Link href="/">Convo</Link></h2>
          <button
            type="button"
            className={styles.navBtn}
            onClick={toggleSidebar}
          >
             <FiMenu></FiMenu> 
          </button>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.id} className={styles.linkItem}>
                <Link href={link.url}>
                  <a>{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;