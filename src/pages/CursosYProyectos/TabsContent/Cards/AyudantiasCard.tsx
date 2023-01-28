import { Card } from "react-bootstrap";

import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

function AyudantiasCard(e:any) {

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{e.curso} - {e.codigo_curso} {e.seccion}</Card.Title>
          </div>
          <Card.Text className="card-text">
          Docente: {e.profesor_practica}<br></br>
          Alumno ayudante: {e.nombres} {e.apellidos}<br></br>
          Código alumno: {e.codigo_alumno}<br></br>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </S.TCard3>
  );
}

export default AyudantiasCard;
