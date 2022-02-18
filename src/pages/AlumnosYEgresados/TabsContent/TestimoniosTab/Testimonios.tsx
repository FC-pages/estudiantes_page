import * as S from "../AlumnosYTesistasTab/styles/main";
import TestimonyCard from "./TestimonyCard";
let { testimonios } = require("../../../../data/data-testimonios.js");

function Testimonios() {

let videos = [
  {
    name: "Testimonio del prof. Segundo Félix Escalante del Águila",
    href: "https://www.youtube.com/watch?v=PzzDDUtftvA",
    Description:
      "",
  }
];

  return (
    <div>
      <S.TabContent>
        <S.TestimoniosTab>
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
        </S.TestimoniosTab>
      </S.TabContent>

    </div>
  );
}

export default Testimonios;
