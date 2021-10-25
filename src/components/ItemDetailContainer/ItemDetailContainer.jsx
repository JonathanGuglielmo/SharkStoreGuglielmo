import React, { useEffect, useState } from "react";
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


import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const misProductos = [
    {
      id: 1,
      nombre: "Monitor Samsung Curvo 24 pulgadas",
      descripcion: `
        Pantalla led de 24 ".
        Curvo.
        Posee pantalla antirreflejo.
        Tiene una resolución de 1920px-1080px.
        Relación de aspecto de 16:9.
        Panel VA.
        Su brillo es de 250cd/m².
        Tipos de conexión: HDMI, VGA/D-Sub, Jack 3.5 mm.`,
      stock: 5,
      tipo: "perisferico",
      precio: 25000,
      img: img1,
    },
    {
      id: 2,
      nombre: "Teclado gamer HyperX Alloy Core RGB QWERTY",
      descripcion: `Consolas compatibles: ps4, ps5, xbox series xis y xbox one.
        Resiste a salpicaduras.
        Contiene teclado numérico.
        Función antighosting incorporada.
        Tipo de teclado: membrana.
        Tecla cilíndrica.
        Con conector USB 2.0.
        Medidas: 443.2mm de ancho, 175.31mm de alto y 35.68mm de profundidad.
        Indispensable para tus actividades.
        Las imágenes pueden ser ilustrativas.`,
      stock: 8,
      tipo: "perisferico",
      precio: 4700,
      img: img2,
    },
    {
      id: 3,
      nombre: "Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED",
      descripcion: `Compatible con PS4 y PS4 Pro.
        Alcance inalámbrico de 20 m.
        La batería dura 30 h.
        Modo manos libres incluido.
        Con cancelación de ruido.
        Con micrófono incorporado.
        Tipo de conector: Jack 3.5 mm.
        El largo del cable es de 1.3 m.
        Uso apto para estudio, oficina.
        Sonido superior y sin límites.
        Cómodos y prácticos.`,
      stock: 9,
      tipo: "perisferico",
      precio: 15000,
      img: img3,
    },
    {
      id: 4,
      nombre: "Mouse de juego HyperX Pulsefire Surge negro",
      descripcion: `Utiliza cable.
        Posee rueda de desplazamiento.
        Cuenta con 6 botones para un mayor control.
        Con luces para mejorar la experiencia de uso.
        Con sensor óptico.
        Resolución de 16000dpi.
        Creado para llevar a todas partes.
        Control inteligente y navegación fácil.`,
      stock: 10,
      tipo: "perisferico",
      precio: 6000,
      img: img4,
    },
    {
      id: 5,
      nombre: "Gabinete Pc Gaming Sentey X10 Rgb Acrilic Usb 3.0 Sin Fuente",
      descripcion: `-Nombre X10
      -Modelo GF10
      -Part Number GF10
      -Garantía 1 Year
      -UPC 00812366020604
      
      ESTRUCTURA
      -Tipo Mid Tower
      -Color Negro
      -Material SGCC
      -Motherboard Compatibles M-ATX
      -Posición PSU Abajo
      -Tamaño máximo VGA 340mm
      -Tamaño máximo CPU cooler 150mm
      -Soporte Watercooling: Yes
      -Motherboard Tray: Si
      -Sistema cables ocultos: Si`,
      stock: 10,
      tipo: "perisferico",
      precio: 10000,
      img: img5,
    },
    {
      id: 6,
      nombre: "Memoria RAM Fury DDR4 gamer color Negro 8GB 1 HyperX HX426C16FB3/8",
      descripcion: `Optimizá el rendimiento de tu máquina con la tecnología DDR4 SDRAM.
      Memoria con formato UDIMM.
      Alcanza una velocidad de 2666 MHz.
      Apta para Computadoras de escritorio.
      Línea Fury DDR4.
      Cuenta con una tasa de transferencia de 21300 MB/s.
      Compatible con AMD Ryzen, Intel.`,
      stock: 6,
      tipo: "memorias",
      precio: 6000,
      img: img6,
    },
    {
      id: 7,
      nombre: "Motherboard Gigabyte B450m S2h V2 Amd Am4 Ssd M.2 Ddr4",
      descripcion: `Plataforma: AMD
      Capacidad máxima soportada de la memoria RAM: 32 GB
      Chipset: AMD B450
      Socket: Socket AM4
      Ranuras de expansión: 1 x PCI Express x16 (x16 mode),2 x PCI Express x1
      Con procesador: No
      Tipo de memoria RAM: DDR4`,
      stock: 8,
      tipo: "motherboard",
      precio: 12000,
      img: img7,
    },
    {
      id: 8,
      nombre: "Placa de video AMD Gigabyte Gaming Radeon RX 500 Series RX 570 GV-RX570GAMING-8GD 8GB",
      descripcion: `Interfaz PCI-Express 3.0.
      Bus de memoria: 256bit.
      Cantidad de núcleos: 2048.
      Resolución máxima: 7680x4320.
      Compatible con directX y openGL.
      Requiere de 450W de alimentación.
      Con ventilador doble de alto desempeño.
      Especialmente diseñada para experiencias de juego alucinantes.
      Permite la conexión de hasta 5 pantallas simultáneas.
      Formatos de conexión: DL-DVI-D, HDMI, DisplayPort.
      Incluye accesorios`,
      stock: 15,
      tipo: "placas",
      precio: 115000,
      img: img8,
    },
    {
      id: 9,
      nombre: "Placa De Video Nvidia Gigabyte Rtx 3080ti Gaming Oc 12gb Pc",
      descripcion: `Fabricante: Nvidia

      Tipo de memoria gráfica: GDDR6X
      
      Interfaz con la placa madre: PCI-Express 4.0
      
      Tamaño de memoria: 12 GB
      
      Contectividad: DisplayPort,HDMI
      `,
      stock: 12,
      tipo: "placas",
      precio: 350,
      img: img9,
    },
    {
      id: 10,
      nombre: "Motherboard Asus Prime Z490-p Lga 1200 Intel 10ma - Acuario",
      descripcion: `Plataforma: Intel
      Capacidad máxima soportada de la memoria RAM: 128 GB
      Chipset: Intel® Z490
      Socket: Intel® LGA 1200
      Ranuras de expansión: 1 x PCIe 3.0 x16 (x16 mode),1 x PCIe 3.0 x16 (x4 mode),4 x PCIe 3.0 x1
      Con procesador: No
      CPU: 10th Gen Intel® Core™
      Aplicaciones: PC Escritorio
      Tipo de memoria RAM: DDR4`,
      stock: 20,
      tipo: "motherboard",
      precio: 30000,
      img: img10,
    },
  ];

  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1500);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getItem = misProductos.find((item) => item.id == id);
    getItem ? setProducto(getItem) : alert("error");
  }, []);

  return (
    <div className="text-center">
      {producto && products.length ? (
        <ItemDetail
          nombre={producto.nombre}
          img={producto.img}
          descripcion={producto.descripcion}
          stock={producto.stock}
          precio={producto.precio}
        />
      ) : (
        <div>
            <p className="text-center mt-5 w-100">
              Cargando producto...
            </p>
            <div
              className="text-center d-flex align-items-center justify-content-center"
              style={{ height: "80vh" }}
            >
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
      )}
      
    </div>
  );
};

export default ItemDetailContainer;
