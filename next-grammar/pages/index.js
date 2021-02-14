import { getSanityContent } from '../utils/sanity';

import Layout from '../components/Layout';
import MainIntro from '../components/MainIntro';
import MainPageCard from '../components/MainPageCard';

import styles from '../styles/homepage.module.css';


const HomePage = ({ data }) => {
  const categoryData = data.allCategories;
  
  const categories = categoryData.sort((a, b) => {
    return parseInt(a.category_number) > parseInt(b.category_number) ? 1 : -1;
  });

  const SEOImageUrl = categories[8].image.asset.url;
  const SEOImage=`${SEOImageUrl}/fit=min`;

  return (
    <Layout 
      title="Convo Grammar | Convo English"
      description="Go from an English Grammar beginner to expert with these free online lessons.  Learn how to use English grammar in real life when speaking or writing. Easy to understand explanations with many example sentences."
      keywordOne="Convo English Homepage"
      keywordTwo="English Grammar For Speaking"
      image={SEOImage}
    >
      <div className={styles.homepage}>
        <MainIntro />
        <main className={styles.directoryMenu}>
          {categories.map((category) => {
            const { category_number, image, _id, name, category_slug, style} = category;
            return (
              <MainPageCard 
                key={_id}
                categoryNumber={category_number}
                image={image}
                name={name}
                style={style}
                href='/[category]'
                slug={`/${category_slug.current}`}
              />
            )
          })}
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllCategories {
        allCategories {
          _id
          category_number
          name
          style
          category_slug {
            current
          }
          image {
            asset {
              url
            }
          }
        }
      }
    `
  });

  return {
    props: { data}
  };
}

export default HomePage;