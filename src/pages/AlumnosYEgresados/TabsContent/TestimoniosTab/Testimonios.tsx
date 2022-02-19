import * as S from "../AlumnosYTesistasTab/styles/main";
import TestimonyCard from "./TestimonyCard";
import { Row, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
let { testimonios } = require("../../../../data/data-testimonios.js");

function Testimonios() {



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
