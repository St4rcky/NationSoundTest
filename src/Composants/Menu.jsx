import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Menu() {
  const [navVisible, setNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // On vérifie la taille de l'écran pour éviter !navVisible
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <>
      <div>
        <div className="container">
          <div>
            <Link to="/">
              <img src="/image/logo4.png" alt="logo" className="logo"></img>
            </Link>
            <p className="dateLogo rouge">12-14 Juillet 2024</p>
          </div>
          <nav className={`navBar${navVisible ? " column" : ""}`}>
            <img src="/image/logo4.png" alt="logo" className="logoOpen"></img>
            <Link
              to="/"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              Accueil
            </Link>
            <Link
              to="/programmation"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              Programmation
            </Link>
            <Link
              to="/billetterie"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              Billetterie
            </Link>
            <Link
              to="/informations"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              Informations
            </Link>
            <Link
              to="/faq"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              FAQ
            </Link>
            <Link
              to="/carte"
              onClick={windowWidth <= 1200 ? toggleNav : null}
              className="linkMenu"
            >
              Carte
            </Link>
          </nav>
        </div>
      </div>
      <button className="burger" onClick={toggleNav}>
        {navVisible ? ( // Si le menu est ouvert
          <img
            src="/image/close-icon.png"
            alt="Fermer le menu"
            className="closeImage"
          />
        ) : (
          // Sinon, affiche l'icône de burger
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
