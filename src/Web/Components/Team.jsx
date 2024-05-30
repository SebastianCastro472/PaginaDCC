const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Ale = new URL('../../imagenes/Ciclistas/ale.jpg', import.meta.url).href;
const Calvo = new URL('../../imagenes/Ciclistas/Calvo.jpg', import.meta.url).href;
const Coro = new URL('../../imagenes/Ciclistas/Coro.jpg', import.meta.url).href;
const Martin = new URL('../../imagenes/Ciclistas/Martin.jpg', import.meta.url).href;
const Lucas = new URL('../../imagenes/Ciclistas/Perfil.jpg', import.meta.url).href;
const Seba = new URL('../../imagenes/Ciclistas/Seba.jpg', import.meta.url).href;
const Tato = new URL('../../imagenes/Ciclistas/Tato.jpg', import.meta.url).href;
const Toto = new URL('../../imagenes/Ciclistas/Toto.jpg', import.meta.url).href;
const Uruguay = new URL('../../imagenes/uruguay.png', import.meta.url).href;
const Argentina = new URL('../../imagenes/argentina.png', import.meta.url).href;


const Team = () => {
    return (
     <div className="Team">
        <div className="Team_titulo">
            <h1>NUESTRO EQUIPO</h1>
        </div>
        <div className="Team_imagenes"> 
            <div className="Team_perfil">
                <img src={Lucas} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>LUCAS GADAY </h2>
                        <img src={Argentina} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Martin} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>MARTIN CASTRO </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Coro} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>DIEGO PEREYRA </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Calvo} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>MARTIN CALVO </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Seba} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>SEBASTIAN CASTRO </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Tato} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>STEFANO URAN </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Ale} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>ALEXANDER GUISOLI </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
            <div className="Team_perfil">
                <img src={Toto} alt="" className="team-image" />
                    <div className="Team_perfil_nomb_nac">
                        <h2>RODRIGO MARR </h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>      
            </div>
        </div>
     </div>
    )
}
export default Team;