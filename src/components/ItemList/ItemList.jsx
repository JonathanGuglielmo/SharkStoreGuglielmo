import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "./ItemList.css"
import Item from "../Item/Item";
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/img5.png';
import img6 from '../../img/img6.png';
import img7 from '../../img/img7.png';
import img8 from '../../img/img8.png';
import img9 from '../../img/img9.png';
import img10 from '../../img/img10.png';
import img11 from '../../img/img11.png';
import img12 from '../../img/img12.png';

const ItemList = memo(
  ({ category }) => {
    const misProductos = [
    {
      id: 1,
      nombre: "Monitor Samsung Curvo 24 pulgadas",
      descripcion: "Tiene una resolución de 1920px-1080px. Relación de aspecto de 16:9.",
      stock: 5,
      category: "perisferico",
      precio: 25000,
      img: img1,
    },
    {
      id: 2,
      nombre: "Teclado gamer HyperX Alloy Core RGB QWERTY",
      descripcion: "Tipo de teclado: membrana. Tecla cilíndrica. Con conector USB 2.0.",
      stock: 8,
      category: "perisferico",
      precio: 4700,
      img: img2,
    },
    {
      id: 3,
      nombre: "Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED",
      descripcion: "Con micrófono incorporado. Tipo de conector: Jack 3.5 mm. El largo del cable es de 1.3 m.",
      stock: 9,
      category: "perisferico",
      precio: 15000,
      img: img3,
    },
    {
      id: 4,
      nombre: "Mouse de juego HyperX Pulsefire Surge negro",
      descripcion: "Con luces para mejorar la experiencia de uso. Con sensor óptico.",
      stock: 10,
      sabor: "salado",
      category: "perisferico",
      precio: 6000,
      img: img4,
    },
    {
      id: 5,
      nombre: "Gabinete Pc Gaming Sentey X10 Rgb Acrilic Usb 3.0 Sin Fuente",
      descripcion: "Tipo Mid Tower. Color Negro. Material SGCC",
      stock: 10,
      category: "perisferico",
      precio: 10000,
      img: img5,
    },
    {
      id: 6,
      nombre: "Memoria RAM Fury DDR4 gamer color Negro 8GB 1 HyperX HX426C16FB3/8",
      descripcion: "Apta para Computadoras de escritorio. Línea Fury DDR4.",
      stock: 6,
      category: "memorias",
      precio: 6000,
      img: img6,
    },
    {
      id: 7,
      nombre: "Motherboard Gigabyte B450m S2h V2 Amd Am4 Ssd M.2 Ddr4",
      descripcion: "Chipset: AMD B450. Socket: Socket AM4",
      stock: 8,
      category: "motherboard",
      precio: 12000,
      img: img7,
    },
    {
      id: 8,
      nombre: "Placa de video AMD Gigabyte Gaming Radeon RX 500 Series RX 570 GV-RX570GAMING-8GD 8GB",
      descripcion: "Interfaz PCI-Express 3.0. Bus de memoria: 256bit. Cantidad de núcleos: 2048.",
      stock: 15,
      category: "placas",
      precio: 115000,
      img: img8,
    },
    {
      id: 9,
      nombre: "Placa De Video Nvidia Gigabyte Rtx 3080ti Gaming Oc 12gb Pc",
      descripcion: "Tipo de memoria gráfica: GDDR6X .Interfaz con la placa madre: PCI-Express 4.0",
      stock: 12,
      category: "placas",
      precio: 350000,
      img: img9,
    },
    {
      id: 10,
      nombre: "Motherboard Asus Prime Z490-p Lga 1200 Intel 10ma - Acuario",
      descripcion: "Plataforma: Intel. Capacidad máxima soportada de la memoria RAM: 128 GB",
      stock: 20,
      category: "motherboard",
      precio: 30000,
      img: img10,
    },
    {
      id: 11,
      nombre: "Memoria RAM HyperX Predator RGB 8GB DDR4 3600MHZ RGB XPM",
      descripcion: "Rendimiento DDR4 de gran velocidad y baja latencia",
      stock: 30,
      category: "memorias",
      precio: 7000,
      img: img11,
    },
    {
      id: 12,
      nombre: "Memoria Hyperx 16gb Ddr4 2666mhz Fury Luces Rgb Gamer Juegos",
      descripcion: "DIMM de 288 espigas - 2666 MHz / PC4-21300 - CL16 - 1.2 V - sin búfer - no ECC - negro",
      stock: 10,
      category: "memorias",
      precio: 9000,
      img: img12,
    },
  ];

  let filtrarCategoria = misProductos.filter(
    (items) => items.category === category
  );

  const [products, setProducts] = useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        category === undefined
          ? resolve(misProductos)
          : resolve(filtrarCategoria)
    }, 3000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsFromDB();
  }, );

  return (
    <div className="mt-3">
      <div className="text-center d-flex align-items-center justify-content-center row div-filtros">
        <p className="m-3 col-12">Filtrar productos</p>
        <ul className="justify-content-center ul-productos">
          <li>
            <Link to={`/`} className="text-dark m-4">
              <u>Todos</u>
            </Link>
          </li>
          <li>
            <Link to={`/categorias/perisferico`} className="text-dark m-4">
              <u>Perisfericos</u>
            </Link>
          </li>
          <li>
            <Link to={`/categorias/placas`} className="text-dark m-4">
              <u>Placas</u>
            </Link>
          </li>
          <li>
            <Link to={`/categorias/motherboard`} className="text-dark m-4">
              <u>Motherboard</u>
            </Link>
          </li>
          <li>
            <Link to={`/categorias/memorias`} className="text-dark m-4">
              <u>Memorias</u>
            </Link>
          </li>
        </ul>
      </div>
      <div className="row justify-content-center mi-div-item">
        {products && products.length ? (
          products.map((producto) => (
            <Item
              id={producto.id}
              nombre={producto.nombre}
              stock={producto.stock}
              img={producto.img}
              price={producto.precio}
              descripcion={producto.descripcion}
            />
          ))
        ) : (
          <div>
            <p className="text-dark text-center w-100">
              Cargando productos...
            </p>
            <div
              className="text-center d-flex align-items-center justify-content-center"
              style={{ height: "80vh" }}
            >
              <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
},
(oldProps, newProps) => console.log(newProps)
);

export default ItemList;