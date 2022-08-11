import React from 'react';

import { client } from '../lib/client';
import { Article, HeroBanner } from '../components';

const Formation = ({ articles, bannerData }) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div>
      {articles?.map((article) => <Article key={article._id} article={article} />)}
    </div>
    </>
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