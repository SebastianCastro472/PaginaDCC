const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Redes1 = new URL('../../imagenes/instagram.png', import.meta.url).href;
const Redes2 = new URL('../../imagenes/facebook.png', import.meta.url).href;
const Carrera1 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const Ruta = new URL('../../imagenes/Carreras/Ruta.jpg', import.meta.url).href;
const Nacionales = new URL('../../imagenes/Carreras/Nacionales.jpg', import.meta.url).href;
const Vuelta = new URL('../../imagenes/Carreras/Vuelta.jpg', import.meta.url).href;
const Chana = new URL('../../imagenes/Carreras/Chana.jpg', import.meta.url).href;

const Comision_staff = () => {
    return (
     <div className="Carreras">
        <div className="Carreras_titulo">
            <h1>POSTS</h1>
        </div>
        <div className="Carreras_imagenes"> 
            <div className="Carreras_staff">
                <img src={Vuelta} alt="" className="staff-image" />
                <h1>Vuelta del Uruguay</h1>
                <p>21-31 Marzo - 2024</p>
            </div> 
            <div className="Carreras_staff">
                <img src={Ruta} alt="" className="staff-image" />
                <h1>Ruta de america</h1>
                <p>10-18 Febrera - 2024</p>
            </div> 
            <div className="Carreras_staff">
                <img src={Chana} alt="" className="staff-image" />
                <h1>Vuelta Chana</h1>
                <p>25-28 Enero - 2024</p>
            </div> 
            <div className="Carreras_staff">
                <img src={Nacionales} alt="" className="staff-image" />
                <h1>Nacionales</h1>
                <p>20-21 Enero - 2024</p>
            </div>        
        </div>
     </div>
    )
}
export default Comision_staff;