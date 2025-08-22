import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <div className="home-background">
        <div className="import-header">   
        <Header />
        </div>
            <main>
                <section className="hero">
                    <div className="container hero-content">
                        <div className="hero-text">
                            <h2>Servicios de <span className="green">Fontanería</span> y <span className="red">Cerrajería</span> Profesionales</h2>
                            <p>Soluciones rápidas y confiables para tu hogar y negocio. Más de 10 años de experiencia en reparaciones, instalaciones y emergencias.</p>
                            <div className="hero-icons">
                                <div>⏰ 24/7 Emergencias</div>
                                <div>✅ Garantía Total</div>
                                <div>⚡ Atención Inmediata</div>
                            </div>
                            <div className="hero-buttons">
                                <a href="tel:911234567"><button className="btn-primary">📞 Llamar Ahora</button></a>
                                <button className="btn-secondary">Ver Servicios</button>
                            </div>
                        </div>
                        <div className="hero-cards">
                            <div className="card card-green">
                                <div className="circle green"></div>
                                <h3>Fontanería</h3>
                                <p>Reparaciones e instalaciones</p>
                            </div>
                            <div className="card card-red">
                                <div className="circle red"></div>
                                <h3>Cerrajería</h3>
                                <p>Apertura y cambio de cerraduras</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <div className="p-h2">
                        <h2>Nuestros <span className="green">Servicios</span></h2>
                        <p>Ofrecemos soluciones integrales en fontanería y cerrajería con la máxima calidad y rapidez</p>
                        </div>
                        <div className="services-columns">
                            <div className="column">
                                <h3 className="green">Fontanería</h3>
                                <ul>
                                    <li>
                                        <strong>Reparación de Fugas</strong>
                                        <p>Detección y reparación rápida de fugas de agua en tuberías, grifos y sanitarios.</p>
                                    </li>
                                    <li>
                                        <strong>Instalaciones</strong>
                                        <p>Instalación de sanitarios, grifería, sistemas de agua caliente y tuberías.</p>
                                    </li>
                                    <li>
                                        <strong>Mantenimiento</strong>
                                        <p>Revisiones preventivas y mantenimiento de instalaciones de fontanería.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <h3 className="red">Cerrajería</h3>
                                <ul>
                                    <li>
                                        <strong>Apertura de Puertas</strong>
                                        <p>Servicio de apertura 24/7 sin dañar la cerradura ni la puerta.</p>
                                    </li>
                                    <li>
                                        <strong>Cambio de Cerraduras</strong>
                                        <p>Instalación y cambio de cerraduras de alta seguridad para tu hogar.</p>
                                    </li>
                                    <li>
                                        <strong>Emergencias</strong>
                                        <p>Servicio de emergencia disponible las 24 horas, todos los días del año.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contacto">
                    <h2>Contáctanos</h2>
                    <p>Estamos aquí para ayudarte. Llámanos o escríbenos para cualquier emergencia o consulta</p>

                    <div className="contenedor">
                        <div className="info-contacto">
                            <h3>Información de Contacto</h3>
                            <p><strong>📞 Teléfono de Emergencia</strong><br /><span className="rojo">911 234 567</span><br />Disponible 24/7</p>
                            <p><strong>📍 Ubicación</strong><br />Calle Principal 123<br />Madrid, España</p>
                            <p><strong>🕒 Horarios</strong><br />Lun - Vie: 8:00 - 20:00<br />Emergencias: 24/7</p>
                            <p><strong>✉️ Email</strong><br />info@servihogarpro.es</p>

                            <div className="emergencia-box">
                                <p><strong>¿Emergencia?</strong><br />Llámanos ahora para atención inmediata</p>
                                <a href="tel:911234567" className="boton-verde">📞 911 234 567</a>
                            </div>
                        </div>

                        <form className="formulario">
                            <h3>Solicita un Presupuesto</h3>
                            <div className="fila">
                                <input type="text" placeholder="Tu nombre" required />
                                <input type="tel" placeholder="Tu teléfono" required />
                            </div>
                            <input type="email" placeholder="tug@gmail.com" required />
                            <select required>
                                <option value="">Selecciona un servicio</option>
                                <option>Fontanería</option>
                                <option>Electricidad</option>
                                <option>Cerrajería</option>
                            </select>
                            <textarea placeholder="Describe tu problema o necesidad..." rows="4" required></textarea>
                            <button type="submit" className="boton-verde">Enviar Solicitud</button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
}

export default Home;