import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import AyudantiaCards from "./Cards/AyudantiasCards";
import { Container } from 'react-bootstrap';
let { data } = require("../../../data/data-ayudantias.js");

function Ayudantias() {
  return (
    <div>
      {/*<h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>*/}
      <Container>
            <a target = "_blank" href = "https://forms.gle/kz7isKyEyMkfB3nk6" type="button" className="btn btn-success btn-lg insc">Pre-inscripción</a>
            <a target = "_blank" href = "https://forms.gle/QqWY77726kZMkm91A" type="button" className="btn btn-warning btn-lg cancelar-insc">Cancelar ayudantía</a>
      <S.TabContent>
      <h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>
        <S.TestimoniosTab >    
          {data.map((t: any) => {
            return (
              <AyudantiaCards
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
      </Container>
    </div>
  );
}

export default Ayudantias;
