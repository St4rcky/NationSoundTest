import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Programmation() {
  const [artists, setArtists] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Tous");
  const [selectedHeure, setSelectedHeure] = useState("Toutes");
  const [selectedType, setSelectedType] = useState("Tous");
  const [isCategorieOpen, setIsCategorieOpen] = useState(false);
  const categorieMenu = isCategorieOpen ? "show-categorie" : "hide-categorie";

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          "https://starcknationsound.infinityfreeapp.com/drupalNationSound/jsonapi/node/artiste"
        );
        if (response.ok) {
          const data = await response.json();
          setArtists(data.data);
        } else {
          console.error(
            "Erreur lors de la récupération des artistes :",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des artistes :", error);
      }
    };

    fetchArtists();
  }, []);
  // Filtre pour les artistes
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const handleHeureClick = (heure) => {
    setSelectedHeure(heure);
  };
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };
  const handleResetFilters = () => {
    setSelectedDate("Tous");
    setSelectedHeure("Toutes");
    setSelectedType("Tous");
  };
  const filteredArtists =
    selectedDate === "Tous" &&
    selectedHeure === "Toutes" &&
    selectedType === "Tous"
      ? artists
      : artists.filter((artist) => {
          const artistDate = artist.attributes.field_date;
          const artistHeure = artist.attributes.field_heure
            // On recupere les 5 caracteres apres le T
            .split("T")[1]
            .substring(0, 5);
          const artistType = artist.attributes.field_scene.toLowerCase();
          return (
            (selectedDate === "Tous" || artistDate === selectedDate) &&
            (selectedHeure === "Toutes" || artistHeure === selectedHeure) &&
            (selectedType === "Tous" || artistType === selectedType)
          );
        });

  return (
    <>
      <div className="divProgram">
        <h1 className="title">PROGRAMMATION</h1>
        <div className="choixDate">
          <section>
            <h2 className="filtreMain">
              FILTRES{" "}
              <span
                className="ouvrirFermer"
                onClick={() => setIsCategorieOpen(!isCategorieOpen)}
              >
                {isCategorieOpen ? "-" : "+"}
              </span>
            </h2>
            <div className={`padFiltre ${categorieMenu}`}>
              <h3 className="titreFiltre">Dates</h3>
              <form className={`formDates`}>
                <p
                  className={selectedDate === "Tous" ? "dateSelected" : ""}
                  onClick={() => handleDateClick("Tous")}
                >
                  Tous
                </p>
                <p
                  className={
                    selectedDate === "2024-07-12" ? "dateSelected" : ""
                  }
                  onClick={() => handleDateClick("2024-07-12")}
                >
                  Ven.12.07
                </p>
                <p
                  className={
                    selectedDate === "2024-07-13" ? "dateSelected" : ""
                  }
                  onClick={() => handleDateClick("2024-07-13")}
                >
                  Sam.13.07
                </p>
                <p
                  className={
                    selectedDate === "2024-07-14" ? "dateSelected" : ""
                  }
                  onClick={() => handleDateClick("2024-07-14")}
                >
                  Dim.14.07
                </p>
              </form>
              <h3 className="titreFiltre">Heures</h3>
              <form className={`formDates`}>
                <p
                  className={selectedHeure === "Toutes" ? "dateSelected" : ""}
                  onClick={() => handleHeureClick("Toutes")}
                >
                  Toutes
                </p>
                <p
                  className={selectedHeure === "16:00" ? "dateSelected" : ""}
                  onClick={() => handleHeureClick("16:00")}
                >
                  18h
                </p>
                <p
                  className={selectedHeure === "18:00" ? "dateSelected" : ""}
                  onClick={() => handleHeureClick("18:00")}
                >
                  20h
                </p>
                <p
                  className={selectedHeure === "20:00" ? "dateSelected" : ""}
                  onClick={() => handleHeureClick("20:00")}
                >
                  22h
                </p>
                <p
                  className={selectedHeure === "22:00" ? "dateSelected" : ""}
                  onClick={() => handleHeureClick("22:00")}
                >
                  00h
                </p>
              </form>
              <h3 className="titreFiltre">Genre musical</h3>
              <form className={`formDates lastFormDates`}>
                <p
                  className={selectedType === "Tous" ? "dateSelected" : ""}
                  onClick={() => handleTypeClick("Tous")}
                >
                  Tous
                </p>
                <p
                  className={selectedType === "rap_city" ? "dateSelected" : ""}
                  onClick={() => handleTypeClick("rap_city")}
                >
                  Rap
                </p>
                <p
                  className={
                    selectedType === "metal_lair" ? "dateSelected" : ""
                  }
                  onClick={() => handleTypeClick("metal_lair")}
                >
                  Metal
                </p>
                <p
                  className={
                    selectedType === "girl_power_park" ? "dateSelected" : ""
                  }
                  onClick={() => handleTypeClick("girl_power_park")}
                >
                  Rock alternatif
                </p>
                <p
                  className={
                    selectedType === "pop_sensation_square"
                      ? "dateSelected"
                      : ""
                  }
                  onClick={() => handleTypeClick("pop_sensation_square")}
                >
                  Pop
                </p>
              </form>
              <p className="resetButton" onClick={handleResetFilters}>
                Réinitialiser les filtres
              </p>
            </div>
          </section>
        </div>
        <div className="centered">
          {filteredArtists.map((artist) => (
            <Link key={artist.id} to={`/artiste/${artist.id}`}>
              <div className="blocArtiste">
                <h3 className="nomVignette">{artist.attributes.title}</h3>
                <img
                  className="vignette"
                  src={artist.attributes.field_photop.uri}
                  alt={"Photo de profil " + artist.attributes.title}
                  title={artist.attributes.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
