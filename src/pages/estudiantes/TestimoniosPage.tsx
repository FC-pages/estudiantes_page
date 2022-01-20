import { Container, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function TestimoniosPage() {
  return (
    <Container className="p-3">
      <Card bg="dark" text="white" style={{ width: "50%" }}>
        <ReactPlayer
          controls
          width="100%"
          url="https://www.youtube.com/watch?v=yDyMSliKsxI"
        />
        <Card.Body>
          <Card.Title>Testimonio estudiante</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}
