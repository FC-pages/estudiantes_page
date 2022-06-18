import { BsAlignCenter } from "react-icons/bs";
import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import ElectCards from "./Cards/ElectCards";
let { electivos } = require("../../../data/data-electivos.js");

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
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>
      
    </div>
  );
}

export default Electiv;