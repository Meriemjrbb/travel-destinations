import { Container } from "react-bootstrap";

export default function About() {
  return (
    <main className="page-content">
      <Container>
        <span className="eyebrow">À PROPOS</span>
        <h1>Voyager commence par une idée.</h1>
        <p>Voyago est une application de découverte de destinations conçue pour rassembler l'essentiel avant de préparer un voyage : des lieux inspirants, un budget indicatif et des informations pratiques.</p>
        <p>Notre objectif est de rendre l'exploration du monde simple et accessible, et de vous aider à choisir la destination qui vous ressemble.</p>
      </Container>
    </main>
  );
}