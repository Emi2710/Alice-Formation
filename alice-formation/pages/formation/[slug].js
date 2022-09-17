import React from 'react';
import { client, urlFor } from '../../lib/client';
import { Navbar } from '../../components';
import {PortableText as BasePortableText} from '@portabletext/react';
import Head from 'next/head'

import EmailForm from '../../components/EmailForm';
import { useState, useEffect } from 'react';

const ArticleDetails = ({ articles, article }) => {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 17000);
  }, [])

    const { titre,
            date, 
            tags,
            lecture, 
            image1,
            sommaire, 
            contentBody,
            metaTitle,
            description,
            tagsSeo,
           } = article;

  return (
    <>
    <Head>
          <title>{metaTitle}</title>
            <meta
              name="description"
              content={description} />
            <meta name="keywords" content={tagsSeo} />
        </Head>
    <EmailForm trigger={timedPopup} setTrigger={setTimedPopup} />
    <Navbar />
    <div className='article-wrapper'>
      
      <div className='article-heading'>
        <div className='article-heading-content'>
          <p className='date'>{date}</p>
          <h1 className='bold-title'>{titre}</h1>
          <div className='article-display-flex'>
              <p className='article-tag'>{tags}</p>
              <p className='article-lecture'>{lecture}</p>
          </div>  
        </div>
        
        <div className='article-mainImage' style={{backgroundImage:`url(${urlFor(image1)})`}}></div>
      </div>
      
      <div className='sommaire'>
        {sommaire?.map((sommaireTitle) => (
          <>
            <p>{sommaireTitle}</p>  
          </>
        ))}
        
        
      </div>
      <div className='article-container'>
        <BasePortableText value={contentBody} />
      </div>
        
        <style jsx>{`

          .date{
            font-weight: 500;
            opacity: 50%;
          }

          .article-tag {
            background-color: #41383A;
            width: 25%;
            color: #fff;
            text-align: center;
            border-radius: 15px;
            font-size: 16px;
            padding: 2px;
          }

          .article-heading-content {
            max-width: 650px;
            margin: 5rem auto 1rem auto;
            padding: 15px;
          }

          .article-mainImage {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 50vh;
          }

          .article-display-flex {
            display:flex;
            align-items: center;
          }

          .article-lecture {
            margin-left: 15px;
            opacity: 75%;
            font-size: 16px;
          }

          .article-container div p{
            margin-top: 25px;
            opacity: 80%;
          }

          .article-container {
            padding: 15px;
            width: 80%;
            margin: 1rem auto 3rem auto;
          }

          .article-container img {
            margin-top: 25px;
          }


          .sommaire {
            margin: 3rem auto 0 auto;
            width: 76%;
            opacity: 50%;
          }

          .sommaire p {
            margin-bottom: 8px;
            position: relative;
          }

          .sommaire p::before {
            position: absolute;
            left: -28px;
            bottom: 10px;
            margin: auto;
            width: 2%;
            content: '';
            background: rgba(22, 22, 22, 0.5);
            height: 2px;
          }
        
        `}</style>
    </div>
    </>
    
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