import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <header>
                <div className="container header-top">
                    <div className="logo">
                        <div className="logo-box">SH</div>
                        <div className="logo-text">
                            <h1>ServiHogar Pro</h1>
                            <p>Fontanería & Cerrajería</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className="phone-button">
                        <a href="tel:911234567"><button>📞 911 234 567</button></a>
                    </div>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container hero-content">
                        <div className="hero-text">
                            <h2>Servicios de <span className="green">Fontanería</span> y <span className="red">Cerrajería</span> Profesionales</h2>
                            <p>Soluciones rápidas y confiables para tu hogar y negocio. Más de 10 años de experiencia en reparaciones, instalaciones y emergencias.</p>
                            <div className="hero-icons">
                                <div><span>⏰</span> 24/7 Emergencias</div>
                                <div><span>✅</span> Garantía Total</div>
                                <div><span>⚡</span> Atención Inmediata</div>
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
                        <h2>Nuestros <span className="green">Servicios</span></h2>
                        <p>Ofrecemos soluciones integrales en fontanería y cerrajería con la máxima calidad y rapidez</p>
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
            </main>
        </div>
    );
}

export default Home;