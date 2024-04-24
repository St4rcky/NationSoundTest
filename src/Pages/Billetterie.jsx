export default function Billetterie() {
  return (
    <>
      <div className="bg billetContainer">
        <h1 className="title">BILLETTERIE</h1>
        <p className="msgFictif">
          Ce site étant fictif, il n'y a aucun paiement possible. Vous pouvez
          directement télécharger votre billet.
        </p>
        <div className="blocBillet">
          <img
            className="imgBillet"
            src="/image/billet.jpg"
            alt="Image de fête"
          ></img>
          <p className="billetPrix">Billets 1 jour : 50€</p>
          <p>
            Profitez d'une journée complète d'évasion musicale et festive lors
            de notre festival. Ce billet vous donne accès à toutes les activités
            et concerts du jour
          </p>
          <a href="/image/1jour.pdf" download>
            <p className="boutonBillet">J'y vais</p>
          </a>
        </div>
        <div className="blocBillet">
          <img
            className="imgBillet"
            src="/image/billet.jpg"
            alt="Image de fête"
          ></img>
          <p className="billetPrix">Billets 2 jours : 90€</p>
          <p>
            Plongez dans deux jours d'ambiance festivalière inoubliable avec ce
            billet. Accédez à tous les concerts et installations du festival,
            ainsi qu'au camping pour une expérience immersive complète.
          </p>
          <a href="/image/2jours.pdf" download>
            <p className="boutonBillet">J'y vais</p>
          </a>
        </div>
        <div className="blocBillet">
          <img
            className="imgBillet"
            src="/image/billet.jpg"
            alt="Image de fête"
          ></img>
          <p className="billetPrix">Billets 3 jours : 125€</p>
          <p>
            Vivez l'expérience ultime du festival avec ce billet pour trois.
            Profitez de l'accès à tous les concerts et au camping pour une
            immersion totale dans l'ambiance du festival.
          </p>
          <a href="/image/3jours.pdf" download>
            <p className="boutonBillet">J'y vais</p>
          </a>
        </div>
      </div>
    </>
  );
}
