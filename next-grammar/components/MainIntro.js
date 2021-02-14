import Link from 'next/link';
import styles from './main-intro.module.css';

const MainIntro = () => {
  return (
    <div className={styles.introContainer}>
      <h1 className={styles.title}>Convo Grammar</h1>
      <h3 className={styles.description}>Every important English grammar point and how to actually use them when speaking English!</h3>
      <h3 className={styles.resources}>Want something other than grammar?  <Link href="/convo"><span className={styles.resourcesLink}>Check out our other free English lessons!</span></Link></h3>
    </div>
  );
};

export default MainIntro;