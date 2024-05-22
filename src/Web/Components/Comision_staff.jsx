const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const Redes1 = new URL('../../imagenes/instagram.png', import.meta.url).href;
const Redes2 = new URL('../../imagenes/facebook.png', import.meta.url).href;


const Comision_staff = () => {
    return (
     <div className="Team">
        <div className="Team_titulo">
            <h1>Nuestra Comision</h1>
        </div>
        <div className="Team_imagenes_staff"> 
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div> 
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div>
            <div className="Team_staff">
                <h1>Presidente</h1>
                <img src={Perfil1} alt="" className="staff-image" />
                <div className="staff_redes">
                    <img className='Perfil_redes_foto' src={Redes1} alt="Logo" />
                    <img className='Perfil_redes_foto' src={Redes2} alt="Logo" />
                </div>
            </div> 
        </div>
     </div>
    )
}
export default Comision_staff;