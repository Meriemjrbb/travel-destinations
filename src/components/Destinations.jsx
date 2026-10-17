import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DestinationCard from "./DestinationCard";

const ratingChips = [
  { label: "Toutes", value: 0 },
  { label: "3 et +", value: 3 },
  { label: "4 et +", value: 4 },
  { label: "4.5 et +", value: 4.5 },
  { label: "5", value: 5 },
];

export default function Destinations({ destinations, onDelete, onAddClick }) {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const filtered = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(search.trim().toLowerCase()) && destination.rating >= minRating
  );
  const reset = () => {
    setSearch("");
    setMinRating(0);
  };

  return (
    <>
      <header className="hero">
        <Container>
          <h1>Découvrez votre<br />prochaine aventure</h1>
          <p>Plus de {destinations.length} destinations sélectionnées à travers le monde.</p>
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <Form.Control type="search" aria-label="Rechercher une destination" placeholder="Rechercher une destination (ex : Bali, Paris…)" value={search} onChange={(event) => setSearch(event.target.value)} />
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
                {(search || minRating > 0) && <button className="btn-link-reset" onClick={reset}>Réinitialiser</button>}
              </p>
            </div>
            <div className="chips" role="group" aria-label="Filtrer par note">
              {ratingChips.map((chip) => (
                <button key={chip.value} className={`chip ${minRating === chip.value ? "active" : ""}`} onClick={() => setMinRating(chip.value)}>
                  {chip.label}{chip.value > 0 && <Star size={13} fill="currentColor" />}
                </button>
              ))}
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="empty">
              <h3>Aucune destination trouvée</h3>
              <p>Essayez un autre titre, baissez la note minimale ou ajoutez la vôtre.</p>
              <Button className="btn-main" onClick={onAddClick}>Ajouter une destination</Button>
            </div>
          ) : (
            <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
              {filtered.map((destination) => (
                <Col key={destination.id}><DestinationCard destination={destination} onDelete={onDelete} /></Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
    </>
  );
}