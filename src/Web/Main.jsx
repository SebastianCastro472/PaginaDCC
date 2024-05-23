import Equipo from './Paginas/Equipo';
import  Principal  from './Paginas/Principal';
import  Perfil  from './Paginas/Perfil';
import  Comision  from './Paginas/Comision';
import  Sponsors  from './Paginas/Sponsors';
import  SobreNosotros  from './Paginas/SobreNosotros';
import  Carreras  from './Paginas/Carreras';
import  Socio  from './Paginas/Socio';

export const Main = ({ currentPage }) => {
    let PageComponent;

    switch(currentPage) {
        case 'HazteSocio':
            PageComponent = <Socio />;
            break;
        case 'Equipo':
            PageComponent = <Equipo />;
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

    return ( 
        <div>
            {PageComponent}
        </div>
    );
}

export default Main;