const Team = new URL('../../imagenes/Team.jpg', import.meta.url).href;
const Logo = new URL('../../imagenes/dolores.png', import.meta.url).href;

const Socios = () => {
    return (
     <div className="Socios">
         
        <div className="Arriba">
            <img src={Team} alt="" />
        </div>
        
        <div className="Membresia">
            <br />
            <div className="LineaRoja"/>
            <div className="LineaRoja"/>
            <h1>SOCIO</h1>
            <img src={Logo} alt="" />
            <div className="Precio">
            <h2>$200</h2><h3>/Mes</h3>
            </div>
            <div className="LineaRoja"/>
            <div className="LineaRoja"/>
                <button>
                    HACERME SOCIO
                </button>
        </div>
     </div>
    )
}
export default Socios;