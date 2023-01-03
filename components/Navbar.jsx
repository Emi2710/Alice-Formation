import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { alice, dropdown } from '../assets';
import EmailForm from './EmailForm';
import { useState } from 'react';

const Navbar = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <>
    <EmailForm trigger={buttonPopup} setTrigger={setButtonPopup} />
    <div className='app__navbar'>
        <div className='small-navbar dropdown'>
          <div className='.dropbtn' ><Image src={dropdown} alt='icone de navigation' /></div>
          <div className='small-navlinks'>
            <ul className='dropdown-content'>
              <Link href='/'><li>Accueil</li></Link>
              <Link href='/a-propos'><li>À propos</li></Link>
              <Link href='/formation'><li>Formations</li></Link>
              <Link href='/parcours'><li>Mon parcours</li></Link>
              <Link href='/blog'><li>Blog</li></Link>
            </ul>
          </div>
        </div>
        
        <div className='app__navbar-logo'>
          <Link href="/"><Image src={alice} height="20px" alt="Logo 'Alice" /></Link>
        </div>

        <div className='app__navbar-links'>
          <ul>
              <Link href='/'><li>Accueil</li></Link>
              <Link href='/a-propos'><li>À propos</li></Link>
              <Link href='/formation'><li>Formations</li></Link>
              <Link href='/parcours'><li>Mon parcours</li></Link>
              <Link href='/blog'><li>Blog</li></Link>
          </ul>  
        </div>

        <div>
          <button onClick={() => setButtonPopup(true)}>E-book</button>
        </div>

    </div>
      
    </>
    
    
  )
}

export default Navbar