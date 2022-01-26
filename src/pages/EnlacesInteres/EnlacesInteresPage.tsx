import { Container, Tab, Tabs } from "react-bootstrap";
import React from "react";
import "../../styles/estudiantes/tabs.css";

export default function EnlacesInteresPage() {
  return (
    <Container className="text-start p-3">
      <Tabs
        className="justify-content-center pt-1"
        defaultActiveKey="Revistas sobre ciencias"
        style={{ backgroundColor: "#1D3557" }}
      >
        <Tab eventKey="Revistas sobre ciencias" title="Revistas sobre ciencias">
          <a href="https://www.larecherche.fr/">https://www.larecherche.fr/</a>
          <br />
          <a href="https://www.sciencesetavenir.fr/">
            https://www.sciencesetavenir.fr/
          </a>
          <br />
          <a href="https://www.pourlascience.fr/">
            https://www.pourlascience.fr/
          </a>
          <br />
          <a href="https://images.math.cnrs.fr/">
            https://images.math.cnrs.fr/
          </a>
          <br />
          <a href="https://zbmath.org/">https://zbmath.org/</a>
        </Tab>
        <Tab eventKey="Instituciones" title="Instituciones">
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
        </Tab>
        <Tab eventKey="Cursos" title="Cursos">
          <a href="https://la.mathworks.com/academia/students.html">
            https://la.mathworks.com/academia/students.html
          </a>
          <br />
          <a href="https://pythones.net/">https://pythones.net/</a>
          <br />
          <a href="https://www.geogebra.org/classic?lang=es">
            https://www.geogebra.org/classic?lang=es
          </a>
        </Tab>
        <Tab eventKey="Competiciones" title="Competiciones">
          <a href="https://imaginecup.microsoft.com/es-es/Compete/">
            https://imaginecup.microsoft.com/es-es/Compete/
          </a>
          <br />
          <a href="https://www.cuandopasa.com/m/index.php?v=v98102c">
            https://www.cuandopasa.com/m/index.php?v=v98102c
          </a>
        </Tab>
        <Tab eventKey="Otros" title="Otros">
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
        </Tab>
      </Tabs>
    </Container>
  );
}
