const Foto = new URL('../../../imagenes/Ciclistas/Martin/Martin-Fondo.jpg', import.meta.url).href;
const insta = new URL('../../../imagenes/instagram1.png', import.meta.url).href;
const face = new URL('../../../imagenes/facebook1.png', import.meta.url).href;
const tato = new URL('../../../imagenes/Ciclistas/Martin/Martin-sf.png', import.meta.url).href;
import React from 'react';

const Perfil_Martin = () => {
    return (
    <div className="Perfil">
        <div className="Perfil-SolidoFoto">
            <div className="Perfil-Foto">
                <img src={Foto} alt="" />
                <h2>Martin</h2>
                <h1>Castro</h1>
                <p>fsefwef</p>
            </div>
            <div className="Perfil-Solido" >
                
            </div>
        </div>
        <div className="Perfil-InfoEspacio">
            <div className="Perfil-Info">
                <div className="Perfil-letras">
                    <div className="item1">
                        <h2>NOMBRE</h2>
                        <h2>APELLIDOS</h2>
                        <h2>NACIONALIDAD</h2>
                        <h2>ALTURA</h2>
                        <h2>PESO</h2>
                    </div>
                    <div className="item2">
                        <h3>Martin</h3>
                        <h3>Castro Nebot</h3>
                        <h3>Uruguayo</h3>
                        <h3>1.75m</h3>
                        <h3>70Kg</h3>
                    </div>
                </div>
            </div>
            <div className="Perfil-Espacio">
                <img src={tato} alt="" />
                <div className="Perfil-redes">
                    <div className="Perfil-insta">
                        <img src={insta} alt="" />
                    </div>
                    <div className="Perfil-face">
                        <img src={face} alt="" />
                    </div>
                
                </div>
            </div>    
        </div>
    </div>
    )
}
export default Perfil_Martin;