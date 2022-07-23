import '../../Descripcion/styles.css';
import * as S from "../../AlumnosYEgresados/TabsContent/AlumnosYTesistasTab/styles/main";
import PTesisCard from "./Cards/ProyTesisCard";
import { Container } from 'react-bootstrap';
let { proytesis } = require("../../../data/data-proytesis.js");
// let { proytesis1 } = proytesis.find((p: any)=> p.num === "1")
// let proytesis1 = proytesis.filter( (p:any) => p.num === '1')
// let proytesis2 = proytesis.filter( (p:any) => p.num === '2')
// let proytesis3 = proytesis.filter( (p:any) => p.num === '3')
// let data = 
// {
//   data: 
//   [
//     {
//       marca: "2022-07-09T00:09:48.234Z",
//       correo: "jmunguial@uni.edu.pe",
//       apellidos_docente: "Munguia La Cotera",
//       tema: "Aplicación de los métodos Híbridos de alto (HHO) orden en 1D",
//       nombres_docente: "Jonathan Alfredo",
//       descripcion: "https://drive.google.com/open?id=1smp5Nt5snN6xCMQimebCy3Z4dJeumaIK"
//     }
//   ]
// }

function PTesis() {
  //let anios = [{anio: '2019', data:''} ,{anio: '2020', data:''},{anio: '2021',data: ''} ,{anio: '2022', data: ''}, {anio: '2023', data: ''}]
  // let anios = [{anio: 'Ciclo académico 2022-2', data: ''},]
  // anios.map((anio:any) => {
  //   anio.data = jsonResponse.data.filter((p) => {
  //     return p.marca.split('-')[0] == anio.anio
  //   })
  // })
  // console.log(anios)

  return (
    <>
    {/* <S.TabContent>
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
                    <li>{i+1}) {t.nombres_docente}, {t.apellidos_docente}, <a target = '_blank' href = {t.descripcion}>Temas propuestos</a>, <a>Pre-inscripción</a>, <a>Lista de inscritos</a>.</li>
                  )

                })}
              </ul>
              </>
           )

        })
      }
     </S.TabContent> */}
      <div>
        <h5 className='t-stroke-shadow-h5'> Ciclo académico 2022-2</h5>
        <Container>
        <S.TabContent>
          <S.TestimoniosTab >    
            {proytesis.map((t: any) => {
              return (
                <PTesisCard
                  // curso={t.curso}
                  marca = {t.marca}
                  tema={t.tema}
                  correo={t.correo}
                  apellidos_docente = {t.apellidos_docente}
                  nombres_docente = {t.nombres_docente}
                  descripcion = {t.descripcion}
                  // multiline = {t.multiline}
                />
              );
            })}

          </S.TestimoniosTab>
        </S.TabContent>
        </Container>
      </div>
    </>
  );
}

export default PTesis;
