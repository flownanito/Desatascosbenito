import Header from "../../components/header/Header";
import "./we.css";

const noticias = [
  {
    id: 1,
    titulo: " 🏁¡GRAN EVENTO: CARRERA GT3 VIERNES 28! 🏁",
    descripcion: "¡No te pierdas nuestro evento especial con premios y sorpresas para todos los participantes! 5/10 vueltas por circuito Premio: $150,000 IC",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGxUmJl7Yobm6JIMUJs90yKDqMR9Qjrnd5w&s",
  },
  {
    id: 2,
    titulo: "🎖️🥊 ¡GRAN TORNEO DE BOXEO EN LEGADO RP! 🥊🎖️",
    descripcion: "¿Tienes lo que se necesita para dominar el ring? ¡Es hora de demostrar quién es el verdadero campeón del barrio!",
    imagen: "https://img.gta5-mods.com/q95/images/mlo-underground-box-ring-at-tequilala-sp-fivem/e22b4d-Image3.jpg",
  },
  {
    id: 3,
    titulo: " 🔥 ¡OPORTUNIDADES DE NEGOCIO EN LEGADO RP! 🔥 ",
    descripcion: "Ya están disponibles las nuevas adquisiciones comerciales en la ciudad. ¡No pierdas la oportunidad de invertir y hacer crecer tu imperio!",
    imagen: "https://i.blogs.es/40f729/bolsa-gta-5/840_560.jpeg",
  },
];

function We() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-image">
            <img src="" alt="" />
          </div>
          <div className="hero-text">
            <h2>Nuestra Historia</h2>
            <p>
              En Desatascos Benito llevamos más de 10 años ayudando a nuestros
              vecinos a solucionar problemas de fontanería, desatascos y cerrajería
              en Gran Canaria. Sabemos lo incómodo que es tener una tubería atascada
              o quedarte fuera de casa, por eso nuestro equipo está disponible
              las 24 horas, los 7 días de la semana para darte una respuesta rápida y eficaz
            </p>
            <p>
              Trabajamos con maquinaria moderna y un equipo de profesionales de
              confianza, siempre con la idea de hacerte la vida más fácil.
              ¿Necesitas ayuda ahora mismo? Llámanos y en pocos minutos estaremos a tu lado.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Empresas que confían en nosotros</h2>
          <p className="p-h2">Aliados estratégicos que respaldan nuestra trayectoria</p>

          <div className="services-columns">
            <div className="column">
              <ul>
                <li><strong>🌐 TechSolutions</strong> Innovación digital</li>
                <li><strong>🏦 Banco Global</strong> Servicios financieros</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li><strong>🚚 LogiTrans</strong> Transporte y logística</li>
                <li><strong>🏥 SaludPlus</strong> Salud y bienestar</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li><strong>🛒 MarketLine</strong> Comercio y retail</li>
                <li><strong>📡 ConnectNet</strong> Telecomunicaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default We;