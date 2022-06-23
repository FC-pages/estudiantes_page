import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PTesisCard from "./Cards/ProyTesisCard";
let { proytesis } = require("../../../data/data-proytesis.js");
// let { proytesis1 } = proytesis.find((p: any)=> p.num === "1")
let proytesis1 = proytesis.filter( (p:any) => p.num === '1')
let proytesis2 = proytesis.filter( (p:any) => p.num === '2')
let proytesis3 = proytesis.filter( (p:any) => p.num === '3')

function Electiv() {
  return (
    <>
      <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 1</h5>
      <div>
        <S.TabContent>
          <S.TestimoniosTab >    
            {proytesis1.map((t: any) => {
              return (
                <PTesisCard
                  // curso={t.curso}
                  linvestigacion = {t.linvestigacion}
                  tema={t.tema}
                  profesor={t.profesor}
                  sumilla={t.sumilla}
                  fecha = {t.fecha}
                  infoextra = {t.infoextra}
                  // multiline = {t.multiline}
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </div>
      <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 2</h5>
      <div>
        <S.TabContent>
          <S.TestimoniosTab >    
            {proytesis2.map((t: any) => {
              return (
                <PTesisCard
                  // curso={t.curso}
                  linvestigacion = {t.linvestigacion}
                  tema={t.tema}
                  profesor={t.profesor}
                  sumilla={t.sumilla}
                  fecha = {t.fecha}
                  infoextra = {t.infoextra}
                  // multiline = {t.multiline}
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </div>
      <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 3</h5>
      <div>
        <S.TabContent>
          <S.TestimoniosTab >    
            {proytesis3.map((t: any) => {
              return (
                <PTesisCard
                  // curso={t.curso}
                  linvestigacion = {t.linvestigacion}
                  tema={t.tema}
                  profesor={t.profesor}
                  sumilla={t.sumilla}
                  fecha = {t.fecha}
                  infoextra = {t.infoextra}
                  // multiline = {t.multiline}
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </div>
    </>
  );
}

export default Electiv;