import Logo1 from '../Imagenes/sponsors/1.png';
import Logo2 from '../Imagenes/sponsors/2.png';
import Logo3 from '../Imagenes/sponsors/3.png';
import Logo4 from '../Imagenes/sponsors/4.png';
import Logo6 from '../Imagenes/sponsors/6.png';
import Logo7 from '../Imagenes/sponsors/7.png';
import Logo8 from '../Imagenes/sponsors/8.png';
import Logo9 from '../Imagenes/sponsors/9.png';
import Logo10 from '../Imagenes/sponsors/10.png';
import Logo11 from '../Imagenes/sponsors/11.png';
import Logo12 from '../Imagenes/sponsors/12.png';
import Logo13 from '../Imagenes/sponsors/13.png';
import Logo14 from '../Imagenes/sponsors/14.png';
import Logo15 from '../Imagenes/sponsors/15.png';
import Logo16 from '../Imagenes/sponsors/16.png';
import Logo17 from '../Imagenes/sponsors/17.png';
import Logo18 from '../Imagenes/sponsors/18.png';
import Logo19 from '../Imagenes/sponsors/19.png';
import Logo20 from '../Imagenes/sponsors/20.png';
import Logo21 from '../Imagenes/sponsors/21.png';
import Logo22 from '../Imagenes/sponsors/22.png';
import Logo from '../Imagenes/dolores.png';

export const Footer = () => {
    return ( 
        <footer className='Footer'>
        <div className='Logo_footer'>
          <img className='LogoDolores-footer' src={Logo} alt="imagen" />
        </div>   
        <div className='sponsors1'>
          <img className='LogoSponsors1' src={Logo15} alt="Logo" />
          <img className='LogoSponsors1' src={Logo10} alt="Logo" />
        </div>
        <div className='sponsors'>
          <img className='LogoSponsors' src={Logo1} alt="Logo" />
          <img className='LogoSponsors' src={Logo2} alt="Logo" />
          <img className='LogoSponsors' src={Logo3} alt="Logo" />
          <img className='LogoSponsors' src={Logo4} alt="Logo" />
          <img className='LogoSponsors' src={Logo6} alt="Logo" />
          <img className='LogoSponsors' src={Logo7} alt="Logo" />
          <img className='LogoSponsors' src={Logo8} alt="Logo" />
          <img className='LogoSponsors' src={Logo9} alt="Logo" />     
          <img className='LogoSponsors' src={Logo11} alt="Logo" />
          <img className='LogoSponsors' src={Logo12} alt="Logo" />
          <img className='LogoSponsors' src={Logo13} alt="Logo" />
          <img className='LogoSponsors' src={Logo14} alt="Logo" />        
          <img className='LogoSponsors' src={Logo16} alt="Logo" />
          <img className='LogoSponsors' src={Logo17} alt="Logo" />
          <img className='LogoSponsors' src={Logo18} alt="Logo" />
          <img className='LogoSponsors' src={Logo19} alt="Logo" />
          <img className='LogoSponsors' src={Logo20} alt="Logo" />
          <img className='LogoSponsors' src={Logo21} alt="Logo" />
          <img className='LogoSponsors' src={Logo22} alt="Logo" />
        </div>
        <div className='container-footer'>
            <p>&copy; 2024 Dolores Cycles Club. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
}