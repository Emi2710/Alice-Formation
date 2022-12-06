import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26686180.js"></Script>
    <Component {...pageProps} />
    </>
    
    
  )
}

export default MyApp
