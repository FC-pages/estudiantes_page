import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import AyudantiaCards from "./Cards/AyudantiasCards";
import { Container } from 'react-bootstrap';
let { data } = require("../../../data/data-ayudantias.js");

function Ayudantias() {
  return (
    <div>
      <h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>
      <Container>
      <S.TabContent>
        <S.TestimoniosTab >    
          {data.map((t: any) => {
            return (
              <AyudantiaCards
                curso={t.curso}
                codigo_curso={t.codigo_curso}
                docente={t.docente}
                alumno = {t.alumno}
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>
            <a target = "_blank" href = "https://forms.gle/kz7isKyEyMkfB3nk6" type="button" className="btn btn-success btn-lg insc">Pre-inscripción</a>
            <a target = "_blank" href = "https://forms.gle/QqWY77726kZMkm91A" type="button" className="btn btn-warning btn-lg cancelar-insc">Cancelar ayudantía</a>
      </Container>
    </div>
  );
}

export default Ayudantias;
