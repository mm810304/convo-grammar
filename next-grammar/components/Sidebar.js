import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants/navLinks';

import styles from './sidebar.module.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className={cx(styles.sidebar, 
      {
        [styles.showSidebar] : isSidebarOpen
      }
    )}>
      <button
        type="button"
        className={styles.closeBtn}
        aria-label="Close Menu"
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>
      <div className={styles.linkContainer}>
        <ul className={styles.linkList}>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.linkItem}>
              <Link href={link.url}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
