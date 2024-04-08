export default function Logement() {
  return (
    <>
      <div className="blockInfo">
        <h2 className="title2">CAMPING ET HOTEL</h2>
        <img src="image/camping1.jpg" className="imgResto"></img>
        <div className="imgTitle">
          <img src="image/camping.png" className="imgTransport"></img>
          <h3 className="bleu">Camping</h3>
        </div>
        <p>
          Pour les festivaliers les plus aventureux, le camping est l'option
          idéale pour vivre une expérience immersive et inoubliable.
        </p>
        <br />
        <p>
          <strong>Dépliez votre tente ou installez votre caravane</strong> sur
          des emplacements spacieux et profitez d'un accès gratuit au camping
          pour les détenteurs de pass 2 ou 3 jours.
        </p>
        <p>
          <strong>Sécurité et confort sont au rendez-vous :</strong> dormez en
          toute tranquillité dans un camping surveillé, profitez de douches
          éclairées, de toilettes et de tous les points de restauration.
          Rechargez vos portables aux bornes prévues à cet effet et déposez vos
          objets précieux ou encombrants dans les consignes à bagages.
        </p>
        <br />
        <p className="bleu">
          N'oubliez pas que le festival est un lieu de partage et de respect.
          Préservez l'environnement et laissez le site propre après votre
          passage pour que tout le monde puisse profiter pleinement de
          l'événement.
        </p>
        <div className="imgTitle">
          <img src="image/hotel.png" className="imgTransport"></img>
          <h3 className="bleu">Hôtels</h3>
        </div>
        <p>
          Pour ceux qui recherchent un confort et une tranquillité d'esprit, un
          large choix d'hôtels est disponible à proximité du festival.
        </p>
        <p>
          Des hôtels économiques aux établissements de luxe, vous trouverez
          forcément l'hébergement qui correspond à vos besoins et à votre
          budget.
        </p>
        <ul className="listeHotel">
          <a
            href="https://www.hotel-bb.com/fr/ville/hotels-paris"
            target="_blank"
          >
            <li>B&B</li>
          </a>
          <a
            href="https://ibis.accor.com/fr/city/hotels-paris-v2996.shtml"
            target="_blank"
          >
            <li>Ibis</li>
          </a>
          <a
            href="https://www.kyriad.com/fr-fr/nos-hotels/france/ile-de-france/hotels-paris/"
            target="_blank"
          >
            <li>Kyriad</li>
          </a>
          <a href="https://www.bestwestern.fr/recherche-paris/" target="_blank">
            <li>Best Western</li>
          </a>
        </ul>
      </div>
    </>
  );
}
