import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-section brand">
      <div class="logo">
        <span class="logo-icon">SH</span>
        <div>
          <h3>ServiHogar Pro</h3>
          <small>Fontanería & Cerrajería</small>
        </div>
      </div>
      <p>Más de 10 años ofreciendo servicios profesionales de fontanería y cerrajería. Tu tranquilidad es nuestra prioridad.</p>
    </div>

    <div class="footer-section contact">
      <h4>Contacto</h4>
      <ul>
        <li><span>📞</span> 911 234 567</li>
        <li><span>✉️</span> <a href="mailto:info@servihogarpro.es">info@servihogarpro.es</a></li>
        <li><span>📍</span> Calle Principal 123, Madrid</li>
        <li><span>⏰</span> Emergencias 24/7</li>
      </ul>
    </div>

    <div class="footer-section services">
      <h4>Nuestros Servicios</h4>
      <ul>
        <li>• Reparación de fugas</li>
        <li>• Instalaciones</li>
        <li>• Mantenimiento</li>
        <li>• Apertura de puertas</li>
        <li>• Cambio cerraduras</li>
        <li>• Emergencias 24/7</li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2024 ServiHogar Pro. Todos los derechos reservados.</p>
    <p>Diseño web profesional y minimalista</p>
  </div>
</footer>

  );
};

export default Footer;