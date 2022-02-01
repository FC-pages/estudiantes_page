// import { Container, Tab, Tabs } from "react-bootstrap";
import { Tab, Container, Nav } from "react-bootstrap";
import React from "react";
import "../../pages/FuturoEstudiante/styles/tabs.css";
// import "../../components/estilosTab.css";
import Competiciones from "./CompeticionesEI";
import Revista_ciencias from "./RevistacienciasEI";
import Otros from "./OtrosEI";
import InstAcademicas from "./InstitucionesAcademicasEI";
import Cursosonline from "./CursosOnlineEI";
import SeminariosOnline from "./SeminariosOnlineEI";

export default function EnlacesInteresPage() {
  return (
    <Container
      style={{
        borderStyle: "solid",
        borderColor: "#1D3557",
        paddingLeft: "0",
        paddingRight: "0",
      }}
      className="text-start mt-5"
    >
      <Tab.Container defaultActiveKey="Revista_ciencias">
        <Nav
          // variant="tabs"
          style={{ backgroundColor: "#1D3557" }}
          className="justify-content-center pt-1 fs-6 style-with"
        >
          <Nav.Item >
            <Nav.Link eventKey="Revista_ciencias">
              Revista sobre ciencias
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="InstAcademicas">
              Instituciones académicas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="CursosOnline">Cursos Online</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Competicionesestudiantiles"> Competiciones Estudiantiles</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SeminariosOnline"> Seminarios Online</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Otros"> Otros </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="p-3">
          <Tab.Content >
            <Tab.Pane eventKey="Revista_ciencias">
              <Revista_ciencias />
            </Tab.Pane>
            <Tab.Pane eventKey="InstAcademicas">
              <InstAcademicas />
            </Tab.Pane>
            <Tab.Pane eventKey="CursosOnline">
              <Cursosonline />
            </Tab.Pane>
            <Tab.Pane eventKey="Competicionesestudiantiles">
              <Competiciones />
            </Tab.Pane>
            <Tab.Pane eventKey="Otros">
              <Otros />
            </Tab.Pane>
            <Tab.Pane eventKey="SeminariosOnline">
              <SeminariosOnline/>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
      /*<Tabs
        className="justify-content-center pt-1"
        defaultActiveKey="Revistas sobre ciencias"
        style={{ backgroundColor: "#1D3557" }}
      >
         <Tab eventKey="Revistas sobre ciencias" title="Revistas sobre ciencias">
          <Container className="p-3">
            <p className="fs-4 fw-bold">
              1.{" "}
              <a className="a-link-title" href="https://www.larecherche.fr/">
                La Recherche
              </a>
            </p>
            <p>
              La Recherche es una revista mensual de divulgación científica en
              francés cubriendo noticias científicas recientes. Es publicado por
              la Société d'éditions scientifiques, filial de Financière
              Tallandier. Tallandier es propiedad de Artémis, una sociedad de
              inversión de François-Henri Pinault. La sede se encuentra en
              París.
            </p>
            <a href="https://www.larecherche.fr/">
              <img
                style={{
                  backgroundColor: "#126f91",
                  height: "70px",
                  padding: "0 10px",
                }}
                alt="La Recherche"
                src="./logo_lr.png"
              />
            </a>

            <br />

            <p className="mt-3 fs-4 fw-bold">
              2.{" "}
              <a
                className="a-link-title"
                href="https://www.sciencesetavenir.fr/"
              >
                Sciences et avenir
              </a>
            </p>
            <p>
              Sciences et Avenir es una revista mensual francesa de divulgación
              científica, propiedad de Claude Perdriel. Su distribución en 2019
              fue de 231.000 ejemplares. El equipo editorial también publica
              alrededor de 15 artículos por día en su sitio web.
            </p>
            <a href="https://www.sciencesetavenir.fr/">
              <img
                style={{ height: "70px" }}
                alt="Sciences et avenir"
                src="./logo_sa.svg"
              />
            </a>

            <br />

            <p className="mt-3 fs-4 fw-bold">
              3.{" "}
              <a className="a-link-title" href="https://www.pourlascience.fr/">
                Pour la science
              </a>
            </p>
            <p>
              Pour la Science es la revista de referencia para las noticias
              científicas, con artículos en profundidad de los mejores
              investigadores en todos los campos.
            </p>
            <a href="https://www.pourlascience.fr/">
              <img
                style={{ height: "70px" }}
                alt="Pour la science"
                src="./logo_pls.png"
              />
            </a>

            <br />

            <p className="mt-3 fs-4 fw-bold">
              4.{" "}
              <a className="a-link-title" href="https://images.math.cnrs.fr/">
                Images des Mathématiques
              </a>
            </p>
            <p>
              Images des mathématiques es un sitio web francés publicado por el
              CNRS y dedicado a la popularización de las matemáticas. Su
              objetivo es mostrar la diversidad de las matemáticas de una manera
              atractiva. Está subtitulada la búsqueda matemática en palabras e
              imágenes.
            </p>
            <a href="https://images.math.cnrs.fr/">
              <img
                style={{ height: "80px" }}
                alt="Images des Mathématiques"
                src="./logo-idm-fr.png"
              />
            </a>

            <br />

            <p className="mt-3 fs-4 fw-bold">
              5.{" "}
              <a className="a-link-title" href="https://zbmath.org/">
                zbMATH Open
              </a>
            </p>
            <p>
              zbMATH, anteriormente Zentralblatt MATH, es un importante servicio
              de revisión que proporciona revisiones y resúmenes de artículos en
              matemáticas puras y aplicadas, producido por la oficina de Berlín
              de FIZ Karlsruhe {"-"} Leibniz Institute for Information
              Infrastructure GmbH.
            </p>
            <a href="https://zbmath.org/">
              <img
                style={{ height: "65px" }}
                alt="Pour la science"
                src="./zbMATH.gif"
              />
            </a>
          </Container>
        </Tab>
        <Tab
          eventKey="Instituciones academinas"
          title="Instituciones academicas"
        >
          <Container className="p-3">
            <a href="http://www.imca.edu.pe/">http://www.imca.edu.pe/</a>
            <br />
            <a href="https://impa.br/">https://impa.br/</a>
            <br />
            <a href="https://www.ens.psl.eu/en">https://www.ens.psl.eu/en</a>
            <br />
            <a href="http://www.ens-lyon.fr/en/">http://www.ens-lyon.fr/en/</a>
            <br />
            <a href="https://www.polytechnique.edu/en">
              https://www.polytechnique.edu/en
            </a>
            <br />
            <a href="https://math.berkeley.edu/">https://math.berkeley.edu/</a>
            <br />
            <a href="https://www.cnrs.fr/en">https://www.cnrs.fr/en</a>
            <br />
            <a href="https://www.mathunion.org/">https://www.mathunion.org/</a>
            <br />
            <a href="https://www.ictp.it/research/math.aspx">
              https://www.ictp.it/research/math.aspx
            </a>
          </Container>
        </Tab>
        <Tab eventKey="Cursos online" title="Cursos online">
          <Container className="p-3">
            <a href="https://la.mathworks.com/academia/students.html">
              https://la.mathworks.com/academia/students.html
            </a>
            <br />
            <a href="https://pythones.net/">https://pythones.net/</a>
            <br />
            <a href="https://www.geogebra.org/classic?lang=es">
              https://www.geogebra.org/classic?lang=es
            </a>
          </Container>
        </Tab>
        <Tab
          eventKey="Competiciones estudiantiles"
          title="Competiciones estudiantiles"
        >
          <Container className="p-3">
            <a href="https://imaginecup.microsoft.com/es-es/Compete/">
              https://imaginecup.microsoft.com/es-es/Compete/
            </a>
            <br />
            <a href="https://www.cuandopasa.com/m/index.php?v=v98102c">
              https://www.cuandopasa.com/m/index.php?v=v98102c
            </a>
          </Container>
        </Tab>
        <Tab eventKey="Otros" title="Otros">
          <Container className="p-3">
            <a href="https://www.uni.edu.pe/index.php/acerca/225-reglamentos-directivas-manuales-y-otros-documentos-institucionales">
              https://www.uni.edu.pe/index.php/acerca/225-reglamentos-directivas-manuales-y-otros-documentos-institucionales
            </a>
            <br />
            <a href="https://www.sunedu.gob.pe/registro-nacional-de-grados-y-titulos/">
              https://www.sunedu.gob.pe/registro-nacional-de-grados-y-titulos/
            </a>
            <br />
            <a href="https://www.gob.pe/prociencia">
              https://www.gob.pe/prociencia
            </a>
            <br />
            <a href="https://www.conicyt.cl/becasconicyt/">
              https://www.conicyt.cl/becasconicyt/
            </a>
            <br />
            <a href="http://pec3.org">http://pec3.org</a>
            <br />
            <a href="https://www.ieee.org/">https://www.ieee.org/</a>
            <br />
            <a href="https://www.routeyou.com/es-us/location/view/51387132/sociedad-de-matematicas-aplicadas-e-industriales">
              https://www.routeyou.com/es-us/location/view/51387132/sociedad-de-matematicas-aplicadas-e-industriales
            </a>
            <br />
            <a href="https://iciam.org/history-iciam">
              https://iciam.org/history-iciam
            </a>
            <br />
            <a href="https://www.mathunion.org/">https://www.mathunion.org/</a>
            <br />
            <a href="https://www.rsme.es/2022/01/ultimo-boletin-2/">
              https://www.rsme.es/2022/01/ultimo-boletin-2/
            </a>
          </Container>
        </Tab> 
      </Tabs>
    </Container>*/
  );
}
