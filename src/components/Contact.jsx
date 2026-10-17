import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <main className="page-content">
      <Container>
        <span className="eyebrow">CONTACT</span>
        <h1>Parlons de votre prochain voyage.</h1>
        <p>Une question ou une suggestion ? Contactez l'équipe Voyago.</p>
        <ul className="contact-list">
          <li><Mail size={19} /><a href="mailto:contact@voyago.tn">contact@voyago.tn</a></li>
          <li><Phone size={19} /><a href="tel:+21670000000">+216 70 000 000</a></li>
          <li><MapPin size={19} /><span>Institut Supérieur d'Informatique et de Multimédia de Gabès</span></li>
        </ul>
      </Container>
    </main>
  );
}