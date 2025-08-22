import React, { useState } from 'react';
import './Header.css';
function Header() { 
  const [menuOpen, setMenuOpen] = useState(false);

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
          <nav className={`nav-buttons${menuOpen ? " open" : ""}`}>
            <a href="/Home" onClick={() => setMenuOpen(false)}> <b>Inicio</b> </a>
            <a href="/Advantages" onClick={() => setMenuOpen(false)}> <b>Servicios</b> </a>
            <a href="/We" onClick={() => setMenuOpen(false)}> <b>Nosotros</b> </a>
          </nav>
        </nav>
        <div className="phone-button">
          <a href="tel:911234567"><button>📞 911 234 567</button></a>
        </div>
      </div>
    </header>

  );
};

export default Header;