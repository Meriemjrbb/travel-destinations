import { ArrowLeft, CalendarDays, Plane, Star } from "lucide-react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Details({ destinations }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((item) => String(item.id) === id);

  if (!destination) {
    return (
      <main className="page-content">
        <Container>
          <h1>Destination introuvable</h1>
          <Button className="btn-main" onClick={() => navigate("/")}>Return Home</Button>
        </Container>
      </main>
    );
  }

  return (
    <main className="details-page">
      <Container className="py-5">
        <Button variant="link" className="back-link" onClick={() => navigate(-1)}><ArrowLeft size={17} /> Retour aux destinations</Button>
        <article className="details-layout">
          <img className="details-image" src={destination.image} alt={destination.title} />
          <div className="details-copy">
            <span className="eyebrow">{destination.country}</span>
            <h1>{destination.title}</h1>
            <p className="details-description">{destination.description}</p>
            <div className="details-rating"><Star size={17} fill="currentColor" /> {destination.rating} / 5</div>
            <div className="details-facts">
              <p><strong>Prix</strong><span>${destination.price} / nuit</span></p>
              <p><strong>Durée du séjour</strong><span>{destination.days} jours</span></p>
              <p><strong><Plane size={17} /> Durée du vol</strong><span>{destination.flightDuration || "Non renseignée"}</span></p>
              <p><strong>Compagnie aérienne</strong><span>{destination.airline || "Non renseignée"}</span></p>
              <p><strong><CalendarDays size={17} /> Meilleure saison</strong><span>{destination.bestSeason || "Non renseignée"}</span></p>
            </div>
            <Button className="btn-main" onClick={() => navigate("/")}>Return Home</Button>
          </div>
        </article>
      </Container>
    </main>
  );
}