import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function TestimoniosEstudiantesPage() {
  return (
    <Container className="text-start p-3">
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <ReactPlayer
              controls
              width="100%"
              url="https://www.youtube.com/watch?v=yDyMSliKsxI"
            />
            <Card.Body>
              <Card.Title>Nombre Estudiante 1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                dd/mm/aaaa
              </Card.Subtitle>
              <Card.Text>
                Descripción del estudiante Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Perferendis sint illum iusto
                nostrum cumque qui voluptas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <ReactPlayer
              controls
              width="100%"
              url="https://www.youtube.com/watch?v=yDyMSliKsxI"
            />
            <Card.Body>
              <Card.Title>Nombre Estudiante 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                dd/mm/aaaa
              </Card.Subtitle>
              <Card.Text>
                Descripción del estudiante Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Perferendis sint illum iusto
                nostrum cumque qui voluptas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
