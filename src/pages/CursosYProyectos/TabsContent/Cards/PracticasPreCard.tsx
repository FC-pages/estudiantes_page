import { useState } from "react";
import { Card } from "react-bootstrap";
import * as S from "../../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";

function PracticasPreCard(e:any) {

  return (
    <S.TCard3>
      <Card >
        <Card.Body className="card-testimony">
          <div className="card-testimony-header">
            <Card.Title className="card-title">{e.nombres} {e.apellidos}</Card.Title>
          </div>
          <Card.Text className="card-text">
            Supervisor: {e.supervisor}<br></br>
            Actividad: {e.actividad}<br></br>
            Institución: {e.institucion}<br></br>
          </Card.Text>
        </Card.Body>
      </Card>
    </S.TCard3>
  );
}

export default PracticasPreCard;