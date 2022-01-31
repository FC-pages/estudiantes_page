import React, { FC, Fragment } from "react";
import Accordion from "../../components/Accordion";
import "./styles/festudiantes.css";

import ReactPlayer from "react-player";

import { Row, Card } from "react-bootstrap";
import * as S from "../../styles/styles";

let videos = [
  {
    name: "Los mayores avances de 2020 en matemáticas y ciencias de la computación",
    href: "https://www.youtube.com/watch?v=HL7DEkXV_60",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Video - Complementario",
    href: "https://www.youtube.com/watch?v=yDyMSliKsxI",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui voluptas",
  },
];

const accordionItems = [
  {
    title: "1. Análisis Y Teoría de Números",
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis leo varius, egestas metus iaculis, euismod purus. Proin convallis ultrices fermentum. Fusce non felis in eros blandit tempus. Donec placerat volutpat justo nec interdum. Sed vel imperdiet est. Donec vel arcu sollicitudin, blandit justo vitae, sollicitudin orci. Quisque quis convallis mauris, vitae aliquam nibh. Pellentesque fringilla aliquam mi, et laoreet ligula aliquet non. Pellentesque posuere massa vitae lorem lacinia lacinia. Sed eleifend pharetra augue, id convallis diam congue eu. Vestibulum et pretium augue, quis hendrerit lorem. Pellentesque in bibendum libero, non euismod est. Duis commodo fringilla dictum. Nam consequat enim in nisl porta, et faucibus enim sagittis.
        <Row xs={1} md={1} className="g-4">
          <S.ContainerVideos>
            <div className="video">
              <Card bg="dark" text="white">
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://youtu.be/cZJv2FKutPU"
                />
                <Card.Body>
                  <Card.Title>
                    El Patrón de los Números Primos y la Hipótesis de Riemann
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              <Card bg="dark" text="white">
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://youtu.be/m_4X6Hl7QJU"
                />
                <Card.Body>
                  <Card.Title>
                    ¿Puedes Calcular el Factorial de Un Medio?
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </S.ContainerVideos>
        </Row>
      </div>
    ),
  },
  {
      title: "2. Optimización",
      content: (
        <div>
          El principal interés del grupo es el desarrollo matemático y computacional
           de la optimización. El grupo tienen amplia experiencia en la solución de 
           problemas de gran talla,  lineales y cuadráticos, y la puesta en marcha 
           mediante dos de las tecnologías centrales en optimización: el método simplex 
           y los métodos de puntos interiores. El grupo también tiene intereses en optimización 
           no lineal, optimización combinatoria, métodos de descomposición, computación paralela 
           y optimización estocástica. También tiene interés en las aplicaciones de la optimización
          en temas del sector industrial: energía, transporte, entre otros.
          <Row xs={1} md={1} className="g-4">
            <S.ContainerVideos>
              <div className="video">
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=K7TL5NMlKIk"
                  />
                  <Card.Body>
                    <Card.Title>
                      Programación Lineal e introducción al Método Simplex
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
  
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=RO5477EKlXE"
                  />
                  <Card.Body>
                    <Card.Title>
                      Explicación del algoritmo del Método Simplex
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </S.ContainerVideos>
          </Row>
        </div>
      ),
    },
    {
      title: "3. Álgebra, Geometría y Topología",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis leo varius, egestas metus iaculis, euismod purus. Proin convallis ultrices fermentum. Fusce non felis in eros blandit tempus. Donec placerat volutpat justo nec interdum. Sed vel imperdiet est. Donec vel arcu sollicitudin, blandit justo vitae, sollicitudin orci. Quisque quis convallis mauris, vitae aliquam nibh. Pellentesque fringilla aliquam mi, et laoreet ligula aliquet non. Pellentesque posuere massa vitae lorem lacinia lacinia. Sed eleifend pharetra augue, id convallis diam congue eu. Vestibulum et pretium augue, quis hendrerit lorem. Pellentesque in bibendum libero, non euismod est. Duis commodo fringilla dictum. Nam consequat enim in nisl porta, et faucibus enim sagittis.
          <Row xs={1} md={1} className="g-4">
            <S.ContainerVideos>
              <div className="video">
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=bGhrBHSVvig"
                  />
                  <Card.Body>
                    <Card.Title>
                    ¿Cuántos agujeros tiene un pantalón? La topología te da la respuesta.
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
  
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=TMNAE_VmIec"
                  />
                  <Card.Body>
                    <Card.Title>
                      Introducción a Topología Algebraica
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </S.ContainerVideos>
          </Row>
        </div>
      ),
    },
    {
      title: "4. Probabilidad y Procesos Estocásticos",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis leo varius, egestas metus iaculis, euismod purus. Proin convallis ultrices fermentum. Fusce non felis in eros blandit tempus. Donec placerat volutpat justo nec interdum. Sed vel imperdiet est. Donec vel arcu sollicitudin, blandit justo vitae, sollicitudin orci. Quisque quis convallis mauris, vitae aliquam nibh. Pellentesque fringilla aliquam mi, et laoreet ligula aliquet non. Pellentesque posuere massa vitae lorem lacinia lacinia. Sed eleifend pharetra augue, id convallis diam congue eu. Vestibulum et pretium augue, quis hendrerit lorem. Pellentesque in bibendum libero, non euismod est. Duis commodo fringilla dictum. Nam consequat enim in nisl porta, et faucibus enim sagittis.
          <Row xs={1} md={1} className="g-4">
            <S.ContainerVideos>
              <div className="video">
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=ZA4JkHKZM50"
                  />
                  <Card.Body>
                    <Card.Title>
                      ¿Por qué "probabilidad igual a 0" no significa "imposible"?
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
  
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=X9HalMPzImw"
                  />
                  <Card.Body>
                    <Card.Title>
                      Introducción a Series de Tiempo
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </S.ContainerVideos>
          </Row>
        </div>
      ),
    },
    {
      title: "5. Ecuaciones Diferenciales y Sistemas Dinámicos",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis leo varius, egestas metus iaculis, euismod purus. Proin convallis ultrices fermentum. Fusce non felis in eros blandit tempus. Donec placerat volutpat justo nec interdum. Sed vel imperdiet est. Donec vel arcu sollicitudin, blandit justo vitae, sollicitudin orci. Quisque quis convallis mauris, vitae aliquam nibh. Pellentesque fringilla aliquam mi, et laoreet ligula aliquet non. Pellentesque posuere massa vitae lorem lacinia lacinia. Sed eleifend pharetra augue, id convallis diam congue eu. Vestibulum et pretium augue, quis hendrerit lorem. Pellentesque in bibendum libero, non euismod est. Duis commodo fringilla dictum. Nam consequat enim in nisl porta, et faucibus enim sagittis.
          <Row xs={1} md={1} className="g-4">
            <S.ContainerVideos>
              <div className="video">
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=p_di4Zn4wz4"
                  />
                  <Card.Body>
                    <Card.Title>
                    Vista general de ecuaciones diferenciales
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
  
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=dw8dty0-g1k"
                  />
                  <Card.Body>
                    <Card.Title>
                    ¡Que viva el caos! | El sistema caótico más famoso
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </S.ContainerVideos>
          </Row>
        </div>
      ),
    },
    {
      title: "6. Análisis Numérico",
      content: (
        <div>
          El objetivo del grupo es resolver los distintos problemas que surgen en la física e ingeniería, a través de una comprensión matemática del problema modelo, la búsqueda de su solución a veces en contextos más amplios. Haciendo uso de la aproximación numérica inteligente y el desarrollo del poder computacional actual, se diseña modelos discretos que son capaces de resolverse de manera eficiente y con un alto orden de convergencia. También es nuestro objetivo desarrollar matemática que sustente dichos modelos aproximados y crear nuevos y mejores métodos numéricos que ayuden a la sociedad a resolver las diferentes problemáticas como prevenir desastres naturales, a través de nuestros modelos; ser la base para el desarrollo de la ingeniería en nuestro país.
          <Row xs={1} md={1} className="g-4">
            <S.ContainerVideos>
              <div className="video">
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=o0Pa8UzO62I"
                  />
                  <Card.Body>
                    <Card.Title>
                    ¿Cómo se resuelve x elevado a x es 100?. <br/>El método de Newton
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
  
                <Card bg="dark" text="white">
                  <ReactPlayer
                    controls
                    width="100%"
                    url="https://www.youtube.com/watch?v=W7S94pq5Xuo"
                  />
                  <Card.Body>
                    <Card.Title>
                    Una explicación visual del Método de Newton en Optimización
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </S.ContainerVideos>
          </Row>
        </div>
      ),
    },
];

