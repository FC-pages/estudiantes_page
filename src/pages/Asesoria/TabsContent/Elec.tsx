import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import ElectCards from "./Cards/ElectCards";
import { Container } from 'react-bootstrap';
let { data } = require("../../../data/data-electivos2.js");
// let electivos = JSON.parse(readFileSync(electivos))

function Electiv() {
  return (
    <div>
      <h5 className='t-stroke-shadow-h5'> Ciclo académico 2023-1</h5>
      <Container>
      <S.TabContent>
        <S.TestimoniosTab >    
          {data.map((t: any) => {
            return (
              <ElectCards
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
        </S.TestimoniosTab>
      </S.TabContent>
            <a target = "_blank" href = "https://forms.gle/XngrFnMA1sc76ubS8" type="button" className="btn btn-warning btn-lg cancelar-insc" rel="noreferrer">Cancelar pre-inscripción</a>
      </Container>
    </div>
  );
}

export default Electiv;
