import React from 'react';
import { client, urlFor } from '../../lib/client';
import { Footer, Navbar } from '../../components';
import {PortableText as BasePortableText} from '@portabletext/react';
import Head from 'next/head';


import EmailForm from '../../components/EmailForm';
import { useState, useEffect } from 'react';




function BlogDetails ({ blogs, blog }) {

  

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
            images,
            bannerImg
           } = blog;
    
  

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
      <div className='article_banner_img'>
        {bannerImg &&
                <div>
                  <a href={bannerImg.link}  target="_blank" rel="noreferrer">
                    <img src={urlFor(bannerImg)} alt={bannerImg.alt} className='banner_img' />
                    <p className='banner_caption'>{bannerImg.caption}</p>  
                  </a>
                </div>
              }
      </div>
      <div className='article-container'>
        <BasePortableText value={contentBody} />
        <div className='flex-wrap'>
          {images?.map((image) => (
            
              <div key={image}>
                <a href={image.link} target="_blank" rel="noreferrer">
                  <img src={urlFor(image)} alt={image.alt} className="img-responsive"/> 
                </a>
                <p>{image.caption}</p>   
              
              
              </div>
            
            
          ))}
        </div>
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

        <Footer />
    </div>
    </>
    
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `;

  const blogs = await client.fetch(query);

  const paths = blogs.map((blog) => ({
    params: { 
      slug: blog.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blogsQuery = '*[_type == "blog"]'
  
  const blog = await client.fetch(query);
  const blogs = await client.fetch(blogsQuery);


  return {
    props: { blogs, blog }
  }
}


export default BlogDetails