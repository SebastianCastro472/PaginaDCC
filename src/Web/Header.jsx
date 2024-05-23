import React from 'react';
import Instagram from '../Imagenes/instagram.png';
import Facebook from '../Imagenes/facebook.png';
import Logo from '../Imagenes/dolores.png';
import  Principal  from './Paginas/Principal';

export const Header = ({ setCurrentPage }) => {
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
              <img className='LogoDolores' src={Logo} alt="imagen" onClick={() => setCurrentPage('Principal')} />
            </div>
          </div>
        <div className='Menu'>
            <nav>
            <ul>
                    <li><a href="#" onClick={() => setCurrentPage('HazteSocio')}>HAZTE SOCIO</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('Equipo')}>EQUIPO</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('Carreras')}>CARRERAS</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('Comision')}>COMISION</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('Sponsors')}>SPONSORS</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('SobreNosotros')}>SOBRE NOSOTROS</a></li>
                </ul>
            </nav>
        </div>
      </header>  
    )
    
}
export default Header;