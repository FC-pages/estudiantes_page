import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PTesisCard from "./Cards/ProyTesisCard";
import { Container,Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
let { proytesis } = require("../../../data/data-proytesis2.js");


function PTesis() {
  
  return (
    <Container>
      <Row>
      <Dropdown className="d-inline">
          <div className="d-flex align-items-center">
          <Dropdown.Toggle id="dropdown-autoclose-true">
              2023-1
          </Dropdown.Toggle>
          </div>
          <Dropdown.Menu>
              <Dropdown.Item>2023-1</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </Row>
      <Row>
      <S.TabContent>
          <S.TestimoniosTab >    
            {proytesis.map((t: any) => {
              return (
                <PTesisCard
                  // curso={t.curso}
                  marca = {t.marca}
                  tema={t.tema}
                  correo={t.correo}
                  apellidos_docente = {t.apellidos_docente}
                  nombres_docente = {t.nombres_docente}
                  descripcion = {t.descripcion}
                  preinscripcion = {t.preinscripcion}
                  inscritos = {t.inscritos}
                  // multiline = {t.multiline}
                />
              );
            })}

          </S.TestimoniosTab>
        </S.TabContent>
      </Row>
    </Container>
  );
}

export default PTesis;
