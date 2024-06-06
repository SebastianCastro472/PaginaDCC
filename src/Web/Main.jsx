import Equipo from './Paginas/Equipo';
import  Principal  from './Paginas/Principal';
import  Perfil  from './Paginas/Perfil';
import  Comision  from './Paginas/Comision';
import  Sponsors  from './Paginas/Sponsors';
import  SobreNosotros  from './Paginas/SobreNosotros';
import  Carreras  from './Paginas/Carreras';
import  Socio  from './Paginas/Socio';
import Perfil_Stefano from './Components/Ciclistas/Perfil_Stefano';
import Perfil_Lucas from './Components/Ciclistas/Perfil_Lucas';
import Perfil_Seba from './Components/Ciclistas/Perfil_Seba';
import Perfil_Martin from './Components/Ciclistas/Perfil_Martin';
import Perfil_Coro from './Components/Ciclistas/Perfil_Coro';
import Perfil_Calvo from './Components/Ciclistas/Perfil_Calvo';
import Perfil_Ale from './Components/Ciclistas/Perfil_Ale';
import Perfil_Toto from './Components/Ciclistas/Perfil_Toto';
import React, { useState } from 'react';

export const Main = ({ currentPage, selectedProfile, setSelectedProfile }) => {
    let PageComponent;

    if (selectedProfile) {
        switch (selectedProfile) {
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
        switch (currentPage) {
            case 'HazteSocio':
                PageComponent = <Socio />;
                break;
            case 'Equipo':
                PageComponent = <Equipo setSelectedProfile={setSelectedProfile} />;
                break;
            case 'Carreras':
                PageComponent = <Carreras />;
                break;
            case 'Comision':
                PageComponent = <Comision />;
                break;
            case 'Sponsors':
                PageComponent = <Sponsors />;
                break;
            case 'SobreNosotros':
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
}

export default Main;