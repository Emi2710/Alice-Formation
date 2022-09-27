import React, { useState } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Article = ({ article: { slug, image1, preview, tags, lecture, titre} }) => {

  return (

    <div className='article-bordel'>
        
        <Link href={`/formation/${slug.current}`}>
            
              
              <div className='formation-article-wrapper'>

                <div className='formation-article-img' style={{backgroundImage: `url(${urlFor(image1)})`}}></div>

                <div className='formation-article'>
                  <div className='display-flex' >
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

          

          .formation-article-img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 38vh;
            width: 35vw;
            min-width: 160px;
            border-radius: 12px;
          }
          
          .formation-article-img img {
            border-radius: 15px;
            height: 220px;
          }
          .formation-article {
            margin-left: 1rem;
          }
          
          .formation-article-wrapper {
            display: flex;
            align-items: center;
            margin-bottom:2rem;
            padding: 0.8rem;
            
          }
          
          .display-flex {
            display: flex;
            align-items: center;
          }
          
          .tag {
            margin-right: 0.5rem;
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

        
        `}</style>
    </div>
  )
}

export default Article