import React from 'react';
import Instagram from '../Imagenes/instagram.png';
import Facebook from '../Imagenes/facebook.png';
import Logo from '../Imagenes/dolores.png';

export const Header = () => {
    return (
        <header className='Header'>   
          
          <div className='logoyredes'>
            <div className='Redes'>
              <a href="https://www.instagram.com/dolorescyclesclub/" target="_blank" rel="noopener noreferrer">
                <img className='LogoRedes' src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556320772475" target="_blank" rel="noopener noreferrer">
                <img className='LogoRedes' src={Facebook} alt="Facebook" />
              </a>
            </div>
            <div className='Logo'>
              <img className='LogoDolores' src={Logo} alt="imagen" />
            </div>
          </div>
        <div className='Menu'>
            <nav>
                <ul>
                <li><a href="#" >HAZTE SOCIO</a></li>
                <li><a href="#">EQUIPO</a></li>
                <li><a href="#">TEMPORADA 2023-2024</a></li>
                <li><a href="#">COMISION</a></li>
                <li><a href="#">SPONSORS</a></li>
                <li><a href="#">SOBRE NOSOTROS</a></li>
                </ul>
            </nav>
        </div>
      </header>  
    )
    
}
export default Header;