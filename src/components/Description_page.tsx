import './description.css';

function App2() {
  return ( 
    <div className="App">
        <header className="App-header2">
            <div className="App-prueba5"> 
                <h1>Escuela profesional de matematicas </h1>
                <h2>FC-UNI</h2>
            </div>
            <div className="App-rectangulo"></div>
                <ul className="App-ul"> 
                    <li className="App-il"> INICIO </li>
                    <li className="App-il"> DESCRIPCION </li>
                    <li className="App-il"> FUTURO ESTUDIANTE </li>
                    <li className="App-il"> ESTUDIANTES </li>
                    <li className="App-il"> EGRESADOS </li>
                    <li className="App-il"> CONTACTOS </li>
            </ul>
        </header>
        <p> Espacio</p>
        <main className="App-container">
            <section className="App-grid">
                <ul className="App-ul"> 
                    <li className="App-il"> <a href='#' className=" App-il-navigation__link--is-active"> PERFIL </a> </li>
                    <li className="App-il"> RESEÑA HISTÓRICA </li>
                    <li className="App-il"> PLAN DE ESTUDIOS </li>
                    <li className="App-il"> DIRECTIVOS </li>
                    <li className="App-il"> DOCENTES </li>
                </ul> 
                <h1>Perfil</h1>
                <div className="App-cuerpo">

                <p> La Escuela Profesional de Matemática, ofrece a sus estudiantes una formación competitiva en los 
fundamentos de la matemática moderna, lo que les permitirá emprender la actividad profesional 
estimulante y a la vez gratificante de la investigación en Matemática o de sus múltiples campos de 
aplicación, siempre ligada a la frontera del conocimiento. </p>
                <p> Es ampliamente conocido que la Matemática cumple un rol trascendental en los sectores 
informático, financiero, de telecomunicaciones, sanitario, seguros, energético, entre otros. El 
trabajo que realiza el egresado de la carrera de matemática en estos campos demanda la interacción 
con profesionales de diversas especialidades que se desenvuelven en estas actividades, por lo que 
sus oportunidades de crecimiento y desarrollo profesional suelen ser bastante amplias. </p>
                <p> Es cada vez mayor el número de egresados de la especialidad de matemática que tienen demanda
e ingresan a trabajar en el sector financiero, ya sea en bancos, AFP y otras instituciones financieras, 
en empresas de seguros, de desarrollo de software y en grandes empresas y consultoras para 
encargarse del trabajo con big-data, con algoritmos de optimización, cuantificación y gestión de 
riesgos, reconocimiento de patrones, aprendizaje automático y en modelamiento de procesos, 
especialmente en lo que concierne a incertidumbre. </p>
                <p> En el ámbito de las ciencias, la matemática cumple un papel muy dinámico, con un desarrollo 
vertiginoso en los últimos años tanto en campos teóricos como aplicados, habiendo participado 
de manera fundamental en muchos de los avances productivos y tecnológicos de los últimos 
tiempos. El egresado de la carrera de Matemática se encuentra plenamente preparado asimismo 
para continuar estudios de especialización en matemática con miras a desarrollar investigación 
científica de primer nivel en matemática o en ciencias afines. Los estudios de posgrado se pueden 
continuar en la propia Facultad de Ciencias de la UNI o en otras instituciones, sobre todo 
extranjeras. Las áreas de mayor desarrollo en la UNI son Optimización, Sistemas Dinámicos, 
Teoría Analítica de Números, Álgebra, Probabilidad, Geometría y Cálculo Numérico. 
Por último la matemática es la lingua franca de las ciencias, es el lenguaje en el que se plantean 
las preguntas de la ciencia y la técnica, y es, en muchos casos, la herramienta básica en la búsqueda 
de su solución </p>

                </div>
            
            {/* <section class="right">Section</section> */}

                <div className="App-cuerpo">  
                    <h1> Reseña historica</h1>
                    <p> poner una tabla de 2 columnas, margin par que no se peque a la linea del medio ploma </p>
                    <table className="App-resena">
                        <tr>
                            <th> gfvfd</th>
                            <th>Apellido</th>
                        </tr>
                        <tr>
                            <td>1960 Se creó la Facultad de Ciencias Físicas y Matemáticas en la Universidad Nacional de Ingeniería con las carreras de Física Química y Matemática, a partir de la entonces Facultad de Ciencias Básicas y Nucleares.</td>
                            <td> Vacio</td>
                        </tr>
                        <tr>
                            <td> vacio</td>
                            <td> 1961 Se aprobó el Plan de Estudios, que consideró cursos semestralizados en la Facultad a partir del segundo año, pues los estudiantes ingresaban a la Universidad a través del Departamento Preparatorio, realizando un primer año (dos semestres) común a todas las Facultades. 
 
 Se aprobó también otorgar el Grado de Bachiller en Ciencias Físicas y Matemáticas después de concluidos el cuarto año y previa sustentación de una tesis.</td>
                        </tr>
                        <tr>
                            <td>1965 Se modifica el Plan de Estudios, se considera el primer año común de las Facultades, mantiene los tres años siguientes, al final de los cuales se opta el Grado de Bachiller en Ciencias Físicas y Matemáticas, previa sustentación de una tesis; y crea un Quinto Año en la Facultad en el que el estudiante podrá especializarse en Física o Matemática y optar el Título Profesional de Físico-Matemático, previa sustentación de una tesis.</td>
                            <td> Triste</td>
                        </tr>
                        <tr>
                            <td> vacio</td>
                            <td> 1967 Se modifica nuevamente el Plan de Estudios, se incrementa los cursos de Química a 3 , y se establece que el quinto año (etapa de especialización) tiene una orientación profesional y otra académica. La profesión conduce al Título de Físico-Matemático e involucra una preparación en Ciencia Aplicada, mientras que la académica corresponde a una preparación adecuada para continuar estudios en Postgrado.</td>
                        </tr>
                        <tr>
                            <td> 1970 Se aprueba otorgar los Grados de Bachiller en Ciencias con mención en Física, en Matemática, en Química y en Estadística, así como los Títulos Profesionales de Licenciado en cada una de las mencionadas especialidades. El Grado y el Título se optan después de cumplir los 10 semestres académicos que considera el Plan de Estudios, previa sustentación de las respectivas tesis. Cabe mencionar que los estudios en Estadística no se iniciaron sino en el año 1977.</td>
                            <td> vacio</td>
                        </tr>
                        <tr>
                            <td> vacio</td>
                            <td> 1983 Se promulga la Ley Universitaria No.23733 que modifica nuevamente la estructura académica y administrativa de las universidades y se crean las actuales Facultades, entre ellas la Facultad de Ciencias (FC), estableciéndose las Escuelas Profesionales de Física, Matemática, Química y Estadística. Se otorgan los Grados de Bachiller en Ciencias y los Títulos Profesionales de Licenciado, respectivos.</td>
                        </tr>
                        <tr>
                            <td> Se creó la Escuela de Ingeniería Física y la Escuela Profesional de Ciencia de la Computación, por lo que actualmente la Facultad de Ciencias cuenta con las especialidades de FÍSICA, MATEMÁTICA, QUÍMICA, INGENIERIA FÍSICA y CIENCIA DE LA COMPUTACIÓN.
 
 A iniciativa de la Facultad de Ciencias se creó, el INSTITUTO DE MATEMÁTICA Y CIENCIAS AFINES (IMCA), cuyos objetivos son la investigación y el apoyo a la formación de Maestros y Doctores, en Matemática; para lo cual se cuenta con la colaboración del Instituto de Matemática Pura y Aplicada (IMPA) de Río de Janeiro, Brasil. El IMCA funciona actualmente en una moderna instalación en el distrito limeño de La Molina construido por el Patronato UNI que preside el Ing. Alberto Benavides de la Quintana. </td>
                            <td> vacio</td>
                        </tr>
                        <tr>
                            <td> vacio</td>
                            <td> 2010 La Facultad de Ciencias ha cumplido 50 años de su creación con actividades sociales, culturales, científicas y entrega de títulos honoríficos a egresados, publicándose el libro "50 años de la Facultad de Ciencias", así mismo se ha continuado con cierta intensidad, contando con el apoyo del Rectorado de la Universidad,  el mejoramiento de los equipos de nuestros laboratorios de enseñanza, investigación y de servicios iniciándose asimismo el apoyo financiero de las empresas mineras (Southern Peru Copper Corporation) para estos propósitos. 
 
 Se nos ha entregado por Recursos Ordinarios S/. 1 200 000  para equipamiento de un Laboratorio de Química y S/. 970 371,00 para iniciar la construcción de nuevos pabellones, para el Auditorio, Biblioteca, Sala de Lectura, Laboratorios, entre otros.</td>
                        </tr>
                    </table>
                </div>
                <p className="App-cuadro"> 1980 </p>

                <h1>Plan de estudio</h1>
                
                <div className="App-cuerpo">    
                    <p> En el plan de estudios podemos encontrar cursos con una fuerte dosis de análisis
científico para que el alumno tempranamente incursione en aspectos de
investigación inicial. Se incluyen en la malla curricular seis líneas de
especialización, sin embargo ellas están íntimamente entre conectadas por los
cursos básicos llevados en el nivel de estudios generales y los siguientes
semestres. En este quehacer el docente juega un papel de guía e integrador,
tocando aspectos de tópicos multidisciplinarios</p>
                    <b>Total de Créditos Exigidos al alumno para egresar en la Escuela Profesional de Matemática:</b>
                    <table className="App-resena">
                        <tr>
                            <th> Item </th>
                            <th>Credito</th>
                            <th>Especificacion</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td> 192</td>
                            <td> Créditos de cursos obligatorios</td>
                        </tr>
                        <tr>
                            <td> 02</td>
                            <td> 14</td>
                            <td> Total de créditos de cursos electivos o complementarios</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>1</td>
                            <td>Créditos por actividades extracurriculares (BAE01)</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>2</td>
                            <td>Créditos por prácticas pre-profesionales
                            </td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>1</td>
                            <td>Ayudantia Académica o de Investigación</td>
                        </tr>
                    </table>
                    <b>Descargar:</b>
                    <ul>
                        <li>Plan de estudios completo</li>
                        <li>Tabla de convalidaciones</li>
                        <li>Malla curricular con electivos 2018-1</li>
                        <li>Malla curricular sin electivos 2018-1</li>
                        <li>Sumillas de asignaturas electivas del plan de estudios 2018-1</li>
                        <li>Sumillas de asignaturas obligatorias del plan de estudios 2018-1</li>
                    </ul>
                </div>
                <div className="App-container2">
                    {/* <img src="coffee.png" class="left"> */}
                    <p> soy un parrafo a la derechagf bfgvfvf bgb gbgb gbh bgfbg ghhggbsrgb</p>
                </div>
                {/* <div className="App-profes">
                    <img src="fotoblanco.PNG">
                    </img>
                    <p> Eladio Ocaña</p>
                    <ul>
                        <li>E-mail: dabanto@uni.edu.pe</li>
                        <li>Central FC: Anexo 14 </li>
                        <li>Central UNI: Anexo 5033</li>
                    </ul>
                </div>
                <div className="App-profes">
                    {/* <img src="fotoblanco.PNG"> */}
                    {/* </img> */}
                    {/* <p> Eladio Ocaña</p>
                    <ul>
                        <li className="App-vineta">E-mail: dabanto@uni.edu.pe</li>
                        <li className="App-vineta">Central FC: Anexo 14 </li>
                        <li className="App-vineta">Central UNI: Anexo 5033</li>
                    </ul>
                </div> */}
                <h1> Directivos</h1>
                <div className="App-profes">
                    <table className="App-profes-table"> 
                        <tr>
                            <th className="App-profes-th" colSpan={2}> Director de la escuela profesional de matemática</th>
                        </tr>
                        <tr>
                            <td className="App-profes-images"></td> 
                            <td className="App-profes-td">
                                {/* </img> */}
                                <b>Dr. Eladio Ocaña Anaya</b>
                                <ul className="App-ul2">
                                    <li className="App-vineta">E-mail: dabanto@uni.edu.pe</li>
                                    <li className="App-vineta">Central FC: Anexo 14 </li>
                                    <li className="App-vineta">Central UNI: Anexo 5033</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    
                </div>
            </section>
        </main>
        <p> vdfbvvadvsadsc</p>
        <footer className= "App-footer">
        FINAL DE LA PAGINA
        </footer>
    </div>

    
  );
}

export default App2;
