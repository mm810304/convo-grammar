import { resourceData } from '../constants/convoResources';

import Layout from '../components/Layout';

import styles from '../styles/convo.module.css';

const ConvoPage = () => {
  return (
    <Layout
      title="Convo English Resources | Convo Grammar"
      description="Other free English content provided by Convo English including English conversation practice, English interview, English expresions, idioms, and slang, plus more."
      keywordOne="Free English Lessons"
      keywordTwo="Learn English for Free"
    >
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Free English Lessons For Everything</h1>
        {
          resourceData.map((resource) => {
            return (
              <article key={resource.id} className={styles.resource}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  <h2 className={styles.nameTitle}>{resource.text}</h2>
                  <p className={styles.description}>{resource.description}</p>
                </a>
              </article>
            )
          })
        }
      </main>
    </Layout>
    
  );
};

export default ConvoPage;