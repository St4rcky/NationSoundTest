export default function Transport() {
  return (
    <>
      <div className="blockInfo">
        <h2 className="title2">VENIR AU FESTIVAL</h2>
        <img src="image/transport.jpg" className="imgResto"></img>
        <p className="infoText">
          Pour un festival plus vert, privilégiez les transports doux et
          collectifs ! 80% de l'impact carbone des festivals provient des
          transports. En choisissant un mode de transport plus écologique que la
          voiture individuelle, vous contribuez à réduire votre empreinte
          carbone et celle du festival.
        </p>
        <div className="imgTitle">
          <img src="image/bus.png" className="imgTransport"></img>
          <h3 className="bleu">Bus</h3>
        </div>
        <p>
          Rejoignez le festival facilement en bus ! Des navettes régulières
          desservent l'entrée principale depuis la gare de Paris Montparnasse et
          d'autres arrêts stratégiques de la ville (Ligne 56). Consultez les
          horaires, les tarifs et les points d'arrêt directement sur le site de
          la{" "}
          <a href="https://www.ratp.fr/" target="_blank">
            RATP
          </a>
          .
        </p>
        <div className="imgTitle">
          <img src="image/velo.png" className="imgTransport"></img>
          <h3 className="bleu">Velo/Velib'</h3>
        </div>
        <p>
          Enfourchez votre Vélo et venez profiter du festival en toute liberté !
          Un parking gratuit vous attend à l'entrée. Pour ceux qui veulent
          utiliser un Vélib', plusieures stations sont disponible à proximité{" "}
          <a href="https://www.velib-metropole.fr/" target="_blank">
            ici
          </a>
        </p>
        <div className="imgTitle">
          <img src="image/voiture.png" className="imgTransport"></img>
          <h3 className="bleu">Voiture</h3>
        </div>
        <p>
          Venir en voiture est possible, pensez également au covoiturage pour un
          festival plus responsable !
        </p>
        <div className="imgTitle">
          <img src="image/parking.png" className="imgTransport"></img>
          <h3 className="bleu">Stationnement</h3>
        </div>
        <p>
          Déposez vos passagers en toute tranquillité grâce au dépose-minute
          situé à proximité immédiate de l'entrée principale. Des{" "}
          <a href="https://parclick.fr/" target="_blank">
            parkings payants
          </a>{" "}
          sont également disponibles aux alentours pour ceux qui souhaitent se
          garer.
        </p>
      </div>
    </>
  );
}
