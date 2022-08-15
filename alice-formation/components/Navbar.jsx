import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { alice } from '../assets';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';




const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='app__navbar'>

        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} className="menu__hamburger" />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <ul>
              <Link href='/'><li>Accueil</li></Link>
              <Link href='/a-propos'><li>À propos</li></Link>
              <Link href='/formation'><li>Formations</li></Link>
              <Link href='/parcours'><li>Mon parcours</li></Link>
          </ul>  
            </ul>
          </div>
        )}
      </div>
        <div className='app__navbar-logo'>
          <Link href="/"><Image src={alice} height="20px" alt="Logo 'Alice'" /></Link>
          
        </div>

        <div className='app__navbar-links'>
          <ul>
              <Link href='/'><li>Accueil</li></Link>
              <Link href='/a-propos'><li>À propos</li></Link>
              <Link href='/formation'><li>Formations</li></Link>
              <Link href='/parcours'><li>Mon parcours</li></Link>
          </ul>  
          
        </div>

        <div>
          <button>S'inscrire</button>
        </div>

        <style jsx>{`
          
        
        `}</style>
        
    </div>
  )
}

export default Navbar