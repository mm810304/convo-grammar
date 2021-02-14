import { getSanityContent } from '../../../utils/sanity';
import ReactHtmlParser from 'react-html-parser';
import { fixTableStyles } from '../../../utils/modifyContent';

import Layout from '../../../components/Layout';

import styles from '../../../styles/lesson.module.css';

const LessonPage = ({ lesson }) => {
  const { title, content, lesson_number } = lesson[0];
  const categoryName = lesson[0].category.name;
  
  const SEOImageUrl =lesson[0].image.asset.url;
  const SEOImage = `${SEOImageUrl}/fit=min`;

  return (
    <Layout
      title={`${title} | Convo Grammar`}
      description={`How to use the English grammar ${title} naturally when speaking or writing in English and get one step closer to English grammar mastery.`}
      keywordOne={title}
      keywordTwo={`English grammar ${title} when speaking English`}
      image={SEOImage}
    >
      <div className={styles.lessonContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.level}>{`${categoryName} - Lesson #${lesson_number}`}</h4>
        <main className={styles.mainContent}>
          {ReactHtmlParser(content)}
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllLessons {
        allLessons {
          lesson_slug {
            current
          }
          category {
            category_slug {
              current
            }
          }
        }
      }
    `
  });

  const lessons = data.allLessons;

  const paths = lessons.map((lesson) => ({
    params: { 
      lesson: lesson.lesson_slug.current,
      category: lesson.category.category_slug.current
    }
  }));

  return { paths, fallback: false }
};

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
      query LessonBySlug($slug: String!) {
        allLessons(where: { lesson_slug: { current: { eq: $slug }}}) {
          title
          content
          lesson_number
          category {
            name
          }
          image {
            asset {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug: params.lesson,
    }
  });

  const lesson = data.allLessons;

  return {
    props: {
      slug: `${params.category}/${params.lesson}`,
      lesson
    }
  }
};

export default LessonPage;


