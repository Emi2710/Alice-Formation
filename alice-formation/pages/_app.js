import React from 'react';
import Head from 'next/head'
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    </Head>
    <Component {...pageProps} />
    </>
    
    
  )
}

export default MyApp
