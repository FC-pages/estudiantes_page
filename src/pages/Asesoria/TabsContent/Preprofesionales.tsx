
import { useState } from 'react';

import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PreprofCards from "./Cards/PreprofCards";
import { Container,Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
let { data } = require("../../../data/data-practicas.js");
let { data2 } = require("../../../data/data-practicas.js");

function Preprofesionales() {
  const [open, setOpen] = useState(false);
  const [divsVisibility, setDivsVisibility] = useState([true, false]);
  const [dropdownName, setDropdownName] = useState("2023-1")

  const handleItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
      event.preventDefault();
      if (index === 0) 
      {
        setDivsVisibility([true, false]);
        setDropdownName("2023-1")
      } 
      else if (index === 1) 
      {
        setDivsVisibility([false, true]);
        setDropdownName("2022-2")
      }
      setOpen(!open);
  }

  return (
    <div>
      {/*<h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>*/}
      <Container>
            <div className="mb-2">
            <a target = "_blank" href = "https://forms.gle/cn49Dz7yrw6s3A5VA" type="button" className={`btn btn-success btn-lg insc ${divsVisibility[0] ? '' : 'd-none'}`}>Pre-inscripción</a>
            <a target = "_blank" href = "https://forms.gle/J4szj1Cx3k46MZ5v5" type="button" className={`btn btn-danger btn-lg cancelar-insc ${divsVisibility[0] ? '' : 'd-none'}`}>Cancelar pre-inscripción</a>
            </div>
        <Row>
          <Dropdown className="d-inline">
              <div className="d-flex align-items-center">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                  {dropdownName}
              </Dropdown.Toggle>
              </div>
              <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,0)} >2023-1</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,1)} >2022-2</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Row>
      <Row>
        <S.TabContent className={`container-tab my-4 ${divsVisibility[0] ? '' : 'd-none'}`}>
          <S.TestimoniosTab >    
            {data.map((t: any) => {
              return (
                <PreprofCards
                  marca={t.marca}
                  correo={t.correo}
                  nombres = {t.nombres}
                  apellidos = {t.apellidos}
                  codigo_alumno = {t.codigo_alumno}
                  celular={t.celular}
                  supervisor = {t.supervisor}
                  actividad = {t.actividad}
                  institucion = {t.institucion}
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </Row>  
      <Row>
        <S.TabContent className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
          <S.TestimoniosTab >    
            {data2.map((t: any) => {
              return (
                <PreprofCards
                  marca={t.marca}
                  correo={t.correo}
                  nombres = {t.nombres}
                  apellidos = {t.apellidos}
                  codigo_alumno = {t.codigo_alumno}
                  celular={t.celular}
                  supervisor = {t.supervisor}
                  actividad = {t.actividad}
                  institucion = {t.institucion}
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </Row>    
      </Container>
    </div>
  );
}

export default Preprofesionales;
