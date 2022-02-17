import Tabs from '../../components/Tabs';
import * as S from './styles/main.ts';
import Tesistas from './Tesistas';
import Titulados from './Titulados';
import Testimonios from './Testimonios';

function Egresados() {
  return (
      <S.EgresadosPage>
        <Tabs>
          <div label="Titulados" >
            <Titulados/>
          </div>
          <div label="Tesistas" >
            <Tesistas/>
          </div>
          <div label="Testimonios" >
            <Testimonios/>
          </div>
        </Tabs>
      </S.EgresadosPage>
  );
}

export default Egresados;
