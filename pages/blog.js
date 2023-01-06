import React, { useState } from 'react';
import styles from '../styles/Formation.module.css';
import Head from 'next/head'
//import categories from '../components/categories';

import { client, urlFor } from '../lib/client';
import {PortableText as BasePortableText} from '@portabletext/react';

import { BlogBanner, BlogPreview, Footer, HeroBanner, Navbar } from '../components';

const Blog = ({ blogs, bannerData }) => {

  /*const [activeFilter, setActiveFilter] = useState('Tout');
  const [filterItem, setFilterItem] = useState(articles);*/

  /*const handleFilter = (item) => {
      setActiveFilter(item);

      if(item ==='Tout') {
        setFilterItem(articles);
      } else {
        setFilterItem(articles.filter((article) =>article.tags.includes(item)))
      } 
  }*/


  return (
    <div>
      
        
      
    
    <Navbar />

    <div>
      
       
    <div>
    {blogs?.map((blog) => <>
            
      <div className='article-heading'>
        <div className='article-heading-content'>
          <p className='date'>{blog.date}</p>
          <h1 className='bold-title'>{blog.titre}</h1>
          <div className='article-display-flex'>
              <p className='article-tag'>{blog.tags}</p>
              <p className='article-lecture'>{blog.lecture}</p>
          </div>  
        </div>
        
        <div className='article-mainImage' style={{backgroundImage:`url(${urlFor(blog.image1)})`}}></div>
      </div>
      
      <div className='sommaire'>
        {blog.sommaire?.map((sommaireTitle) => (
          <>
            <p>{sommaireTitle}</p>  
          </>
        ))}
        
        
      </div>
      <div className='article_banner_img'>
        {blog.bannerImg &&
                <div>
                  <a href={blog.bannerImg.link}  target="_blank" rel="noreferrer">
                    <img src={urlFor(blog.bannerImg)} alt={blog.bannerImg.alt} className='banner_img' />
                    <p className='banner_caption'>{blog.bannerImg.caption}</p>  
                  </a>
                </div>
              }
      </div>
      <div className='article-container'>
        <BasePortableText value={blog.contentBody} />
        <div className='flex-wrap'>
          {blog.images?.map((image) => (
            
              <div key={image}>
                <a href={image.link} target="_blank" rel="noreferrer">
                  <img src={urlFor(image)} alt={image.alt} className="img-responsive"/> 
                </a>
                <p>{image.caption}</p>   
              
              
              </div>
            
            
          ))}
        </div>
      </div>
          </>)}
        </div>
      
    </div>
    <Footer />

    <style jsx>
          {`
            
            
            .tag {
              margin: 0.3rem 0.3rem;
              padding: 0.3rem 0.5rem;
              background: var(--tag-color);
              color: var(--white);
              font-size: 14px;
              border-radius: 12px;
              min-width: 115px;
              cursor: pointer;
            }

            .tag:hover {
              cursor: pointer;
            }

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

          .article-container div ul li{
            opacity: 80%;
          }

          .article-container {
            padding: 15px;
            
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

          .img-responsive {
            max-width: 100%;
            max-height: 100%;
          }

            

            


          `}</style>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);

  /*const bannerQuery = '*[_type == "formation"]';
  const bannerData = await client.fetch(bannerQuery);*/

  return {
    props: { blogs }
  }

}

export default Blog