const TabThree: FC<{}> = () => {
  return (
    <div className = "cont-tab">
      <p>En todos los campos laborales en los que se desempeña un matemático es de suma importancia la investigación a todo nivel por que es la base para el desarrollo de nuestro país.</p>
      <p>La matemática está en constante desarrollo, cada vez nuevas herramientas son creadas y éstas permiten ayudar apoyar el desarrollo de otras ciencias y la industria.
       <br /> <br />
        Las líneas de investigación que se desarrolla en la Escuela de matemática son:
        {/* La Escuela de Matemática de la facultad de Ciencias esta activa en
        investigación tanto teórica como aplicada. Gran parte de la
        investigación se lleva a cabo en el instituto de Matemáticas y ciencias
        afines (IMCA) el cual reúne a investigadores de las siguientes lineas de
        investigación:*/}
      </p>
      {/*
      <p></p>
      <ol>
        <li></li>
        <li></li>
        <li>Álgebra, Geometría y Topología</li>
        <li>Probabilidad y Procesos Estocásticos</li>
        <li>Ecuaciones Diferenciales y Sistemas Dinámicos</li>
        <li>Análisis Numérico</li>
      </ol>
       */}
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
      <br/>
      <p>A continuación se comparte algunos videos adicionales acerca de la Investigación en Matemáticas.</p>
      <Row xs={1} md={1} className="g-4">
        <S.ContainerVideos>
          <div className="video">
            {videos.map((video: any) => {
              return (
                <Card bg="dark" text="white">
                  <ReactPlayer controls width="100%" url={video.href} />
                  <Card.Body>
                    <Card.Title>{video.name}</Card.Title>
                    <Card.Text>{video.Description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S.ContainerVideos>
      </Row>
    </div>
  );
};
export default TabThree;
