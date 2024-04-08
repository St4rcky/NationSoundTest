import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(
          "http://localhost/drupalNationSound/jsonapi/node/artiste"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const months = [
          "janvier",
          "février",
          "mars",
          "avril",
          "mai",
          "juin",
          "juillet",
          "août",
          "septembre",
          "octobre",
          "novembre",
          "décembre",
        ];

        // On crée un tableau pour stocker les événements par date
        const eventsByDate = {};

        // On parcourt les données pour regrouper les artistes par date
        data.data.forEach((artistData) => {
          const { field_date, title } = artistData.attributes;
          const eventDate = new Date(field_date);
          const formattedDate = `${eventDate.getDate()} ${
            months[eventDate.getMonth()]
          }`;

          if (formattedDate in eventsByDate) {
            eventsByDate[formattedDate].push({ id: artistData.id, title });
          } else {
            eventsByDate[formattedDate] = [{ id: artistData.id, title }];
          }
        });

        // On transforme l'objet en tableau pour le rendre compatible avec le rendu JSX
        const scheduleArray = Object.entries(eventsByDate).map(
          ([date, artists]) => ({
            date,
            artists,
          })
        );

        setSchedule(scheduleArray);
      } catch (error) {
        console.log("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <>
      <div className="container2">
        <div className="dateAccueil">
          {schedule
            .map((event) => (
              <div key={event.date}>
                <p className="date">{`— le ${event.date} — `}</p>
                {event.artists.map((artist) => (
                  <Link key={artist.id} to={`/artiste/${artist.id}`}>
                    <p className="bleu artiste">{artist.title}</p>
                  </Link>
                ))}
              </div>
            ))
            .reverse()}
        </div>
      </div>
      <div className="test bg">
        <Link
          to="/programmation"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="divImage">
            <img
              src="/image/Artistes.jpg"
              alt="Artistes"
              className="imageAccueil"
            />
            <h2 className="titreImage">Programmation</h2>
          </div>
        </Link>
        <Link
          to="/billetterie"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="divImage">
            <img
              src="/image/billetterie.jpg"
              alt="Billeterie"
              className="imageAccueil"
            />
            <h2 className="titreImage2">Billeterie</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
