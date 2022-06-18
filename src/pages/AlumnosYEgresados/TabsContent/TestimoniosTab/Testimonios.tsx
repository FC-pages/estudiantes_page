import * as S from "../AlumnosYTesistasTab/styles/main";
import TestimonyCard from "./TestimonyCard";
let { testimonios } = require("../../../../data/data-testimonios.js");

function Testimonios() {



  return (
    <div>
      <S.TabContent>
        <S.ElectivosTab>
          {testimonios.map((t: any) => {
            return (
              <TestimonyCard
                name={t.name}
                image={t.image}
                testimony={t.testimony}
                fotoCompleta={t.fotoCompleta}
              />
            );
          })}
        </S.ElectivosTab>
      </S.TabContent>

    </div>
  );
}

export default Testimonios;
