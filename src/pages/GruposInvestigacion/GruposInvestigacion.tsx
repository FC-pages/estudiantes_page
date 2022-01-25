import Accordion from "../../components/Accordion";

import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

const accordionItems = [
  {
    title: "1. Línea de Análisis y Teoría de Números",
    content: (
      <div>
        Este proceso consiste en separar la partículas suspendidas en un líquido
        por medio de la gravedad o la fuerza centrífuga. Se aplica por ejemplo
        en minería y en análisis de glóbulos rojos en la sangre. El trabajo,
        dirigido por el profesor Sepúlveda, consistió en determinar un método
        para extraer los parámetros que rigen el proceso, comparando las
        ecuaciones con observaciones reales.
        <Row xs={1} md={1} className="g-4">
          <S.ContainerVideos>
            <div className="video">
              <Card bg="dark" text="white">
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://youtu.be/cZJv2FKutPU"
                />
                <Card.Body>
                  <Card.Title>
                    El Patrón de los Números Primos y la Hipótesis de Riemann
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              <Card bg="dark" text="white">
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://youtu.be/m_4X6Hl7QJU"
                />
                <Card.Body>
                  <Card.Title>
                    ¿Puedes Calcular el Factorial de Un Medio?
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </S.ContainerVideos>
        </Row>
      </div>
    ),
  },
  {
    title: "2. Línea de Optimización",
    content: (
      <div>
        Se agrega ácido sulfúrico al mineral molido, produciendo sulfato de
        cobre, el que es recuperado al fondo de la pila. Modelar este proceso
        adecuadamente permite optimizar la cantidad de ácido usado y el
        porcentaje de cobre recuperado de la pila. El profesor Bürger y su
        equipo desarrollan esta línea.
      </div>
    ),
  },
  {
    title: "3. ",
    content: (
      <div>
        El crecimiento de los seres vivos está regulado por la interacción entre
        sus genes. Estos siguen una dinámica de estimulación-inihibición que se
        puede estudiar con la técnica de Micro-array (1), y traducir en una red
        de interacción. La matemática es fundamental para deducir y entender
        estas redes, las cuales son estudiadas por el profesor Aracena y su
        equipo.
      </div>
    ),
  },
  {
    title: "4. ",
    content: <div></div>,
  },
  {
    title: "5. ",
    content: <div></div>,
  },
  {
    title: "6. ",
    content: <div></div>,
  },
];

function GruposInvestigacion() {
  return (
    <div>
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}

export default GruposInvestigacion;
