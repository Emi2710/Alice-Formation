import React from 'react';

import { client, urlFor } from '../lib/client';
import { Navbar } from '../components';

const apropos = ({ aPropos }) => {
  return (
    <div>
      <Navbar />
      {aPropos?.map((aPropos) => (
        <div className='apropos-wrapper'>
          
            <div className='heading'>
              <p className='apropos-subtitle'>QUI SUIS-JE ?</p>
              <h1 className='medium-title'>Je suis la pour vous aider à trouver <span className='medium-italic-title'>le métier de vos rêves</span></h1>
              <hr />
            </div>
            <div className='display-flex2'>
              <div className='content'>
                <p>{aPropos.content1}</p>
                <p>{aPropos.content2}</p>
                <p>{aPropos.content3}</p>
                <img src={urlFor(aPropos.signature)} alt='Signature' className='signature-img'/>
              </div>
          
              <div className='apropos-img'>
                <img src={urlFor(aPropos.image)} alt='Espace de travail avec vue sur couché du soleil' />
              </div>
            </div>

          

        </div>
        
      ))}

      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "aPropos"]';
  const aPropos = await client.fetch(query);


  return {
    props: { aPropos }
  }

}

export default apropos