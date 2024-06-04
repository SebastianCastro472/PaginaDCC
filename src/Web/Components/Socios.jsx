const Team = new URL('../../imagenes/Team.jpg', import.meta.url).href;


const Socios = () => {
    return (
     <div className="Socios">
        <div className="Membresia">
            <p>.</p>
        </div> 
        <div className="Arriba">
            <img src={Team} alt="" />
        </div>
        <div className="Abajo">
            <p>.</p>
        </div>

     </div>
    )
}
export default Socios;