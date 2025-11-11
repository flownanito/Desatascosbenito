import React, { useState, useEffect } from "react";
// ...existing code...
import "./Advantages.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import desinfeccion from "../../assets/desinfeccion.jpg";
import suministrodeagua from "../../assets/suministrodeagua.jpg";
import imagen3 from "../../assets/imagen3.jpeg";

const images = [imagen3, suministrodeagua, desinfeccion];
function Advantages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const moveSlide = (step) => {
    setIndex(i => (i + step + images.length) % images.length);
  }; const noticias = [
    {
      id: 1,
      titulo: " COMPROMETIDOS CON NUESTRA GENTE, AYER Y SIEMPRE ",
      descripcion: "En los momentos más duros, Desatascos Benito estuvo al lado de su gente. Colaboramos con las autoridades de Gran Canaria ofreciendo servicios de desinfección gratuitos para proteger a nuestros vecinos. Porque tu seguridad y bienestar siempre serán nuestra prioridad. ¡Cuenta con nosotros, las 24 horas!",
      imagen: desinfeccion,
    },
    {
      id: 2,
      titulo: "MÁS QUE DESATASCOS, UN APOYO PARA TU DÍA A DÍA",
      descripcion: "En Desatascos Benito no solo resolvemos problemas de fontanería y desatascos, también nos adaptamos a lo que necesites. Ponemos a tu disposición nuestro camión cuba para suministro de agua, ya sea para animales, riego o cualquier otra necesidad que tengas. Llámanos y descubre que estamos para ayudarte en todo momento.",
      imagen: suministrodeagua,
    },
    {
      id: 3,
      titulo: " LA OPINIÓN DE NUESTROS CLIENTES, NUESTRA MEJOR CARTA DE PRESENTACIÓN ",
      descripcion: "A lo largo de los años, en Desatascos Benito hemos tenido la suerte de trabajar con vecinos, empresas y ayuntamientos de diferentes rincones de Gran Canaria. Todos coinciden en algo: la confianza, la rapidez y la profesionalidad con la que resolvemos cada situación.",
      imagen: imagen3,
    },
  ];

  return (
    <>
      <Header />
      {/* SLIDER */}
      <div className="slider">
        <div className="slider-images">
          {images.map((src, i) =>
            i === index ? (
              <img key={i} src={src} alt={`slide-${i}`} />
            ) : null
          )}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>

      {/* LOGO Y TRABAJOS */}
      <section className="servicios-botones">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="botones-grid">
            <div
              className="boton-servicio"
              style={{ backgroundImage: "url('https://sthexpert.standardhidraulica.com/wp-content/uploads/2019/07/consejos-sobre-la-fontaneria.jpg')" }}
            >
              <span>Fontanería</span>
            </div>
            <div
              className="boton-servicio"
              style={{ backgroundImage: "url('https://www.sidese.es/images/tu-cerrajeria-de-confianza-en-ourense.jpg')" }}
            >
              <span>Cerrajería</span>
            </div>
            <div
              className="boton-servicio"
              style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL2gzsmyQ_GpcHoSVj5H6bsJz9Yso5ZIPSA&s')" }}
            >
              <span>Desatascos</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <div className="news-bg">
        <h1 className="news-title">Compromiso con la Comunidad</h1>
        <div className="news-list">
          {noticias.map((noticia) => (
            <div className="news-card" key={noticia.id}>
              <div className="news-info">
                <h2 className="news-card-title">{noticia.titulo}</h2>
                <p className="news-card-desc">{noticia.descripcion}</p>
              </div>
              <div className="news-img-container">
                {noticia.imagen && (
                  <img src={noticia.imagen} alt={noticia.titulo} className="news-img" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Advantages; 