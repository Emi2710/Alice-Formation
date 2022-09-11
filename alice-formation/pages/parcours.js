import React from 'react';
import { Navbar } from '../components';
import { client, urlFor } from '../lib/client';
import {PortableText} from '@portabletext/react'


const parcours = ({parcours}) => {
  
  return (
    <div>
      <Navbar />
      {parcours?.map((parcours) => (
        <>
        <div>
          <h1>{parcours.title}</h1>
          <div className='portable-text'>
            <PortableText value={parcours.body} />  
          </div>
          
        </div>
        </>
      ))}
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