import { useEffect } from "react";
import { useState } from "react";

export default function Partenaires() {
  const [partenaires, setPartenaires] = useState([]);

  useEffect(() => {
    const fetchPartenaires = async () => {
      try {
        const response = await fetch(
          "https://starcknationsound.infinityfreeapp.com/drupalNationSound/jsonapi/node/partenaires"
        );
        if (response.ok) {
          const data = await response.json();
          setPartenaires(data.data);
        } else {
          console.error(
            "Erreur lors de la récupération des partenaires :",
            response.statusText
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des partenaires :",
          error
        );
      }
    };

    fetchPartenaires();
  }, []);

  return (
    <>
      <div className="bg">
        <h1 className="title">PARTENAIRES</h1>
        <p className="textePartenaires">
          Un immense merci à nos partenaires pour leur soutien précieux et leur
          contribution essentielle à la réussite de notre festival ! Nous ne
          pourrions pas le faire sans vous !
        </p>
        <div className="partenairesContainer">
          {partenaires.map((partenaire, index) => (
            <img
              className="imgPartenaire"
              key={index}
              src={partenaire.attributes.field_logo.uri}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}
