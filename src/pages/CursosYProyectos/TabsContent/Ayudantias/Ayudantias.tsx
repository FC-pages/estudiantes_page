import { useState } from 'react';
import { Container, Row, Dropdown  } from 'react-bootstrap';
import AyudantiasCard from "../Cards/AyudantiasCard";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import '../../../Descripcion/styles.css';

let { data, data2 } = require("../../../../data/data-ayudantias.js");

function Ayudantias() {
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
      <div className="mb-2">
        <a target = "_blank" rel="noreferrer" href = "https://forms.gle/kz7isKyEyMkfB3nk6" type="button" className={`btn btn-success btn-lg insc ${divsVisibility[0] ? '' : 'd-none'}`}>Pre-inscripción</a>
        <a target = "_blank" rel="noreferrer" href = "https://forms.gle/QqWY77726kZMkm91A" type="button" className={`btn btn-warning btn-lg cancelar-insc ${divsVisibility[0] ? '' : 'd-none'}`}>Cancelar ayudantía</a>
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
      <Row>
        <S.TabContent className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
          <S.TestimoniosTab >    
            {data2.map((t: any, index: number) => {
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
