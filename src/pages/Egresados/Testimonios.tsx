import { Card } from 'react-bootstrap';
import * as S from './styles/main';

function Testimonios() {
  return (
    <div>


<div className="container justify-content-center mt-5 border-left border-right">
 
<S.BlockQuote>
<div className="row">
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                <div className="comment mt-4 text-justify float-left"> 

                  <blockquote className="blockquote mb-0">
                    <img src="./perfil.jpg" alt="" className="rounded-circle" width="80" height="80"/>
                    <h4>Abraham Zamudio</h4>
                    <p>
                      Matemático de formación y autodidacta en temas computacionales. Egresado de la Facultad de Ciencias de la Universidad Nacional de Ingeniería. Con experiencia en centros de investigación como el Radio Observatorio de Jicamarca desarrollando modelos para analizar datos de alta atmósfera usando análisis de datos, machine learning y computación paralela. Además, laboré en el Laboratorio Costero de Paita (IMARPE) estudiando modelos que mejoran los aspectos predictivos de la pesca artesanal. También en el Centro de Investigación de la Universidad del Pacífico. 
                      Últimamente he laborado en empresas del mercado de servicios TI, que se encargan de dar servicios de desarrollo de software y ‘’business intelligence’’ a empresas de diversos rubros del mercado nacional e internacional. 
                      De manera paralela a las actividades de investigación y desarrollo me desempeño dictando cursos en diplomados sobre estadística aplicada, business intelligente, machine learning y deep learning en instituciones académicas públicas y privadas.

                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
            </div>
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                <div className="text-justify darker mt-4 float-right"> 
        <blockquote className="blockquote mb-0">

                    <img src="./perfil.jpg" alt="" className="rounded-circle" width="80" height="80"/>
                    <h4>Saul Arévalo</h4>

            <p>
Matemático de formación y autodidacta en temas computacionales. Egresado de la Facultad de Ciencias de la Universidad Nacional de Ingeniería. Con experiencia en centros de investigación como el Radio Observatorio de Jicamarca desarrollando modelos para analizar datos de alta atmósfera usando análisis de datos, machine learning y computación paralela. Además, laboré en el Laboratorio Costero de Paita (IMARPE) estudiando modelos que mejoran los aspectos predictivos de la pesca artesanal. También en el Centro de Investigación de la Universidad del Pacífico. 
Últimamente he laborado en empresas del mercado de servicios TI, que se encargan de dar servicios de desarrollo de software y ‘’business intelligence’’ a empresas de diversos rubros del mercado nacional e internacional. 
De manera paralela a las actividades de investigación y desarrollo me desempeño dictando cursos en diplomados sobre estadística aplicada, business intelligente, machine learning y deep learning en instituciones académicas públicas y privadas.

            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>

                </div>
        </div>
                


</div>

</S.BlockQuote>


</div>



    </div>
  );
}

export default Testimonios;
