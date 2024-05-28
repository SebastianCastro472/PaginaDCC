import  Productos  from '../Components/Productos';
import  Slides  from '../Components/ImageSlider';
import TeamSlides from '../Components/TeamSlider';

export const Principal = () => {
    return ( 
        <div className="Cuerpo">    
            <div>
            <Slides/>{ }
            </div>         
            <div className='sldEquipo'>
            <h1>EQUIPO</h1>
            <TeamSlides/>{}
            </div>
            
        </div>
    )
}
export default Principal;