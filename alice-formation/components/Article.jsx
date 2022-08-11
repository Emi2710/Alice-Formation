import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import article from '../sanity/schemas/article';

const Article = ({ article: { slug, image1, tag, lecture, titre} }) => {
  return (
    <div>
        <Link href={`/formation/${slug.current}`}>
            <div>
              <img 
                src={urlFor(image1)}
                width={250}
                height={250}
              />
              <h2>{titre}</h2>
              <p>{lecture}</p>
              <button>Lire l'article</button>

            </div>
        </Link>
    </div>
  )
}

export default Article