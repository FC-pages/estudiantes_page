import '../../Descripcion/styles.css';
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import AyudantiasCard from "../Cards/AyudantiasCard";
import { Container,Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
let { data } = require("../../../data/data-ayudantias.js");

function Ayudantias() {
  return (
      <Container>
      <div className="mb-2">
        <a target = "_blank" href = "https://forms.gle/kz7isKyEyMkfB3nk6" type="button" className="btn btn-success btn-lg insc">Pre-inscripción</a>
        <a target = "_blank" href = "https://forms.gle/QqWY77726kZMkm91A" type="button" className="btn btn-warning btn-lg cancelar-insc">Cancelar ayudantía</a>
      </div>
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
          {data.map((t: any, index: number) => {
            return (
              <AyudantiasCard key={index}
                marca={t.marca}
                correo={t.correo}
                nombres = {t.nombres}
                apellidos = {t.apellidos}
                codigo_alumno = {t.codigo_alumno}
                celular={t.celular}                
                curso={t.curso}
                codigo_curso={t.codigo_curso}
                seccion={t.seccion}
                profesor_teoria={t.profesor_teoria}
                profesor_practica = {t.profesor_practica}
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>  
      </Row>        
      </Container>
  );
}

export default Ayudantias;
