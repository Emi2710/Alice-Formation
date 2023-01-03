import React, { useState } from 'react';
import styles from '../styles/Formation.module.css';
import Head from 'next/head'
//import categories from '../components/categories';

import { client } from '../lib/client';
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

    <BlogBanner />
    <div>
      <div className='display-flex'>
       {/*categories.map((item, index) => (
                <div 
                  key={index} 
                  className="tag"
                  onClick={() => handleFilter(item)}
                >
                  {item}
                </div>
       ))*/} 
      </div>
       
        <div className={styles.formation__wrapper}>
          {blogs?.map((blog) => <BlogPreview key={blog.slug} blog={blog} />)}
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
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);

  /*const bannerQuery = '*[_type == "formation"]';
  const bannerData = await client.fetch(bannerQuery);*/

  return {
    props: { blogs }
  }

}

export default Blog