const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Redes1 = new URL('../../imagenes/instagram.png', import.meta.url).href;
const Redes2 = new URL('../../imagenes/facebook.png', import.meta.url).href;
const NACIONALIDAD = new URL('../../imagenes/uruguay.png', import.meta.url).href;
const Foto = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;

const Team = () => {
    return (
    <div className="Perfil">
        <div className="Perfil-SolidoFoto">
            <div className="Perfil-Foto">
                <img src={Foto} alt="" />
            </div>
            <div className="Perfil-Solido" style={{ backgroundColor: 'green' }}>
                
            </div>
        </div>
        <div className="Perfil-InfoEspacio">
            <div className="Perfil-Info">
                <h2>info</h2>
            </div>
            <div className="Perfil-Espacio">
                <h2>Perfil</h2>
            </div>
        </div>
    </div>
    )
}
export default Team;