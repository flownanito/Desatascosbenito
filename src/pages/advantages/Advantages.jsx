import React, { useState, useEffect } from "react";
import "./Advantages.css";
import Header from "../../components/header/Header";

const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Pon tus rutas reales

function Advantages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const moveSlide = (step) => {
    setIndex(i => (i + step + images.length) % images.length);
  };

  return (
    <body>
      <Header />
      {/* SLIDER   */}
      <div className="slider">
        <div cllassName="slider">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <button cllassName="perv" onClick="moveSlide (-1)" > &#10094;</button>
        <button cllassName="next" onClick="moveSlide (1)" > &#10095;</button>
      </div>

      {/* LOGO Y TRABAJOS  */}
      <div className="logo-section">
        <img src="" alt="" />
        <h2>Nuestros Trabajos</h2>
        <div className="trabajos">

        </div>
      </div>

      {/* SERVICIOS  */}
      <div className="servicios">
        <h2>Contrata Nuestros Servicios</h2>
        <button>Fontanería</button>
        <button>Cerrajería</button>
        <button>Desatascos</button>
        <button>Reparaciones</button>
        <button>Instalaciones</button> 
        <button>Emergencias</button>
      </div>
      
    </body>
  );
}

export default Advantages;    