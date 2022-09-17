import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { client, urlFor } from '../lib/client';
import { Navbar } from '../components';
import Link from 'next/link';


const Home = ({ accueil }) => {
  return (
    <>
      

      <div>

        
          {accueil?.map((accueil) => (
            <>
          <Head>  
            <title>{accueil.metaTitle}</title>
            <meta
              name="description"
              content={accueil.description} />
            <meta name="keywords" content={accueil.tags} />
          </Head>
            </>
          ))}
        

        <Navbar />
        {accueil?.map((accueil) => (
          <>
          <div className={styles.accueil__wrap}>
            <div className={styles.accueil__container}>
              <div>
                <h1 className='bold-title'>{accueil.title}</h1>
                <p>{accueil.paragraph}</p>
                <Link href='/formation'><button style={{cursor: 'pointer', transition: '0.5s'}}>En savoir plus → </button></Link>  
              </div> 
            </div>
            <div className={styles.accueil__img}>
              <img src={urlFor(accueil.imgUrl)} align='bottom' alt="Image vectorisée Alice" />
            </div>  
          </div>
          
          </>
        ))}
      </div>
    </>
    
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "accueil"]';
  const accueil = await client.fetch(query);

  return {
    props: { accueil }
  }

}


export default Home