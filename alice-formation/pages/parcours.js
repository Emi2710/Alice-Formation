import React from 'react';
import { Navbar } from '../components';
import { client, urlFor } from '../lib/client';
import {PortableText as BasePortableText} from '@portabletext/react';


const parcours = ({parcours}) => {

  return (
    <div>
      <Navbar />
      {parcours?.map((parcours) => (
        <>
        <div className='parcours'>

          <div className='parcours-heading'>
            <p className='parcours-subtitle'>MON PARCOURS</p>
            <BasePortableText value={parcours.body1}  />
          </div>
          <div className='parcours-mainImage' style={{backgroundImage: `url(${urlFor(parcours.mainImage)})`}}>
          </div>
          <div className='parcours-content'>
            <BasePortableText value={parcours.body2}  />
          </div>
          <div className='quoting'>
            <div>
              <img src={urlFor(parcours.quoteImage)} alt={parcours.quoteImage.alt} className='parcours-quote-img'/>  
            </div>
            <div className='quote-text-block'>
              <hr />
              <p className='quote'>{parcours.quote}</p>
            </div>
            
          </div>
        </div>
        </>
      ))}
      <style jsx>{`
        .parcours-subtitle {
          opacity: 50%;
          font-weight: 500;
        }

      
      `}</style>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "parcours"]';
  const parcours = await client.fetch(query);

  return {
    props: { parcours }
  }

}


export default parcours
