import { Container, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function TestimoniosEstuduantesPage() {
  return (
    <Container className="p-3">
      <Card style={{ width: "40%" }}>
        <ReactPlayer
          controls
          width="100%"
          url="https://www.youtube.com/watch?v=yDyMSliKsxI"
        />
        <Card.Body>
          <Card.Title>Nombre Estudiante</Card.Title>
          <Card.Text>
            Descripcion del estudiante Descripcion del estudiante Descripcion
            del estudiante
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
