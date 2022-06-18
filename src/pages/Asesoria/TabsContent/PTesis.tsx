import React from 'react';
import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import ProyTesisCard from "./Cards/ProyTesisCard";
let { ptesis } = require("../../../data/data-proytesis.js");
// let ptesis1 = ptesis.find((p: any)=> p.num === "1")
// let ptesis2 = ptesis.find((p: any)=> p.num === "2")
// let ptesis3 = ptesis.find((p: any)=> p.num === "3")
function PTesis() {
  return (
      <>
      <div>
        <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 1</h5>
        {/* <div>
          <S.TabContent>
            <S.TestimoniosTab >    
              {ptesis1.map((t: any) => {
                return (
                    <ProyTesisCard
                    linvestigacion = {t.linvestigacion}
                    tema={t.tema}
                    profesor={t.profesor}
                    sumilla={t.sumilla}
                    fecha = {t.fecha}
                    infoextra = {t.infoextra}
                  />
                );
              })}
            </S.TestimoniosTab>
          </S.TabContent>
        </div> */}
      </div>
      <div>
        <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 2</h5>
        {/* <div>
          <S.TabContent>
            <S.TestimoniosTab >    
              {ptesis2.map((t: any) => {
                return (
                    <ProyTesisCard
                    linvestigacion = {t.linvestigacion}
                    tema={t.tema}
                    profesor={t.profesor}
                    sumilla={t.sumilla}
                    fecha = {t.fecha}
                    infoextra = {t.infoextra}
                  />
                );
              })}
            </S.TestimoniosTab>
          </S.TabContent>
        </div> */}
      </div>
      <div>
        <h5 className='t-stroke-shadow-h5'> Proyecto de Tesis 3</h5>
        {/* <div>
          <S.TabContent>
            <S.TestimoniosTab >    
              {ptesis3.map((t: any) => {
                return (
                    <ProyTesisCard
                    linvestigacion = {t.linvestigacion}
                    tema={t.tema}
                    profesor={t.profesor}
                    sumilla={t.sumilla}
                    fecha = {t.fecha}
                    infoextra = {t.infoextra}
                    />
                );
              })}
            </S.TestimoniosTab>
          </S.TabContent>
        </div> */}
      </div>
      </>
  );
}

export default PTesis;
