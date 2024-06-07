// Main.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Equipo from './Paginas/Equipo';
import Principal from './Paginas/Principal';
import Comision from './Paginas/Comision';
import Sponsors from './Paginas/Sponsors';
import SobreNosotros from './Paginas/SobreNosotros';
import Carreras from './Paginas/Carreras';
import Socio from './Paginas/Socio';
import Perfil_Stefano from './Components/Ciclistas/Perfil_Stefano';
import Perfil_Lucas from './Components/Ciclistas/Perfil_Lucas';
import Perfil_Seba from './Components/Ciclistas/Perfil_Seba';
import Perfil_Martin from './Components/Ciclistas/Perfil_Martin';
import Perfil_Coro from './Components/Ciclistas/Perfil_Coro';
import Perfil_Calvo from './Components/Ciclistas/Perfil_Calvo';
import Perfil_Ale from './Components/Ciclistas/Perfil_Ale';
import Perfil_Toto from './Components/Ciclistas/Perfil_Toto';

export const Main = () => {
    const { name } = useParams();
    const location = useLocation();
    
    let PageComponent;

    if (name) {
        switch (name) {
            case 'Stefano':
                PageComponent = <Perfil_Stefano />;
                break;
            case 'Lucas':
                PageComponent = <Perfil_Lucas />;
                break;
            case 'Seba':
                PageComponent = <Perfil_Seba />;
                break;
            case 'Martin':
                PageComponent = <Perfil_Martin />;
                break;
            case 'Coro':
                PageComponent = <Perfil_Coro />;
                break;
            case 'Ale':
                PageComponent = <Perfil_Ale />;
                break;
            case 'Toto':
                PageComponent = <Perfil_Toto />;
                break;
            case 'Calvo':
                PageComponent = <Perfil_Calvo />;
                break;
            default:
                PageComponent = <Principal />;
        }
    } else {
        switch (location.pathname) {
            case '/hazte-socio':
                PageComponent = <Socio />;
                break;
            case '/equipo':
                PageComponent = <Equipo />;
                break;
            case '/carreras':
                PageComponent = <Carreras />;
                break;
            case '/comision':
                PageComponent = <Comision />;
                break;
            case '/sponsors':
                PageComponent = <Sponsors />;
                break;
            case '/sobre-nosotros':
                PageComponent = <SobreNosotros />;
                break;
            default:
                PageComponent = <Principal />;
        }
    }

    return (
        <div>
            {PageComponent}
        </div>
    );
};

export default Main;
