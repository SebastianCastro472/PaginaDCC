const foto = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;

const Sobre_Nosotros = () => {
    return (
     <div className="Sobre-Nosotros">
        <div className="Sobre-Nosotros1">
            <div className="Sobre-Nosotros-Titulo">
                <h1>Sobre Dolores Cycles Club</h1>
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
            </div>
            <div className="Sobre-Nosotros-img">
                <img src={foto} alt="" />
            </div>
            <div className="Sobre-Nosotros-Parrafo">
                <h2>Historia</h2>
                <h3>Temporada 2018-2019 </h3>
                <h3>Temporada 2023-presente </h3>
            </div>
            <div className="Sobre-Nosotros-img">
                <img src={foto} alt="" />
            </div>
        </div>
     </div>
    )
}
export default Sobre_Nosotros;