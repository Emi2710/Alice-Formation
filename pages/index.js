import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { client, urlFor } from '../lib/client';
import { Navbar } from '../components';
import Link from 'next/link';

import {PortableText as BasePortableText} from '@portabletext/react';

import NewsletterForm from '../components/NewsletterForm';
import { useState } from 'react';



const Home = ({ accueil }) => {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <NewsletterForm trigger={buttonPopup} setTrigger={setButtonPopup} />
    <Navbar />
      <div className={styles.accueil}>

        
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
          <div className={styles.section_calltoaction}>
            <BasePortableText value={accueil.callToAction} />
            <button onClick={() => setButtonPopup(true)} style={{cursor: 'pointer', transition: '0.5s'}}>S'inscrire à la newsletter </button>
          </div> 
          <div className={styles.section_general}>
            <BasePortableText value={accueil.section} />
            <div className='flex-wrap accueil_section_images'>
              {accueil.images?.map((image) => (
                
                  <div key={image}>
                    <a href={image.link} target="_blank" rel="noreferrer">
                      <img src={urlFor(image)} alt={image.alt} className="img-responsive"/> 
                    </a>
                    <p>{image.caption}</p>   
                  
                  </div>
                
              ))}
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