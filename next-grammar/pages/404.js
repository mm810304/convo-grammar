import Link from 'next/link';

import Layout from '../components/Layout';

import styles from '../styles/four-zero-four.module.css';

const FourZeroFourPage = () => {
  return (
    <Layout>
      <div className={styles.errorWrapper} >
        <h1 className={styles.error}>Ooops!  Something went wrong.  This page doesn't seem to exist.</h1>
        <h2 className={styles.takeHome}><Link href="/">Take me home!</Link></h2>
      </div>
      
    </Layout>
  );
};

export default FourZeroFourPage;