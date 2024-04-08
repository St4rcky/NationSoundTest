import Menu from "./Composants/Menu";
import Accueil from "./Pages/Accueil";
import Artiste from "./Composants/Artiste";
import Informations from "./Pages/Informations";
import Billetterie from "./Pages/Billetterie";
import Programmation from "./Pages/Programmation";
import Footer from "./Composants/Footer";
import Mentions from "./Composants/Mentions";
import Partenaires from "./Pages/Partenaires";
import Faq from "./Pages/Faq";
import Map from "./Pages/Map";
import "./Css/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/billetterie" element={<Billetterie />} />
        <Route path="/artiste/:id" element={<Artiste />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/carte" element={<Map />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
