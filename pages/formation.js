import React, { useState } from 'react';
import styles from '../styles/Formation.module.css';
import Head from 'next/head'
import categories from '../components/categories';

import { client } from '../lib/client';
import { Article, Footer, HeroBanner, Navbar } from '../components';

const Formation = ({ articles, bannerData }) => {

  const [activeFilter, setActiveFilter] = useState('Tout');
  const [filterItem, setFilterItem] = useState(articles);

  const handleFilter = (item) => {
      setActiveFilter(item);

      if(item ==='Tout') {
        setFilterItem(articles);
      } else {
        setFilterItem(articles.filter((article) =>article.tags.includes(item)))
      } 
  }


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

    <div>
      <div className='display-flex'>
       {categories.map((item, index) => (
                <div 
                  key={index} 
                  className="tag"
                  onClick={() => handleFilter(item)}
                >
                  {item}
                </div>
              ))} 
      </div>
       
        <div className={styles.formation__wrapper}>
          {filterItem?.map((article) => <Article key={article.slug} article={article} />)}
        </div>
      
    </div>
    <Footer />

    <style jsx>
          {`
            .display-flex {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin: 1.5rem 0 3.5rem 0;
              text-align: center;
              
            }
            
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

            

            


          `}</style>
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