import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Menu() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <>
      <div className="container">
        <div>
          <Link to="/">
            <img src="/image/logo4.png" alt="logo" className="logo"></img>
          </Link>
          <p className="dateLogo rouge">12-14 Juillet 2024</p>
        </div>
        <nav className={`navBar${navVisible ? " column" : ""}`}>
          <img src="/image/logo4.png" alt="logo" className="logoOpen"></img>
          <Link to="/" onClick={toggleNav}>
            Accueil
          </Link>
          <Link to="/programmation" onClick={toggleNav}>
            Programmation
          </Link>
          <Link to="/billetterie" onClick={toggleNav}>
            Billetterie
          </Link>
          <Link to="/informations" onClick={toggleNav}>
            Informations
          </Link>
          {/* <Link to="/partenaires">Patenaires</Link> */}
          <Link to="/faq" onClick={toggleNav}>
            FAQ
          </Link>
          <Link to="/carte" onClick={toggleNav}>
            Carte
          </Link>
        </nav>
      </div>
      <button className="burger" onClick={toggleNav}>
        {navVisible ? ( // Si le menu est ouvert
          <img
            src="/image/close-icon.png"
            alt="Fermer le menu"
            className="closeImage"
          />
        ) : (
          // Sinon, afficher l'icône de burger
          <img
            src="/image/burger-bar.png"
            alt="Menu déroulant logo"
            className="burgerImage"
          />
        )}
      </button>
    </>
  );
}
