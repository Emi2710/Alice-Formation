import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import InputField from '../components/InputField';
import emailjs from '@emailjs/browser';

import { done } from '../assets';
import Image from 'next/image';


import { client, urlFor } from '../lib/client';
import { Navbar } from '../components';
import Link from 'next/link';

import {PortableText as BasePortableText} from '@portabletext/react';



const Home = ({ accueil }) => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_b5u331l', 'template_4rolrge', values, 'muinY_WppOTlc3R1T')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }



  //const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
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
            {status && renderAlert()}
              <form onSubmit={handleSubmit} className="calltoaction-form">
                <InputField value={values.email} handleChange={handleChange} name="email" type="email" placeholder="Votre adresse mail" />
                <button type="submit"
                > <Image src={done} alt="Icone" width="20px" />
                </button>
              </form>
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

const renderAlert = () => (
  <div className="success-msg">
    <p>Merci ! Votre demande a bien été prise en compte.</p>
  </div>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "accueil"]';
  const accueil = await client.fetch(query);

  return {
    props: { accueil }
  }

}


export default Home