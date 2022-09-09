import React from 'react';
import styles from '../styles/Formation.module.css';

import { client } from '../lib/client';
import { Article, HeroBanner, Navbar } from '../components';

const Formation = ({ articles, bannerData }) => {
  return (
    <div>
    <Navbar />
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className={styles.formation__wrapper}>
      {articles?.map((article) => <Article key={article.slug} article={article} />)}
    </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "article"]';
  const articles = await client.fetch(query);

  const bannerQuery = '*[_type == "formation"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { articles, bannerData }
  }

}

export default Formation