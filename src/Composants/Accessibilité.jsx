import React from "react";

export default function Accessibilité() {
  return (
    <>
      <div className="blockInfo">
        <h2 className="title2">UN FESTIVAL ACCESSIBLE A TOUS</h2>
        <img src="image/accessi.jpeg" className="imgResto"></img>
        <p>
          Le festival s'engage à offrir une expérience inclusive à tous nos
          festivaliers, y compris ceux en situation de handicap.
        </p>
        <br />
        <p>
          Pour accéder aux installations dédiées et bénéficier d'un
          accompagnement personnalisé,{" "}
          <strong className="bleu">un justificatif de handicap</strong> pourra
          être demandée. Cette preuve peut prendre la forme d'une carte
          d'invalidité ou tout autre document officiel.
        </p>
        <br />
        <p>
          Les personnes en situation de handicap nécessitant un accompagnement
          auront droit à <strong className="bleu">une place gratuite</strong>{" "}
          pour leur accompagnant. Cette offre est valable pour les personnes
          disposant d'une carte d'invalidité avec la notion :{" "}
          <strong className="bleu"> "besoin d'accompagnement".</strong>
        </p>
        <br />
        <p>Les chiens d'assistance sont les bienvenus sur le festival.</p>
        <h3 className="bleu">Equipements Adaptés</h3>
        <p>
          <strong className="bleu">Toilettes Accessibles :</strong> Des
          installations sanitaires adaptées aux personnes en situation de
          handicap seront disponibles sur le site du festival.
        </p>

        <p>
          <strong className="bleu">Zone de Vision Adaptée :</strong> Des zones
          de vision spécialement aménagées seront prévues pour garantir une
          visibilité optimale aux personnes en fauteuil roulant ou à mobilité
          réduite.
        </p>

        <p>
          <strong className="bleu">Rampes d'Accès :</strong> Des rampes d'accès
          seront installées aux endroits stratégiques du site pour faciliter la
          circulation des personnes en fauteuil roulant.
        </p>

        <p>
          <strong className="bleu">Espaces de Repos :</strong> Des espaces de
          repos seront prévus pour permettre aux festivaliers en situation de
          handicap de se reposer et de se ressourcer confortablement.
        </p>
      </div>
    </>
  );
}
