import React, { useState } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Article = ({ article: { slug, image1, preview, tags, lecture, titre} }) => {

  return (
    <div className='article-bordel'>
        
        <Link href={`/formation/${slug.current}`}>
            
              
              <div className='formation-article-wrapper'>

                <div className='formation-article-img' style={{backgroundImage: `url(${urlFor(image1)})`}}>
                  
                </div>

                <div className='formation-article'>
                  <div className='display-flex'>
                    <p className='tag'>{tags}</p>
                    <p className='lecture'>{lecture}</p>
                  </div>

                  <div className='formation-article-container'>
                    <h2 className='bold-title'>{titre}</h2>
                    <p>{preview}</p>
                  </div>  
                </div>

                

              </div>
            
            
        </Link>

        <style jsx>{`

          .article-bordel {
            max-width: 600px;
          }

          .formation-article-img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 330px;
            height: 35vh;
            max-height: 220px;
            border-radius: 12px;
            margin-left: 0.5rem;
          }

          .formation-article {
            margin-left: 1rem;
          }
          
          .formation-article-wrapper {
            display: flex;
            align-items: center;
            margin-bottom:3rem;
            
          }
          

          .display-flex {
            display: flex;
            align-items:center;
          }

          .tag {
            margin-right: 1rem;
            padding: 0.3rem 0.8rem;
            background: var(--tag-color);
            color: var(--white);
            font-size: 14px;
            border-radius: 12px;
            
          }

          .lecture {
            font-size: 14px;
            opacity: 75%;
          }

          .formation-article-container p {
            max-width: 420px;
          }

          

        
        `}</style>
    </div>
  )
}

export default Article