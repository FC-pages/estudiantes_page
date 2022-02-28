
import React from "react";
import { FaAngleRight} from 'react-icons/fa';
import { FaPhoneVolume} from 'react-icons/fa';
function Biblioteca() {

  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };
  return (
    <div className="Biblioteca">
        <a href="http://www.bibliotecavirtual.uni.edu.pe/" className="w-inline-block enlaces">
            <div className="position">
              <p className="text3"> Enlace</p></div>
              <b className="text2"> BIBLIOTECA - FACULTAD DE CIENCIAS</b>
            </div>
        </a>
        <p></p>
        <p>La Biblioteca de la Facultad de Ciencias de la Universidad de Ingeniería (UNI),
       como todas las bibliotecas, se enfrenta en los últimos años a nuevos retos tales como 
       los relacionados con la gestión de la información digital, la adaptación de los 
       servicios tradicionales a las nuevas necesidades pretendiendo reflejar el modelo de 
       biblioteca universitaria acorde con los actuales retos: la planificación y evaluación 
       de su gestión, el desarrollo de sus colecciones, su tratamiento documental, el acceso 
       a la información a través de instrumentos como el catálogo de acceso público en línea,
        y ello en el escenario de Internet y el uso de tecnología Web, la formación de usuarios
        y, por último los servicios a los usuarios.</p>

        <p>Las funciones de apoyo a la formación, a la investigación y a la docencia, que caracteriza 
  a nuestra biblioteca se materializa en servicios a sus distintos usuarios, orientados en 
  función de las necesidades informativas y documentales  que requieran los diversos 
  colectivos a los que se atiende.  Con la finalidad de dar una mayor eficacia-calidad al 
  tratamiento de la información  y a su recuperación y transmisión, la Facultad de Ciencias 
  está integrada al Sistema de Gestión Bibliotecaria UNI-KOHA.</p>
  
        <p> Nuestra política de desarrollo de las colecciones está basada en las necesidades del 
  usuario, teniendo como objetivo principal el conocimiento del grado de cobertura de las 
  distintas materias en las áreas de Física, Matemática, Química, Ingeniería Física y Ciencia 
  de la Computación. Una parte importante de la colección en papel se ha configurado gracias 
  a las donaciones que ha recibido a lo largo del tiempo.</p>
  
        <p> Actualmente la Biblioteca dispone de más de 17.897 libros, 556 tesis,   288 títulos de 
  revistas en papel, 121 unidades de soporte electrónico y una colección de la Video-Enciclopedia 
  de Física; además del acceso en línea a las bases de datos catalográficos a través de cuatro 
  computadores para usuarios. </p>
        <h4>Reseña Histórica</h4>
        <p>En el año 1960 se crea la Facultad de Ciencias (FC) con las especialidades  de Física,
        Química y Matemática. En marzo de 1962, se crea el Instituto de Matemática (IMUNI)
        que por medio de una donación de la Fundación Ford, es dotado de colecciones de 
        revistas y libros especializados.  En 1968 por efecto de la reorganización de la 
        universidad, el IMUNI es desactivado y parte de los libros pasan al Departamento de 
        Matemática, quedando la bibliografía restante en el Programa Académico de Ciencias. 
        Posteriormente con la reinstalación de las facultades en 1984, toda la colección 
        completa de revistas y los libros pasan a la FC. En 1994 a raíz del traslado de la 
        Escuela de Estadística  a la Facultad de Ingeniería Económica y Ciencias Sociales, se 
        trasladan también la bibliografía concerniente a esa especialidad. 
        </p>
        <p>Por otra parte en el año 1993 los recursos bibliográficos de la FC se automatizan, 
        para lo cual se contrataron especialistas, los  que introdujeron el Sistema CD 
        MicroISIS de esta manera la Biblioteca de la Facultad de Ciencias, se convirtió en 
        la primera biblioteca de la universidad en sistematizar los servicios bibliográficos.
        Considerando la importancia de los servicios de información dentro de la universidad 
        y teniendo en cuenta que el Sistema KOHA, es un software diseñado específicamente 
        para bibliotecas, desde noviembre del 2013 la Biblioteca de la Facultad de Ciencias, 
        ve la conveniencia de usar este sistema único de gestión de los recursos de información 
        de la Universidad Nacional de Ingeniería.</p>
        <h4>Servicios</h4>
        <ul>
            <li><FaAngleRight size={17}/> Préstamo</li>
            <li><FaAngleRight size={17}/> Lectura en sala</li>
            <li><FaAngleRight size={17}/> Información y referencia</li>
            <li><FaAngleRight size={17}/> Reprografía y reproducción</li>
            <li><FaAngleRight size={17}/> Consulta de catálogo en línea</li>
            <li><FaAngleRight size={17}/> Biblioteca virtual</li>
            <li><FaAngleRight size={17}/> Carnetización</li>
        </ul>
        <p></p>
        <div className="App-center">
            <div className="div-imagen w-inline-block">
                <div className="position">
                    <p>Descripción de la foto que quieres que se muestre</p>
                </div>
                <img className="desvanecer" src="./lecturaensala.jpg" />
            </div>

            <div className="div-imagen">
                {/* <div className="text">
                    Descripción de la foto que quieres que se muestre
                </div> */}
                <img className="desvanecer" src="./biblioteca_fc_2-min.jpg" />
            </div>

            <div className="div-imagen">
                {/* <div className="overlay">
                    Descripción de la foto que quieres que se muestre
                    <div className="catItemDateCreated">
                        <span>16</span> Nov</div>   
                </div> */}
                <img className="desvanecer" src="./biblioteca_fc_3-min.jpg" />
            </div>
            <div className="div-imagen">
                {/* <div className="text">
                    Descripción de la foto que quieres que se muestre
                </div> */}
                <img className="desvanecer" src="./biblioteca_fc_4-min.jpg" />
            </div>
            <div className="div-imagen">
                {/* <div className="text">
                    Descripción de la foto que quieres que se muestre
                </div> */}
                <img className="desvanecer" src="./biblioteca_fc_5-min.jpg" />
            </div>
            <div className="div-imagen">
                {/* <div className="text">
                    Descripción de la foto que quieres que se muestre
                </div> */}
                <img className="desvanecer" src="./biblioteca_fc_6-min.jpg" />
            </div>
        </div>
        <hr></hr>
        <div className="App-center">
            <div className="block borde">
                <div className="block-container App-center">
                        <FaPhoneVolume className="main-color" size={35} /><br></br>
                        <p><strong>Lic. Maritza Dietz Castro</strong><br></br>
                        Jefe de la Biblioteca (e)<br></br>
                        <strong>E-mail:</strong> gradosytitulosfc@uni.edu.pe<br></br>
                        <strong>Teléfono:</strong> 481-0824 anexo 5020 / 5025</p> 
                </div>
            </div>
            <div className="block borde">
                <div className="block-container App-center">
                    <p>Cuadro 2</p>
                </div>
            </div>
        </div>
        <p></p>
    </div>
  ) 
}

export default Biblioteca;
