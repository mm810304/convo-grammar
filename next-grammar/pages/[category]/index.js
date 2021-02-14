import { getSanityContent } from '../../utils/sanity';

import Layout from '../../components/Layout';
import SingleLessonCard from '../../components/SingleLessonCard';

import styles from '../../styles/category.module.css';

const CategoryPage = ({ slug, lessons }) => {
  const sortedLessons = lessons.sort((a, b) => parseInt(a.lesson_number) > parseInt(b.lesson_number) ? 1 : -1);
  const categoryName = lessons[0].category.name;

  const SEOImageUrl= lessons[0].image.asset.url;
  const SEOImage = `${SEOImageUrl}/fit=min`;

  return (
    <Layout
      title={`${categoryName} | Convo Grammar`}
      description={ `All the English grammar about ${categoryName} that you need to know to speak and write English fluently and become an English grammar expert.`}
      keywordOne={categoryName}
      keywordTwo={`Learn about ${categoryName} for speaking English`}
      image={SEOImage}
    >
      <h1 className={styles.pageTitle}>{categoryName}</h1>
      <main className={styles.categoryContainer}>
        {sortedLessons.map((lesson) => (
          <SingleLessonCard 
            key={lesson._id} 
            title={lesson.title}
            image={lesson.image.asset.url}
            lessonNumber={lesson.lesson_number}
            slug={`${slug}/${lesson.lesson_slug.current}`} 
            href='/[category]/[lesson]'
          />
        ))}
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllCategories {
        allCategories {
          category_slug {
            current
          }
        }
      }
    `
  }); 

  const categories = data.allCategories;

  const paths = categories.map((cat) => ({
    params: { category: cat.category_slug.current }
  }))

  return { paths, fallback: false }
};

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
      query LessonsByCategory($categoryRef: String!) {
        allLessons(where: { category_tag: { eq: $categoryRef }}) {
          title
          _id
          lesson_number
          category {
            name
          }
          lesson_slug {
            current
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
      categoryRef: params.category
    }
  });

  const lessons = data.allLessons;
  
  return {
    props: {
      slug: params.category,
      lessons
    }
  }
}

export default CategoryPage;