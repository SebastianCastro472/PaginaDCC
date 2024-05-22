const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Redes1 = new URL('../../imagenes/instagram.png', import.meta.url).href;
const Redes2 = new URL('../../imagenes/facebook.png', import.meta.url).href;
const NACIONALIDAD = new URL('../../imagenes/uruguay.png', import.meta.url).href;

const Team = () => {
    return (
     <div className="Perfil">
        <div className="Perfil_content">
        <div className="Perfil_foto_redes">
            <div className="Perfil_foto">
                <img src={Perfil1} alt="" className="perfil-image" />
            </div>
            
        </div>
        <div className="Perfil_info">
            <div className="name-and-flag">
                <h1>NOMBRE</h1>
                <img src={NACIONALIDAD} alt="Nacionalidad" className="nationality-image" />
            </div>
            <div className="info-container">
                <div className="info-item">
                    <h2>NACIONALIDAD</h2>
                    <h3>URUGUAYO</h3>
                </div>
            <div className="info-item">
                <h2>EDAD</h2>
                <h3>23</h3>
            </div>
            <div className="info-item">
                <h2>NACIMIENTO</h2>
                <h3>23/07/2002</h3>
            </div>
            <div className="info-item">
                <h2>ALTURA</h2>
                <h3>1.82 m</h3>
            </div>
            <div className="info-item">
                <h2>PESO</h2>
                <h3>70 KG</h3>
            </div>
            <div className="info-item">
                <h2>EDAD</h2>
                <h3>23</h3>
            </div>
            <div className="info-item">
                <h2>EDAD</h2>
                <h3>23</h3>
            </div>
            <div className="Perfil_redes">
                <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
            </div>
        </div>
        </div>
        </div>
     </div>
    )
}
export default Team;