import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PTesisCard from "./Cards/ProyTesisCard";
import { Container,Row } from 'react-bootstrap';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
let { proytesis2 } = require("../../../data/data-proytesis2.js");
let {proytesis} = require("../../../data/data-proytesis")

function PTesis() {
  // Inicializacion de variables
  const [open, setOpen] = useState(false);
  const [divsVisibility, setDivsVisibility] = useState([true, false]);
  const [dropdownName, setDropdownName] = useState("2023-1")

  // Click Listener para DropDown
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
    <Container>
      <Row className="dropdown-container">
                <Dropdown className="d-inline" show={open} onToggle={() => setOpen(!open)}>
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {dropdownName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,0)} >2023-1</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,1)} >2022-2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
      <Row>
      <Container className={`container-tab my-4 ${divsVisibility[0] ? '' : 'd-none'}`}>
        <Row xs={1} md={3} className="g-4">
        {proytesis2.map((t: any) => {
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
        </Row>
      </Container>
      </Row>
      <Row>
      <Container className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
        <Row xs={1} md={3} className="g-4">
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
        </Row>
      </Container>
      </Row>
    </Container>
  );
}

export default PTesis;
