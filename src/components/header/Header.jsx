import React from 'react';
import './Header.css';
import Home from "../../pages/home/home";
import Jobs from "../../pages/Jobs/jobs"; 
import We from "../../pages/we/We"; 

const Header = () => {
  return (
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
            <li><a href= {Home}>Inicio</a></li>
            <li><a href= {Jobs}>Servicios</a></li>
            <li><a href= {We}>Nosotros</a></li>
            {/* <li><a href="#">Contacto</a></li> */}
          </ul>
        </nav>
        <div className="phone-button">
          <a href="tel:911234567"><button>📞 911 234 567</button></a>
        </div>
      </div>
    </header>

  );
};

export default Header;