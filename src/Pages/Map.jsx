import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function Map() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const fetchCurrentEvents = async () => {
      const response = await fetch(
        "http://localhost/drupalNationSound/jsonapi/node/artiste"
      );
      const data = await response.json();
      setCurrentEvents(data.data);
    };

    fetchCurrentEvents();
  }, []);

  const barIcon = L.icon({
    iconUrl: "/image/barIcon.png",
    iconSize: [32, 32],
  });
  const restoIcon = L.icon({
    iconUrl: "/image/restoIcon.png",
    iconSize: [32, 32],
  });
  const wcIcon = L.icon({
    iconUrl: "/image/wcIcon.png",
    iconSize: [32, 32],
  });
  const campIcon = L.icon({
    iconUrl: "/image/campIcon.png",
    iconSize: [32, 32],
  });
  const sceneIcon = L.icon({
    iconUrl: "/image/sceneIcon.png",
    iconSize: [32, 32],
  });
  const markers = [
    {
      categorie: "scene",
      nom: "Rap city",
      coordonnee: [48.82711, 2.43076],
      icon: sceneIcon,
      description: "Venez écouter les concerts de musique Rap ",
    },
    {
      categorie: "scene",
      nom: "Metal lair",
      coordonnee: [48.829558, 2.433296],
      icon: sceneIcon,
      description: "Venez écouter les concerts de musique Metal",
    },
    {
      categorie: "scene",
      nom: "Girl power park",
      coordonnee: [48.827255, 2.434571],
      icon: sceneIcon,
      description: "Venez écouter les concerts de musique Rock alternatif",
    },
    {
      categorie: "scene",
      nom: "Pop sensation square",
      coordonnee: [48.828334, 2.432339],
      icon: sceneIcon,
      description: "Venez écouter les concerts de musique Pop",
    },
    {
      categorie: "toilettes",
      nom: "Toilette",
      coordonnee: [48.827832, 2.430997],
      icon: wcIcon,
      description: "Toilette pour homme et femme",
    },
    {
      categorie: "toilettes",
      nom: "Toilette",
      coordonnee: [48.829487, 2.433934],
      icon: wcIcon,
      description: "Toilette pour homme et femme",
    },
    {
      categorie: "toilettes",
      nom: "Toilette",
      coordonnee: [48.828653, 2.431643],
      icon: wcIcon,
      description: "Toilette pour homme et femme",
    },
    {
      categorie: "toilettes",
      nom: "Toilette",
      coordonnee: [48.827754, 2.434384],
      icon: wcIcon,
      description: "Toilette pour homme et femme",
    },
    {
      categorie: "resto",
      nom: "Vegan Food",
      coordonnee: [48.829163, 2.432371],
      icon: restoIcon,
      description:
        "Plaisirs vegan sains et délicieux ! Burgers, wraps, salades et desserts au menu.",
    },
    {
      categorie: "resto",
      nom: "Beat Food",
      coordonnee: [48.827725, 2.432928],
      icon: restoIcon,
      description:
        "Repas rapides et savoureux entre deux concerts ! Sandwichs, frites, pizzas et boissons.",
    },
    {
      categorie: "resto",
      nom: "Le monde en bouche",
      coordonnee: [48.828408, 2.434463],
      icon: restoIcon,
      description:
        "Voyage culinaire à travers le monde ! Découvrez des spécialités exotiques et variées.",
    },
    {
      categorie: "bar",
      nom: "La guiguette",
      coordonnee: [48.82873, 2.433653],
      icon: barIcon,
      description:
        "Ambiance festive et boissons variées ! Bières, softs et alcools forts dans une atmosphère conviviale.",
    },
    {
      categorie: "bar",
      nom: "Bar vintage",
      coordonnee: [48.827709, 2.432118],
      icon: barIcon,
      description:
        "Esprit des années folles ! Cocktails rétro, bières artisanales et vins fins dans une ambiance chaleureuse.",
    },
    {
      categorie: "camping",
      nom: "Camping",
      coordonnee: [48.82903, 2.436107],
      icon: campIcon,
      description: "Ici se trouve le camping",
    },
  ];

  const filteredLocations = selectedCategory
    ? markers.filter((marker) => marker.categorie === selectedCategory)
    : markers;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="blockMap">
        <p>FILTRE</p>
        <div className="filtreMap">
          <p className="boutonMap" onClick={() => handleCategoryChange(null)}>
            Réinitialiser
          </p>
          <button
            className="boutonMap"
            onClick={() => handleCategoryChange("scene")}
          >
            <img className="iconMap" src="image/sceneIcon.png" alt="scene" />
            Scènes
          </button>
          <button onClick={() => handleCategoryChange("resto")}>
            Restaurants
          </button>
          <button onClick={() => handleCategoryChange("bar")}>Bar</button>
          <button onClick={() => handleCategoryChange("toilettes")}>
            Toilettes
          </button>
          <button onClick={() => handleCategoryChange("camping")}>
            Camping
          </button>
        </div>
        <button>En cours</button>
        <select name="heure" id="selectHeure">
          <option value="" disabled>
            Heure
          </option>
          <option value="16:00">18h</option>
          <option value="18:00">20h</option>
          <option value="20:00">22h</option>
          <option value="22:00">00h</option>
        </select>
        <select name="date" id="selectDate">
          <option value="" disabled>
            Date
          </option>
          <option value="2024-07-12">12</option>
          <option value="2024-07-13">13</option>
          <option value="2024-07-14">14</option>
        </select>

        <MapContainer
          center={[48.8283, 2.433]}
          zoom={16}
          style={{ height: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredLocations.map((marker, index) => (
            <Marker key={index} position={marker.coordonnee} icon={marker.icon}>
              <Popup>
                <h3 className="iconTitle">{marker.nom}</h3>
                <p>{marker.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}
