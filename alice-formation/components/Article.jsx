import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Article = ({ article: { slug, image1, preview, tags, lecture, titre} }) => {
  return (
    <div>
        <Link href={`/formation/${slug.current}`}>
            <div>
              <div className='formation-article-wrapper'>

                <div className='formation-article-img'>
                  <img 
                    src={urlFor(image1)}
                    width={250}
                    height={175}
                  />
                </div>

                <div>
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
            
            </div>
        </Link>

        <style jsx>{`

          .formation-article-img {
            padding: 0.5rem;
          }
          
          .formation-article-wrapper {
            display: flex;
            align-items: center;
          }

          .formation-article-wrapper img {
            border-radius: 15px;
            padding: 0.5rem;
          }

          .display-flex {
            display: flex;
            align-items:center;
          }

          .tag {
            margin-right: 1rem;
            padding: 0.3rem;
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