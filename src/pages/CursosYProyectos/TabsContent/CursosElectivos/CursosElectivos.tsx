import { useState } from 'react';

/* Importaciones boostrap*/
import { Container,Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

/* Importar template de tarjetas*/
import CursosElectivosCards from '../Cards/CursosElectivosCards';

/* Importar data temporal*/
let { data2022_2 } = require('../../../../data/data-electivos-2022-2.js');
let { data2023_1 } = require('../../../../data/data-electivos-2023-1.js');


function CursosElectivos(){
    // Inicializacion de variables
    const [open, setOpen] = useState(false);
    const [divsVisibility, setDivsVisibility] = useState([true, false]);

    // Click Listener para DropDown
    const handleItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        event.preventDefault();
        if (index === 0) 
        {
          setDivsVisibility([true, false]);
        } 
        else if (index === 1) 
        {
          setDivsVisibility([false, true]);
        }
        setOpen(!open);
    }

    return(
        <Container>
            <Row className="dropdown-container">
                <Dropdown className="d-inline" show={open} onToggle={() => setOpen(!open)}>
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Selecciona el ciclo académico
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,0)} >2023-1</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleItemClick(e,1)} >2022-2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row>
                <Container className={`container-tab my-4 ${divsVisibility[0] ? '' : 'd-none'}`}>
                    <h1 className="fs-2">Ciclo 2023-1</h1>
                    <Row xs={1} md={3} className="g-4">
                    {data2023_1.map((t: any) => {
                        return (
                        <CursosElectivosCards
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
                    <Container>
                        <a target = "_blank" href = "https://forms.gle/Aqj9Rpq9tSfDDS117" type="button" className="btn btn-danger btn-lg cancelar-insc">Cancelar pre-inscripción</a>
                    </Container>
                </Container>
            </Row>
            <Row>
                <Container className={`container-tab my-4 ${divsVisibility[1] ? '' : 'd-none'}`}>
                    <h1 className="fs-2">Ciclo 2022-2</h1>
                    <Row xs={1} md={3} className="g-4">
                    {data2022_2.map((t: any) => {
                        return (
                        <CursosElectivosCards
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