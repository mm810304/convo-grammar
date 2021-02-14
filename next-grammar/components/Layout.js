import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import styles from './layout.module.css';

const Layout = ({ children, title = "Convo Grammar | Convo English", description = "From English Grammar Beginner to Expert For Free", keywordOne = "English Grammar", keywordTwo = "English Grammar for Speaking", image = "" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="title" key="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={`English Grammar, English Grammar for Speaking, English Grammar with Example Sentences, Become English Grammar Expert, ${keywordOne}, ${keywordTwo}`} />
        <meta property="og:title" content="Convo Grammar | Convo English | Become English Grammar Expert for Free"/>
        <meta property="og:url" content="https://www.convogrammar.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:image" content={image || '/convopic2.jpg'} />
        <meta property="og:site_name" content="Convo Grammar" key="ogsitename" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-148727012-7`} />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-148727012-7');
            `
          }}
        />
        <title>{title}</title>
      </Head>
      <div className={styles.everyPageWrapper}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
        />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;