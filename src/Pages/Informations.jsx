import { useEffect, useState } from "react";
import Transport from "../Composants/Transport";
import Restauration from "../Composants/Restauration";
import Logement from "../Composants/Logement";
import Accessibilite from "../Composants/Accessibilité";
import { useLocation } from "react-router-dom";

export default function Informations() {
  const [selectedInfo, setSelectedInfo] = useState("Transport");
  // On recupere l'URL
  const location = useLocation();

  useEffect(() => {
    // On recupere le parametre de l'URL (?) et on maj selectedInfo
    const params = new URLSearchParams(location.search);
    const activeTab = params.get("activeTab");
    if (activeTab) {
      setSelectedInfo(activeTab);
    }
  }, [location.search]);

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <>
      <div className="globalInfo">
        <h1 className="title">INFORMATIONS</h1>
        <div className="sectionInfo">
          <p
            className={selectedInfo === "Transport" ? "choixInfo" : "infoReste"}
            onClick={() => handleInfoClick("Transport")}
          >
            Transport
          </p>
          <p
            className={
              selectedInfo === "Restauration" ? "choixInfo" : "infoReste"
            }
            onClick={() => handleInfoClick("Restauration")}
          >
            Restauration
          </p>
          <p
            className={selectedInfo === "Logement" ? "choixInfo" : "infoReste"}
            onClick={() => handleInfoClick("Logement")}
          >
            Logement
          </p>
          <p
            className={
              selectedInfo === "Accessibilité" ? "choixInfo" : "infoReste"
            }
            onClick={() => handleInfoClick("Accessibilité")}
          >
            Accessibilité
          </p>
        </div>
        {selectedInfo === "Transport" && <Transport />}{" "}
        {/* && en jsx rend le composant de droite si celui de gauche est true */}
        {selectedInfo === "Restauration" && <Restauration />}
        {selectedInfo === "Logement" && <Logement />}
        {selectedInfo === "Accessibilité" && <Accessibilite />}
      </div>
    </>
  );
}
