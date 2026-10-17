import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Globe, Plus } from "lucide-react";
import { Container, Button } from "react-bootstrap";
import AddDestinationModal from "./components/AddDestinationModal";
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import { initialDestinations } from "./data";

export default function App() {
  const [destinations, setDestinations] = useState(() => {
    try {
      const savedDestinations = localStorage.getItem("voyago-destinations");
      return savedDestinations ? JSON.parse(savedDestinations) : initialDestinations;
    } catch {
      return initialDestinations;
    }
  });
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    localStorage.setItem("voyago-destinations", JSON.stringify(destinations));
  }, [destinations]);
  const addDestination = (dest) => setDestinations([dest, ...destinations]);
  const removeDestination = (id) => setDestinations(destinations.filter((d) => d.id !== id));

  return (
    <BrowserRouter>
      <nav className="topbar">
        <Container className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <Link className="logo text-decoration-none" to="/"><Globe size={26} /> Voyago</Link>
          <div className="nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Button className="btn-main" onClick={() => setShowModal(true)}><Plus size={18} /> Ajouter</Button>
        </Container>
      </nav>

      <Routes>
        <Route path="/" element={<Home destinationCount={destinations.length} />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} onDelete={removeDestination} onAddClick={() => setShowModal(true)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations/:id" element={<Details destinations={destinations} />} />
        <Route path="*" element={<Home destinationCount={destinations.length} />} />
      </Routes>

      <footer className="footer">Voyago</footer>
      <AddDestinationModal show={showModal} onHide={() => setShowModal(false)} onAdd={addDestination} />
    </BrowserRouter>
  );
}
