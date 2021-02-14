import Link from 'next/link';
import { getSanityContent } from '../utils/sanity';

import Layout from '../components/Layout';

import styles from '../styles/lessons.module.css';

const AllLessonsPage = ({ data }) => {
  const categories = data.allCategories.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  const lessons = data.allLessons.sort((a, b) => {
    return a.lesson_number > b.lesson_number ? 1 : -1;
  })

  return (
    <Layout 
      title="All Lessons | Convo Grammar"
      description="See every lesson on Convo Grammar to help you go from English grammar beginner to expert."
      keywordOne="All Important English Grammar for speaking"
      keywordTwo="Learn English grammar for free"
    >
      <div className={styles.wrapper}>
        <h1 className={styles.header}><span className={styles.underline}>All English Grammar Lessons</span></h1>
        {categories.map((category) => {
          return (
            <div key={category._id}>
              <h2 className={styles.categoryHeader}>{category.name}</h2>
              <ul className={styles.list}>
                {lessons.map((lesson) => {
                  if (lesson.category_tag === category.category_slug.current) {
                    return (
                      <li key={lesson._id} className={styles.listItem}>
                        <Link href='/[category]/[lesson]' as={`/${category.category_slug.current}/${lesson.lesson_slug.current}`}>
                          {lesson.title}
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query {
        allCategories {
          name
          _id
          category_slug {
            current
          }
        }
        allLessons {
          title
          _id
          category_tag
          lesson_number
          lesson_slug {
            current
          }
        }
      }    
    `
  });

  return {
    props: {
      data
    }
  }
}

export default AllLessonsPage;