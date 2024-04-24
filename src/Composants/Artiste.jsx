import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Artiste() {
  const { id } = useParams();
  const [artiste, setArtiste] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const fetchArtiste = async () => {
      try {
        const response = await fetch(
          `https://starcknationsound.infinityfreeapp.com/drupalNationSound/jsonapi/node/artiste/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArtiste(data.data);
      } catch (error) {
        console.log("Error fetching artiste:", error);
      }
    };

    fetchArtiste();
  }, [id]);

  useEffect(() => {
    if (artiste) {
      // On créé un objet date qu'on met au format voulu
      const date = new Date(artiste.attributes.field_heure);
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDateString = date.toLocaleDateString("fr-FR", options);
      setFormattedDate(formattedDateString);
    }
  }, [artiste]);

  if (!artiste) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg artisteContainer">
      <h1 className="titleArtist">{artiste.attributes.title}</h1>
      <div className="descArtiste">
        <img
          className="photoArtiste"
          src={artiste.attributes.field_photo.uri}
        ></img>
        <p className="description">
          Description : {artiste.attributes.field_description}
        </p>
        <p className="scene">
          Retrouvez <strong>{artiste.attributes.title}</strong> sur la scene{" "}
          {""}
          {/* Renvois la 1ere lettre mis en MAJ */}
          <strong>
            {artiste.attributes.field_scene.charAt(0).toUpperCase() +
              // Renvois le reste sans la 1ere lettre et remplace _ par un espace
              artiste.attributes.field_scene.replace(/_/g, " ").slice(1)}
          </strong>{" "}
          le <strong>{formattedDate}</strong>
        </p>
      </div>
      <Link
        to="/programmation"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <p className="boutonArtiste">Retour à la programmation</p>
      </Link>
    </div>
  );
}
