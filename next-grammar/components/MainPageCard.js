import React from 'react';
import Link from 'next/link';
import styles from './main-page-card.module.css';

const MainPageCard = ({ name, style, image, link, href, slug }) => {
  const imageUrl = image.asset.url;
  const refinedImage = `${imageUrl}/fit=min`;
  
  return (
    <React.Fragment>
      { href && 
        <Link href={href} as={slug}>
          <div className={styles[style]}
            style={{ 
              backgroundImage: `url(${refinedImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          >
            <div className={styles.content}>
              <h2 className={styles.categoryTitle}>{name}</h2>
            </div>
          </div>
        </Link>
      }
    </React.Fragment>
  );
};

export default MainPageCard;

