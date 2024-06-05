const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
import { Link } from 'react-router-dom';
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


const Team = ({ setSelectedProfile }) => {
    const profiles = [
        { name: 'Stefano', image: Tato, nationality: Uruguay, fullname: 'STEFANO URAN' },
        { name: 'Lucas', image: Lucas, nationality: Argentina, fullname: 'LUCAS GADAY' },
        { name: 'Martin', image: Martin, nationality: Uruguay, fullname: 'MARTIN CASTRO' },
        { name: 'Calvo', image: Calvo, nationality: Uruguay, fullname: 'MARTIN CALVO' },
        { name: 'Seba', image: Seba, nationality: Uruguay, fullname: 'SEBASTIAN CASTRO' },
        { name: 'Coro', image: Coro, nationality: Uruguay, fullname: 'LDIEGO PEREYRA' },
        { name: 'Ale', image: Ale, nationality: Uruguay, fullname: 'ALEXANDER GUISOLI' },
        { name: 'Toto', image: Toto, nationality: Uruguay, fullname: 'RODRIGO MARR' },
    ];
    return (
        <div className="Team">
            <div className="Team_titulo">
                <h1>NUESTRO EQUIPO</h1>
            </div>
            <div className="Team_imagenes">
                {profiles.map((profile) => (
                    <div key={profile.name} className="Team_perfil" onClick={() => setSelectedProfile(profile.name)}>
                        <img src={profile.image} alt={profile.name} className="team-image" />
                        <div className="Team_perfil_nomb_nac">
                            <h2>{profile.fullname}</h2>
                            <img src={profile.nationality} alt="Nacionalidad" className="nationality-image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;