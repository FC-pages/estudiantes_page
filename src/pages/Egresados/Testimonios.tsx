import { Card } from 'react-bootstrap';
import * as S from './styles/main';
import TestimonyCard from './TestimonyCard';
let { testimonios } = require("../../data/data-testimonios.js");

function Testimonios() {
  return (
    <div>


<S.TabContent>
 
  <S.TestimoniosTab>
              {
                testimonios.map((t: any) => {
                  return <TestimonyCard 
                            name = { t.name } 
                            image = { t.image } 
                            testimony = { t.testimony } 
                            fotoCompleta = {t.fotoCompleta} />
                })
              }
  </S.TestimoniosTab>

</S.TabContent>
    </div>
  );
}

export default Testimonios;
