import  Productos  from '../Components/Productos';
import  Slides  from '../Components/ImageSlider';
import TeamSlides from '../Components/TeamSlider';
import Sponsor_principal from '../Components/Sponsors_principal';

export const Principal = () => {
    return ( 
        <div className="Cuerpo">    
            <div>
            <Slides/>{ }
            </div>         
            <div className='sldEquipo'>
            <h1>CONOCE NUESTRO EQUIPO</h1>
            <TeamSlides/>{}
            </div>
            <div>
            <Sponsor_principal/>{}
            </div>
            
        </div>
    )
}
export default Principal;