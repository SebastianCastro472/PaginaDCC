const producto = new URL('../../imagenes/Producto.png', import.meta.url).href;

const Productos = () => {
    return (
    <div className="productos">
        <div className="title">
            <h1>Productos</h1>
            <div className="producto">
                <img src={producto} alt="producto" />
                <p>Camiseta de ciclismo</p>
                <h2>$2000</h2>
            </div>
            <div className="producto">
                <img src={producto} alt="producto" />
                <p>Camiseta de ciclismo</p>
                <h2>$2000</h2>
            </div>
            <div className="producto">
                <img src={producto} alt="producto" />
                <p>Camiseta de ciclismo</p>
                <h2>$2000</h2>
            </div>
            <div className="producto">
                <img src={producto} alt="producto" />
                <p>Camiseta de ciclismo</p>
                <h2>$2000</h2>
            </div>
        </div>
    </div>
    )
}
export default Productos;