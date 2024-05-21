const Perfil1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;

const Team = () => {
    return (
     <div className="Team">
        <div className="Team_titulo">
            <h1>Nuestro equipo</h1>
        </div>
        <div className="Team_imagenes"> 
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
            <img src={Perfil1} alt="" className="team-image" />
        </div>
     </div>
    )
}
export default Team;