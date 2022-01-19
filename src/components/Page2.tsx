import { Container } from "react-bootstrap";
import NavigationEstudents from "./NavigationEstudents";

export default function Page2() {
  return (
    <>
      <NavigationEstudents />
      <Container className="mt-3 p-3 border border-warning rounded-3">
        <p>
          La carrera de Matemática en la Universidad Nacional de Ingeniería ,
          además de desarrollar en sus estudiantes capacidades de abstracción y
          razonamiento matemático para la solución de problemas de diversa
          índole, les brinda una sólida formación en análisis matemático y
          numérico, estadística, procesos estocásticos, optimización,
          investigación de operaciones y matemáticas discretas. Esta formación
          se complementa con una moderna y avanzada preparación
          numérico-computacional.
        </p>
      </Container>
    </>
  );
}
