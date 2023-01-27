import React from 'react';
import { useState, useEffect } from 'react';
import { Container,Row, Spinner } from 'react-bootstrap';

import ProyectoTesisCard from "../Cards/ProyectoTesisCard";
import Dropdown from 'react-bootstrap/Dropdown';

import linksgs from '../../../../helpers/linksgs';

import '../../../Descripcion/styles.css';

let {proytesis} = require("../../../../data/data-proytesis")

function ProyectoTesis() {

  // Inicializacion de variables
  const [open, setOpen] = useState(false);
  const [divsVisibility, setDivsVisibility] = useState([true, false]);
  const [dropdownName, setDropdownName] = useState("2023-1")

  const link_proyecto_tesis = linksgs.proyecto_tesis;

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

  type dataType = Array<any>;
  const [data, setData] = useState({} as dataType);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch(link_proyecto_tesis).then((response) => {
      if (response.ok) 
      {
        return response.json();
      }
      throw response;
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
  return () => {
    isMounted = false;
  };
  },[link_proyecto_tesis]);

  let Loading = () => {
    return (
      <Spinner className="mt-5 mb-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };
  if (loading) return <Loading />;
  if (error) return <>"Error!"</>;

  return (
    <Container>
      <Row className="dropdown-container">
                <Dropdown className="d-inline" show={open} onToggle={() => setOpen(!open)}>
                <div className="d-flex align-items-center">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {dropdownName}
                    </Dropdown.Toggle>
                    <Container>
                        <a target = "_blank" rel="noreferrer" href = "https://forms.gle/Aqj9Rpq9tSfDDS117" type="button" className={`btn btn-danger btn-lg cancelar-insc ${divsVisibility[0] ? '' : 'd-none'}`}>Cancelar pre-inscripción</a>
                    </Container>
                    </div>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,0)} >2023-1</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,1)} >2022-2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
      <Row>
      <Container className={`container-tab my-4 ${divsVisibility[0] ? '' : 'd-none'}`}>
        <Row xs={1} md={3} className="g-4">
            { data === null ? (<></>) : (data.map((t: any, index: number) => {
              return (
                <ProyectoTesisCard key={index}
                  marca = {t.marca}
                  correo={t.correo}
                  apellidos_docente = {t.apellidos_docente}
                  nombres_docente = {t.nombres_docente}
                  descripcion = {t.descripcion}
                />
              );
            })
          )}
        </Row>
      </Container>
      </Row>
      <Row>
      <Container className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
        <Row xs={1} md={3} className="g-4">
        {proytesis.map((t: any, index: number) => {
              return (
                <ProyectoTesisCard key={index}
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

export default ProyectoTesis;