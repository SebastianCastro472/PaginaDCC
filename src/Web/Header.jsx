import React, { useState } from 'react';
import Instagram from '../Imagenes/instagram.png';
import Facebook from '../Imagenes/facebook.png';
import Logo from '../Imagenes/dolores.png';
import  Principal  from './Paginas/Principal';
import Menu from '../Imagenes/menu.png';


const Header = ({ setCurrentPage }) => {
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
          <img className='LogoDolores' src={Logo} alt="imagen" onClick={() => setCurrentPage('Principal')} />
        </div>
        <div className='MenuYRedes'>
          <div className={`Menu ${isActive ? 'active' : ''}`} id="menu">
              <ul>
                <li><a href="#" onClick={() => setCurrentPage('HazteSocio')}>HAZTE SOCIO</a></li>
                <li><a href="#" onClick={() => setCurrentPage('Equipo')}>EQUIPO</a></li>
                <li><a href="#" onClick={() => setCurrentPage('Carreras')}>POSTS</a></li>
                <li><a href="#" onClick={() => setCurrentPage('Comision')}>COMISION</a></li>
                <li><a href="#" onClick={() => setCurrentPage('Sponsors')}>SPONSORS</a></li>
                <li><a href="#" onClick={() => setCurrentPage('SobreNosotros')}>SOBRE NOSOTROS</a></li>
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
