// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../Imagenes/instagram.png';
import Facebook from '../Imagenes/facebook.png';
import Logo from '../Imagenes/dolores.png';
import Menu from '../Imagenes/menu.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className='Header'>
      <div className='Menuu'>
        <button id="menuButton" className={isActive ? 'active' : ''} onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <div className='Logo'>
        <Link to="/">
          <img className='LogoDolores' src={Logo} alt="imagen" />
        </Link>
      </div>
      <div className='MenuYRedes'>
        <div className={`Menu ${isActive ? 'active' : ''}`} id="menu">
          <ul>
            <li><Link to="/hazte-socio" onClick={handleClick}>HAZTE SOCIO</Link></li>
            <li><Link to="/equipo" onClick={handleClick}>EQUIPO</Link></li>
            <li><Link to="/carreras" onClick={handleClick}>POSTS</Link></li>
            <li><Link to="/comision" onClick={handleClick}>COMISION</Link></li>
            <li><Link to="/sponsors" onClick={handleClick}>SPONSORS</Link></li>
            <li><Link to="/sobre-nosotros" onClick={handleClick}>SOBRE NOSOTROS</Link></li>
          </ul>
        </div>
        <div className='Redes'>
          <a href="https://www.instagram.com/dolorescyclesclub/" target="_blank" rel="noopener noreferrer">
            <img className='LogoRedes' src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556320772475" target="_blank" rel="noopener noreferrer">
            <img className='LogoRedes' src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
