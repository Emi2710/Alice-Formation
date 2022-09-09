import React from 'react';

import { client, urlFor } from '../lib/client';
import { Navbar } from '../components';

const apropos = ({ aPropos }) => {
  return (
    <div>
      <Navbar />

      {aPropos?.map((aPropos) => (
        <div className='apropos-wrapper'>
          <p className='apropos-subtitle'>QUI SUIS-JE ?</p>
          <h1 className='medium-title'>Je suis là pour vous aider à trouver <span className='medium-italic-title'l>le métier de vos rêves </span></h1>
          <hr />
          <div className='apropos-flex'>
            <div>
              {aPropos.content.map((paragraph, titre) => (
                <>
                <p className='apropos-paragraph'>{paragraph}</p>
                
                </>
              ))}   
              <img src={urlFor(aPropos.signature)} alt='signature' className='signature' /> 

            </div>
            <div className='illustration' style={{backgroundImage: `url(${urlFor(aPropos.imgUrl)})`}}>
            </div>
            

          </div>
          
        </div>
      ))}

      <style jsx>{`

        .apropos-subtitle {
          opacity: 50%;
          font-weight: 500;
        }
        .apropos-paragraph {
          margin: 3rem 3rem 0 0;
          opacity: 80%;
        }

        .apropos-wrapper {
          padding: 3.5rem;
          margin-top: 2rem;
        }

        .apropos-wrapper hr {
          margin-top: 2rem;
        }

        .apropos-wrapper h1 {
          max-width: 700px;
        }

        .signature {
          margin-top: 3rem;
        }

        .apropos-flex {
          display: flex;
        }



        .illustration {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 12px;
            margin-left: 0.5rem;
            width: 100vw;
            margin: 3rem;
          }
      `}</style>
        
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