import { ArrowRight, Compass } from "lucide-react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home({ destinationCount }) {
  return (
    <main className="page-content home-page">
      <Container>
        <span className="eyebrow"><Compass size={16} /> VOYAGO · CARNET DE VOYAGE</span>
        <h1>Le monde est plus proche<br />qu'il n'y paraît.</h1>
        <p>Explorez des destinations soigneusement choisies, comparez les informations de voyage et trouvez votre prochaine escapade parmi {destinationCount} idées.</p>
        <Button as={Link} to="/destinations" className="btn-main">Voir les destinations <ArrowRight size={18} /></Button>
      </Container>
    </main>
  );
}