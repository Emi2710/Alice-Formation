import React from 'react';
import styles from '../styles/Formation.module.css';
import Head from 'next/head'

import { client } from '../lib/client';
import { Article, Footer, HeroBanner, Navbar } from '../components';

const Formation = ({ articles, bannerData }) => {
  return (
    <div>
      {bannerData?.map((formation) => (
        <>
        <Head>
          <title>{formation.metaTitle}</title>
            <meta
              name="description"
              content={formation.description} />
            <meta name="keywords" content={formation.tags} />
        </Head>
        </>
      ))}
    
    <Navbar />
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className={styles.formation__wrapper}>
      {articles?.map((article) => <Article key={article.slug} article={article} />)}
    </div>
    <Footer />
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