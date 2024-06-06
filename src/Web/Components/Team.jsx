const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
import { Link } from 'react-router-dom';
const Ale = new URL('../../imagenes/Ciclistas/Ale/ale.jpg', import.meta.url).href;
const Calvo = new URL('../../imagenes/Ciclistas/Calvo/Calvo.jpg', import.meta.url).href;
const Coro = new URL('../../imagenes/Ciclistas/Coro/Coro.jpg', import.meta.url).href;
const Martin = new URL('../../imagenes/Ciclistas/Martin/Martin.jpg', import.meta.url).href;
const Lucas = new URL('../../imagenes/Ciclistas/Lucas/Lucas.jpg', import.meta.url).href;
const Seba = new URL('../../imagenes/Ciclistas/Seba/Seba.jpg', import.meta.url).href;
const Tato = new URL('../../imagenes/Ciclistas/Tato/Tato.jpg', import.meta.url).href;
const Toto = new URL('../../imagenes/Ciclistas/Toto/Toto.jpg', import.meta.url).href;
const Uruguay = new URL('../../imagenes/uruguay.png', import.meta.url).href;
const Argentina = new URL('../../imagenes/argentina.png', import.meta.url).href;


const Team = ({ setSelectedProfile }) => {
    const profilesElite = [
        { name: 'Lucas', image: Lucas, nationality: Argentina, fullname: 'LUCAS GADAY' },
        { name: 'Martin', image: Martin, nationality: Uruguay, fullname: 'MARTIN CASTRO' },
        { name: 'Calvo', image: Calvo, nationality: Uruguay, fullname: 'MARTIN CALVO' },
        { name: 'Coro', image: Coro, nationality: Uruguay, fullname: 'DIEGO PEREYRA' },
        { name: 'Toto', image: Toto, nationality: Uruguay, fullname: 'RODRIGO MARR' },
    ];
    const profilesSub23 = [
        { name: 'Stefano', image: Tato, nationality: Uruguay, fullname: 'STEFANO URAN' },
        { name: 'Seba', image: Seba, nationality: Uruguay, fullname: 'SEBASTIAN CASTRO' },
        { name: 'Ale', image: Ale, nationality: Uruguay, fullname: 'ALEXANDER GUISOLI' },
        ];
    return (
        <div className="Team">
            <div className="Team_titulo">
                <h1>NUESTRO EQUIPO</h1>
            </div>
            <div className='Team_categoria'>
            <div className='LineaC'><nav></nav></div>
                <h3>ELITE</h3>
                <div className='LineaC'><nav></nav></div>
            </div>
            <div className="Team_imagenes">
                {profilesElite.map((profile) => (
                    <div key={profile.name} className="Team_perfil" onClick={() => setSelectedProfile(profile.name)}>
                        <img src={profile.image} alt={profile.name} className="team-image" />
                        <div className="Team_perfil_nomb_nac">
                            <h2>{profile.fullname}</h2>
                            <img src={profile.nationality} alt="Nacionalidad" className="nationality-image" />
                        </div>
                    </div>
                ))}
            </div>
            <div className='Team_categoria'>
            <div className='LineaC'><nav></nav></div>
                <h3>SUB-23</h3>
                <div className='LineaC'><nav></nav></div>
            </div>
            <div className="Team_imagenes">
                {profilesSub23.map((profile) => (
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