import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import LogoText from "../assets/logotext.svg";
import noti from "../assets/noti.svg";
import buscar from "../assets/buscar.svg";
import hamburguer from "../assets/hamburguer.svg";
import closeIcon from "../assets/close.svg"; // Ícone de fechar o menu

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <section>
      <header className="header">
        <div>
          <a href="/" className="logo">
            <img src={Logo} alt="" onClick={(e) => handleNavigation(e, '/Home')} />
            <img src={LogoText} alt="" onClick={(e) => handleNavigation(e, '/Home')} />
          </a>
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <img src={closeIcon} alt="Close Menu" className="close-icon" onClick={toggleMenu} />
          <ul>
            <li><a href="/" onClick={(e) => handleNavigation(e, '/')}>Home</a></li>
            <li><a href="/Sobre" onClick={(e) => handleNavigation(e, '/Sobre')}>Sobre</a></li>
            <li><a href="/Materiais" onClick={(e) => handleNavigation(e, '/Materiais')}>Materiais</a></li>
            <li><a href="/Participantes" onClick={(e) => handleNavigation(e, '/Participantes')}>Participantes</a></li>
            <li><a href="/Descobrir" onClick={(e) => handleNavigation(e, '/Descobrir')}>Descobrir</a></li>
            <li><a href="/Comprovacoes" onClick={(e) => handleNavigation(e, '/Comprovacoes')}>Comprovações</a></li>
          </ul>
        </div>

        <div className="opcoes">
          <img src={noti} alt="Notificações" onClick={togglePopup} />
          <img src={buscar} alt="Buscar" />
          <img src={hamburguer} alt="Menu" onClick={toggleMenu} />
        </div>

        {/* Pop-up de Novidades */}
        {popupOpen && (
          <div className="popup">
            <h3>Novidades</h3>
            <p>Aqui estão as últimas novidades!</p>
            <ul>
              <li>Novidade 1</li>
              <li>Novidade 2</li>
              <li>Novidade 3</li>
            </ul>
          </div>
        )}

        {/* Overlay */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </header>
    </section>
  );
}
