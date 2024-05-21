import  Productos  from '../Components/Productos';
import  Slides  from '../Components/ImageSlider';
import TeamSlides from '../Components/TeamSlider';

export const Principal = () => {
    return ( 
        <div className="Cuerpo">
            <h1>CARRERAS</h1>
            <div>
            <Slides/>{ }
            </div>
            <h1>Eqipo</h1>
            <div>
            <TeamSlides/>{}
            </div>
            <h1>Productos</h1>
            <Productos/>{}
        </div>
    )
}
export default Principal;