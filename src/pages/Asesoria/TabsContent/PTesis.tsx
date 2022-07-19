import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PTesisCard from "./Cards/ProyTesisCard";
import { Container } from 'react-bootstrap';
let { proytesis } = require("../../../data/data-proytesis.js");
// let { proytesis1 } = proytesis.find((p: any)=> p.num === "1")
let proytesis1 = proytesis.filter( (p:any) => p.num === '1')
let proytesis2 = proytesis.filter( (p:any) => p.num === '2')
let proytesis3 = proytesis.filter( (p:any) => p.num === '3')
let jsonResponse = 
{
  data: 
  [
    {
      marca: "2022-07-09T00:09:48.234Z",
      correo: "jmunguial@uni.edu.pe",
      apellidos_docente: "",
      tema: "Aplicación de los métodos Híbridos de alto (HHO) orden en 1D",
      nombres_docente: "Jonathan Alfredo",
      descripcion: "https://drive.google.com/open?id=1smp5Nt5snN6xCMQimebCy3Z4dJeumaIK"
    }
  ]
}

function Electiv() {
  //let anios = [{anio: '2019', data:''} ,{anio: '2020', data:''},{anio: '2021',data: ''} ,{anio: '2022', data: ''}, {anio: '2023', data: ''}]
  let anios = [{anio: '2022', data: ''},]
  anios.map((anio:any) => {
    anio.data = jsonResponse.data.filter((p) => {
      return p.marca.split('-')[0] == anio.anio
    })
  })
  console.log(anios)

  return (
    <>
    <S.TabContent>
      {
        anios.map((p:any) => {
            return (
              <>
              <div>
                <h5 className='t-stroke-shadow-h5'>{p.anio}</h5>
              </div>
              <ul style={{listStyleType: 'none'}}>
                {p.data.map((t:any, i: any) => {
                  return(
                    <li>{i+1}) {t.tema}, {t.nombres_docente}, {t.apellidos_docente}, <a target = '_blank' href = {t.descripcion}>Temas de proyectos</a>, <a>Pre-inscripción</a>, <a>Lista de inscritos</a>.</li>
                  )

                })}
              </ul>
              </>
           )

        })
      }
     </S.TabContent>
      <div>
    {/*
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
      <Container>
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
                />
              );
            })}
          </S.TestimoniosTab>
        </S.TabContent>
      </Container>
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

      */}
      </div>
    </>
  );
}

export default Electiv;
