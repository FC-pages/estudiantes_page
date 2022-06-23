import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import ElectCards from "./Cards/ElectCards";
let { electivos } = require("../../../data/data-electivos.js");
// let electivos = JSON.parse(readFileSync(electivos))

function Electiv() {
  return (
    <div>
      <S.TabContent>
        <S.TestimoniosTab >    
          {electivos.map((t: any) => {
            return (
              <ElectCards
                curso={t.curso}
                profesor={t.profesor}
                sumilla={t.sumilla}
                multiline={t.multiline}
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>
      
    </div>
  );
}

export default Electiv;