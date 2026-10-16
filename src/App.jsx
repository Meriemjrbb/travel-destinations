import { useState } from "react";
import { Globe, Search, Plus, Star } from "lucide-react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DestinationCard from "./components/DestinationCard";
import AddDestinationModal from "./components/AddDestinationModal";
import { initialDestinations } from "./data";

const ratingChips = [
  { label: "Toutes", value: 0 },
  { label: "3 et +", value: 3 },
  { label: "4 et +", value: 4 },
  { label: "4.5 et +", value: 4.5 },
  { label: "5", value: 5 },
];

export default function App() {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Les deux filtres fonctionnent ensemble
  const filtered = destinations.filter(
    (d) =>
      d.title.toLowerCase().includes(search.trim().toLowerCase()) &&
      d.rating >= minRating
  );

  const addDestination = (dest) => setDestinations([dest, ...destinations]);
  const removeDestination = (id) => setDestinations(destinations.filter((d) => d.id !== id));
  const reset = () => { setSearch(""); setMinRating(0); };

  return (
    <>
      <nav className="topbar">
        <Container className="d-flex align-items-center justify-content-between">
          <span className="logo"><Globe size={26} /> Voyago</span>
          <Button className="btn-main" onClick={() => setShowModal(true)}><Plus size={18} /> Ajouter une destination</Button>
        </Container>
      </nav>

      <header className="hero">
        <Container>
          <h1>Découvrez votre<br />prochaine aventure</h1>
          <p>Plus de {destinations.length} destinations sélectionnées à travers le monde.</p>

          <div className="search-box">
            <Search className="search-icon" size={20} />
            <Form.Control
              type="search"
              aria-label="Rechercher une destination"
              placeholder="Rechercher une destination (ex : Bali, Paris…)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-5">
          <div className="section-head">
            <div>
              <h2>Destinations populaires</h2>
              <p className="results" aria-live="polite">
                {filtered.length} destination{filtered.length > 1 ? "s" : ""}
                {(search || minRating > 0) && (
                  <button className="btn-link-reset" onClick={reset}>Réinitialiser</button>
                )}
              </p>
            </div>
            <div className="chips" role="group" aria-label="Filtrer par note">
              {ratingChips.map((c) => (
                <button
                  key={c.value}
                  className={`chip ${minRating === c.value ? "active" : ""}`}
                  onClick={() => setMinRating(c.value)}
                >
                  {c.label}
                  {c.value > 0 && <Star size={13} fill="currentColor" />}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h3>Aucune destination trouvée</h3>
              <p>Essayez un autre titre, baissez la note minimale ou ajoutez la vôtre.</p>
              <Button className="btn-main" onClick={() => setShowModal(true)}>Ajouter une destination</Button>
            </div>
          ) : (
            <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
              {filtered.map((d) => (
                <Col key={d.id}>
                  <DestinationCard destination={d} onDelete={removeDestination} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>

      <footer className="footer">Voyago — TP React Hooks · ISIMG</footer>

      <AddDestinationModal show={showModal} onHide={() => setShowModal(false)} onAdd={addDestination} />
    </>
  );
}
