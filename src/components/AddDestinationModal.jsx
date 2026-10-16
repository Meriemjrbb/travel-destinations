import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const empty = { title: "", country: "", description: "", price: "", days: 7, image: "", rating: 4 };

export default function AddDestinationModal({ show, onHide, onAdd }) {
  const [form, setForm] = useState(empty);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const close = () => {
    setForm(empty);
    setValidated(false);
    onHide();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }
    onAdd({
      ...form,
      id: Date.now(),
      price: Number(form.price),
      days: Number(form.days),
      image: form.image.trim(),
      isNew: true,
    });
    close();
  };

  return (
    <Modal show={show} onHide={close} centered className="trip-modal">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle destination</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="g-3">
            <Col sm={7}>
              <Form.Group controlId="title">
                <Form.Label>Titre</Form.Label>
                <Form.Control name="title" value={form.title} onChange={handleChange} placeholder="Ex : Lisbonne" required />
                <Form.Control.Feedback type="invalid">Donnez un titre à la destination.</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group controlId="country">
                <Form.Label>Pays</Form.Label>
                <Form.Control name="country" value={form.country} onChange={handleChange} placeholder="Portugal" required />
                <Form.Control.Feedback type="invalid">Indiquez le pays.</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} minLength={10} required />
                <Form.Control.Feedback type="invalid">Au moins 10 caractères.</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group controlId="price">
                <Form.Label>Prix/nuit ($)</Form.Label>
                <Form.Control type="number" min="1" name="price" value={form.price} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">Entrez un prix valide.</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group controlId="days">
                <Form.Label>Durée (jours)</Form.Label>
                <Form.Control type="number" min="1" name="days" value={form.days} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group controlId="image">
                <Form.Label>URL de l'image</Form.Label>
                <Form.Control type="url" name="image" value={form.image} onChange={handleChange} placeholder="https://…" />
                <Form.Text muted>Optionnel</Form.Text>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Label className="d-block">Votre note</Form.Label>
              <Rating initialValue={form.rating} allowFraction size={28} onClick={(r) => setForm({ ...form, rating: r })} />
              <span className="rating-num ms-2">{form.rating}</span>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="link" className="text-secondary" onClick={close}>Annuler</Button>
          <Button type="submit" className="btn-trip">Ajouter la destination</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
