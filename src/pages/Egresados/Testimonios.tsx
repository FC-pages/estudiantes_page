import { Card } from 'react-bootstrap';
import * as S from './styles/main';
import TestimonyCard from './TestimonyCard';
let { testimonios } = require("../../data/data-testimonios.js");

function Testimonios() {
  return (
    <div>


<div className="container justify-content-center mt-5 border-left border-right">
 
<S.BlockQuote>
  <div className="row">
              {
                testimonios.map((t: any) => {
                  return <TestimonyCard name = { t.name } image = { t.image } testimony = { t.testimony } />
                })
              }
  </div>
</S.BlockQuote>


</div>
    </div>
  );
}

export default Testimonios;
