import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PreprofCards from "./Cards/PreprofCards";
import { Container } from 'react-bootstrap';
let { data } = require("../../../data/data-practicas.js");

function Preprofesionales() {
  return (
    <div>
      <h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>
      <Container>
      <S.TabContent>
        <S.TestimoniosTab >    
          {data.map((t: any) => {
            return (
              <PreprofCards
                alumno = {t.alumno}
                supervisor = {t.supervisor}
                actividad = {t.actividad}
                institucion = {t.institucion}
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>
            <a target = "_blank" href = "https://forms.gle/QKZKFp79m3ezkEsVA" type="button" className="btn btn-success btn-lg insc">Pre-inscripción</a>
            <a target = "_blank" href = "https://forms.gle/J4szj1Cx3k46MZ5v5" type="button" className="btn btn-warning btn-lg cancelar-insc">Cancelar pre-inscripción</a>
      </Container>
    </div>
  );
}

export default Preprofesionales;
