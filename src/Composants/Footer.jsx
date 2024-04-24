import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="menuFooter">
          <a className="lienFooter" href="mailto:pascal.starck@ecoles-epsi.net">
            Contact
          </a>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <p className="lienFooter">FAQ</p>
          </Link>
          <Link to="/mentions" style={{ textDecoration: "none" }}>
            <p className="lienFooter">Mentions legales</p>
          </Link>
          <Link to="/partenaires" style={{ textDecoration: "none" }}>
            <p className="lienFooter">Partenaires</p>
          </Link>
        </div>
        <p className="titreReseaux">Réseaux sociaux :</p>
        <div className="logoReseaux">
          <a href="https://twitter.com/" target="_blank">
            <img src="/image/twitter.png" alt="logo Twitter"></img>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/image/facebook(1).png" alt="logo Facebook"></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/image/instagram(1).png" alt="logo instagram"></img>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="/image/youtube.png" alt="logo youtube"></img>
          </a>
        </div>
      </div>
    </>
  );
}
