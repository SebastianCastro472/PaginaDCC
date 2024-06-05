import Team from '../Components/Team';
import Productos from '../Components/Productos';
import React from 'react'; 

export const Equipo = ({ setSelectedProfile }) => {
    return (
        <div className="Cuerpo">
            <div>
                <Team setSelectedProfile={setSelectedProfile} />
            </div>
        </div>
    );
};

export default Equipo;