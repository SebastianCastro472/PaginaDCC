const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Redes1 = new URL('../../imagenes/instagram.png', import.meta.url).href;
const Redes2 = new URL('../../imagenes/facebook.png', import.meta.url).href;
const Carrera1 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;


const Comision_staff = () => {
    return (
     <div className="Carreras">
        <div className="Carreras_titulo">
            <h1>Nuestra Comision</h1>
        </div>
        <div className="Carreras_imagenes"> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            <div className="Carreras_staff">
                <h1>Ruta de america</h1>
                <img src={Carrera1} alt="" className="staff-image" />
                <p>21-23 Noviembre</p>
            </div> 
            
        </div>
     </div>
    )
}
export default Comision_staff;