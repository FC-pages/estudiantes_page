import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function TestimoniosEstudiantesPage() {
  return (
    <Container className="text-start p-3">
      <Row>
        <Col md={12} lg={6}>
          <Card style={{ width: "100%" }}>
            <ReactPlayer
              controls
              width="100%"
              url="https://www.youtube.com/watch?v=n6i73YhDFV8"
            />
            <Card.Body>
              <Card.Title>Janice Escobedo, alumna del 6to ciclo</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                23/02/2022
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
