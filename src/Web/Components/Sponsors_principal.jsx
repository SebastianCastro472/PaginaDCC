const Sp1 = new URL('../../imagenes/sponsors/1.png', import.meta.url).href;
const Sp2 = new URL('../../imagenes/sponsors/2.png', import.meta.url).href;
const Sp3 = new URL('../../imagenes/sponsors/3.png', import.meta.url).href;
const Sp4 = new URL('../../imagenes/sponsors/4.png', import.meta.url).href;
const Sp5 = new URL('../../imagenes/sponsors/8.png', import.meta.url).href;
const Sp6 = new URL('../../imagenes/sponsors/6.png', import.meta.url).href;
const Sp7 = new URL('../../imagenes/sponsors/7.png', import.meta.url).href;

const Sponsors_principal = () => {
    return (
    <div className="Sponsors">
        <div className="Sponsors_principal-main">
            <h1>SPONSORS</h1>
            <div className='LineaVerde'><span></span></div>
            <div className="Sponsors_principal-Principales">
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp1} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp2} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp3} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp4} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp5} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp6} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes">
                    <img src={Sp7} alt="" />
                </div>
            </div>
            
            <div className="Sponsors_principal-Secundarios">
                
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp1} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp2} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp3} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp4} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp5} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp6} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp7} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp5} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp6} alt="" />
                </div>
                <div className="Sponsors_principal-imagenes1">
                    <img src={Sp7} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Sponsors_principal;