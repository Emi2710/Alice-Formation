import React from 'react';

import { client, urlFor } from '../../lib/client';

const ArticleDetails = ({ articles, article }) => {

    const { titre,
            date, 
            lecture, 
            image1, 
            preview, 
            sousTitre1, 
            paragraph1, 
            img1, 
            sousTitre2, 
            paragraph2, 
            img2, 
            sousTitre3, paragraph3, img3, sousTitre4, paragraph4, img4, sousTitre5, paragraph5, img5, sousTitre6, paragraph6, img6 } = article;

  return (
    <div>
        <h2>{titre}</h2>
        
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "article"] {
    slug {
      current
    }
  }
  `;

  const articles = await client.fetch(query);

  const paths = articles.map((article) => ({
    params: { 
      slug: article.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "article" && slug.current == '${slug}'][0]`;
  const articlesQuery = '*[_type == "article"]'
  
  const article = await client.fetch(query);
  const articles = await client.fetch(articlesQuery);


  return {
    props: { articles, article }
  }
}


export default ArticleDetails