const foto = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const foto1 = new URL('../../imagenes/2018.jpg', import.meta.url).href;
const foto2 = new URL('../../imagenes/Carreras/Chana.jpg', import.meta.url).href;


const Sobre_Nosotros = () => {
    return (
     <div className="Sobre-Nosotros">
        <div className="Sobre-Nosotros1">
                <h1>Sobre Dolores Cycles Club</h1>
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
                <img src={foto} alt="" />
                <h2>Historia</h2>
                <h3>2018-2019 </h3>
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
                <img src={foto1} alt="" />
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
                <h3>2023-presente </h3>
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
                <img src={foto2} alt="" />
                <p>Actualmente el Dolores Cycles CLub compite en el calendario uruguayo </p>
                </div>
     </div>
    )
}
export default Sobre_Nosotros;