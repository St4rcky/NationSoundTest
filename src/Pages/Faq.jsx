import { useState } from "react";
import { Link } from "react-router-dom";

export default function Faq() {
  const [categoriesOpen, setCategoriesOpen] = useState(Array(2).fill(false));

  //On evite la fermeture de toutes les questions en meme temps via l'index
  const toggleCategory = (index) => {
    const newCategoriesOpen = [...categoriesOpen];
    newCategoriesOpen[index] = !newCategoriesOpen[index];
    setCategoriesOpen(newCategoriesOpen);
  };

  return (
    <>
      <div className="blockFaq" style={{ paddingBottom: 1 + "px" }}>
        <h1 className="title">Foire aux questions</h1>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(0)} // Passer l'index de la catégorie
              >
                {categoriesOpen[0] ? "-" : "+"}{" "}
                <strong>Ou se déroule le festival ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[0] ? "show-categorie" : "hide-categorie")
            }
          >
            Le festival se déroulera à cette adresse : Plaine de la Belle Etoile
            Bois de Vincennes, 75012 Paris
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(1)}
              >
                {categoriesOpen[1] ? "-" : "+"}{" "}
                <strong>Quelles sont les horaires ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[1] ? "show-categorie" : "hide-categorie")
            }
          >
            Le festival débutera le vendredi 12 Juillet à 14h00, et finira le
            Lundi 15 à 03h00
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(2)}
              >
                {categoriesOpen[2] ? "-" : "+"}{" "}
                <strong>Comment obtenir des billets ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[2] ? "show-categorie" : "hide-categorie")
            }
          >
            Vous pouvez acheter des billets d'entrée directement sur place, ou
            des à present dans notre section{" "}
            <a href="/billetterie">Billeterie.</a>
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(3)}
              >
                {categoriesOpen[3] ? "-" : "+"}{" "}
                <strong>Les enfants sont-ils autorisés à venir ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[3] ? "show-categorie" : "hide-categorie")
            }
          >
            Pour la sécurité des plus petits, le festival est interdit aux
            enfants de moins de 6 ans et déconseillé aux moins de 10 ans. Les
            mineurs doivent être accompagnée d'un adulte.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(4)}
              >
                {categoriesOpen[4] ? "-" : "+"}{" "}
                <strong>Quel dispositif pour les PMR ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[4] ? "show-categorie" : "hide-categorie")
            }
          >
            Le festival s'engage à offrir une expérience accessible à tous.
            C'est pourquoi nous avons mis en place un maximum de moyens pour
            faciliter l'accueil des personnes à mobilité réduite (PMR). Plus
            d'infos <Link to="/informations?activeTab=Accessibilité">ici.</Link>{" "}
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(5)}
              >
                {categoriesOpen[5] ? "-" : "+"}{" "}
                <strong>Peut-on sortir du festival ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[5] ? "show-categorie" : "hide-categorie")
            }
          >
            Toutes sorties du festival est définitive jusqu'au lendemain.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(6)}
              >
                {categoriesOpen[6] ? "-" : "+"}{" "}
                <strong>Peut-on se faire rembourser des billets ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[6] ? "show-categorie" : "hide-categorie")
            }
          >
            Non, les billets ne sont ni repris, ni échangés, ni remboursés.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(7)}
              >
                {categoriesOpen[7] ? "-" : "+"}{" "}
                <strong>Peut-on apporter de la nourriture ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[7] ? "show-categorie" : "hide-categorie")
            }
          >
            Les petits encas, les petites bouteilles en plastique sont
            autorisés. Les bouteilles en verres sont interdites.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(8)}
              >
                {categoriesOpen[8] ? "-" : "+"}{" "}
                <strong>Peut-on se restaurer sur place ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[8] ? "show-categorie" : "hide-categorie")
            }
          >
            Plusieurs restaurants proposent des plats variés, du traditionnel
            aux saveurs du monde. Des food trucks complètent l'offre pour une
            restauration rapide et cosmopolite. Pour vous désaltérer, des bars
            sont aussi présents. Plus d'infos{" "}
            <Link to="/informations?activeTab=Restauration">ici</Link>.{" "}
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(9)}
              >
                {categoriesOpen[9] ? "-" : "+"}{" "}
                <strong>Les animaux sont-ils autorisés ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[9] ? "show-categorie" : "hide-categorie")
            }
          >
            Seuls les chiens d'assistance sont admis, à condition d'être tenus
            en laisse.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(10)}
              >
                {categoriesOpen[10] ? "-" : "+"}{" "}
                <strong>Ou peut-on dormir ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[10] ? "show-categorie" : "hide-categorie")
            }
          >
            Pour ceux qui recherchent un confort et des services de qualité, de
            nombreux hôtels se situent à proximité du festival. N'attendez pas
            la dernière minute pour réserver, car les chambres se remplissent
            rapidement les jours de festival ! Voir les infos logement{" "}
            <Link to="/informations?activeTab=Logement">ici</Link>{" "}
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(11)}
              >
                {categoriesOpen[11] ? "-" : "+"}{" "}
                <strong>Qui peut accéder au camping ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[11] ? "show-categorie" : "hide-categorie")
            }
          >
            Le camping du festival est accessible et gratuit à tous les
            festivaliers munis d'un pass 2 jours ou pass 3 jours.
          </p>
        </div>
        <div className="blockQuestion">
          <div>
            <p>
              <span
                className="ouvrirFermer plus"
                onClick={() => toggleCategory(12)}
              >
                {categoriesOpen[12] ? "-" : "+"}{" "}
                <strong>Y a t'il des casiers sécurisés au festival ?</strong>
              </span>
            </p>
          </div>
          <p
            className={
              "reponse " +
              (categoriesOpen[12] ? "show-categorie" : "hide-categorie")
            }
          >
            Une consigne gratuite est à la disposition des personnes ayant accés
            au camping.
          </p>
        </div>
      </div>
    </>
  );
}
