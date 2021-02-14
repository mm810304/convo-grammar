import Link from 'next/link';
import styles from './single-lesson-card.module.css';

const SingleLessonCard = ({ title, slug, image, href, lessonNumber }) => {
  return (
    <Link href={href} as={slug}>
      <article className={styles.card}>
        <img
          src={image}
          alt={`Picture representing the title`}
          className={styles.image}
        />
        <h4 className={styles.lessonNumber}><span className={styles.border}>{`Lesson Number ${lessonNumber}`}</span></h4>
        <h2 className={styles.title}>{title}</h2>
      </article>
    </Link>
  );
};

export default SingleLessonCard;