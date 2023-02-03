import { useState, useEffect } from 'react';
/* Importaciones boostrap*/
import { Container,Row, Spinner } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import linksgs from '../../../../helpers/linksgs';

/* Importar template de tarjetas*/
import CursosElectivosCards from '../Cards/CursosElectivosCard';

/* Importar data temporal*/
let { data2022_2 } = require('../../../../data/data-electivos-2022-2.js');
let { data2023_1 } = require('../../../../data/data-electivos-2023-1.js');


function CursosElectivos(){
    // Inicializacion de variables
    const [open, setOpen] = useState(false);
    const [divsVisibility, setDivsVisibility] = useState([true, false]);
    const [dropdownName, setDropdownName] = useState("2023-1")

    // Click Listener para DropDown
    const handleItemClick = (event, index) => {
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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch(linksgs.cursos_electivos).then((response) => {
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
  },[]);
  let Loading = () => {
    return (
      <div className='d-flex flex-row justify-content-center'>
      <Spinner className="mt-5 mb-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    );
  };
  if (loading) return <Loading />;
  if (error) return <>"Error!"</>;

    return(
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
                        {data === null ? (<></>) : (data.map((t, index) => {
                            return (
                            <CursosElectivosCards key={index}
                                marca={t.marca}
                                correo={t.correo}
                                apellidos={t.apellidos_docente}
                                nombres = {t.nombres_docente}
                                curso = {t.curso}
                                codigo_curso = {t.curso_codigo}
                                prerrequisitos = {t.prerequisitos}
                                silabo = {t.silabo}
                                preinscripcion = {t.preinscripcion}
                                inscritos = {t.inscritos}
                            />
                            );
                        }))}
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
                    <Row xs={1} md={3} className="g-4">
                    {data2022_2.map((t, index) => {
                        return (
                        <CursosElectivosCards key={index}
                            marca={t.marca}
                            correo={t.correo}
                            apellidos={t.apellidos}
                            nombres = {t.nombres}
                            curso = {t.curso}
                            codigo_curso = {t.codigo_curso}
                            prerrequisitos = {t.prerequisitos}
                            silabo = {t.silabo}
                            preinscripcion = {t.preinscripcion}
                            inscritos = {t.inscritos}
                        />
                        );
                    })}
                    </Row>
                </Container>
            </Row>
        </Container>
    );
}

export default CursosElectivos;