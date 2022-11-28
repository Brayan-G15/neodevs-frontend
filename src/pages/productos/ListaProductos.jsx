import { useEffect } from "react";
import useProductos from "../../hooks/useProductos";
import Producto from "./Producto";
import Navbar from "../../components/Navbar";
import landingDesktop from '../../assets/landing_desktop.jpg';
import landingMobile from '../../assets/landing_mobile2.jpg';

const ListaProductos = () => {
  const { productos } = useProductos();
  return (
    <>
      <Navbar texto="Vender" ruta="agregar-producto" />
      
      <div className="container-list-products">
        <div className="w-full flex flex-col items-center mt-24">
          <div className="container-oferta">
            <img src={landingDesktop}></img>
          </div>
          {/* <h1 className="font-bold text-5xl uppercase text-center w-full mx-auto mb-10"> */}
            <div className="container-title">
              <p className="title-products">Nuevas Recomendaciones</p> 
            </div>
          {/* </h1> */}
          <div className="container-products flex-wrap justify-center">
            {productos.length ? (
              <>
                {productos.map((producto) => (
                  <Producto key={producto.id} producto={producto} />
                ))}
              </>
            ) : (
              <p className="mt-10 shadow-lg w-full text-center p-5 uppercase font-bold text-2xl">
                No hay Productos
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListaProductos;
