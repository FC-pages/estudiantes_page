import * as S from "./styles/main";
import TestimonyCard from "./TestimonyCard";
import { Row, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
let { testimonios } = require("../../data/data-testimonios.js");

function Testimonios() {

let videos = [
  {
    name: "Testimonio del prof. Segundo Félix Escalante del Águila",
    href: "https://www.youtube.com/watch?v=PzzDDUtftvA",
    Description:
      "",
  }
];

  return (
    <div>
      <S.TabContent>
        <S.TestimoniosTab>
          {testimonios.map((t: any) => {
            return (
              <TestimonyCard
                name={t.name}
                image={t.image}
                testimony={t.testimony}
                fotoCompleta={t.fotoCompleta}
              />
            );
          })}
        </S.TestimoniosTab>
      </S.TabContent>
      <Row xs={1} md={1} className="g-4">
        <S.ContainerVideos className="containerTabOne">
          <div className="video">
            {videos.map((video: any) => {
              return (
                <Card bg="dark" text="white">
                  <ReactPlayer controls width="100%" url={video.href} />
                  <Card.Body>
                    <Card.Title>{video.name}</Card.Title>
                    <Card.Text>
                        {video.name === "Importancia de estudiar Matemática" ? 
                          <>
                          <div className="quote">
                            <cite>
                              “{video.Description}». 
                            </cite>
                          </div>
                          <div>
                            <figcaption className="quote">
                              &mdash;<cite>Henri Poincaré</cite>  
                            </figcaption>
                          </div>
                          </>
                          :
                          video.Description
                          }
                    </Card.Text>



                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </S.ContainerVideos>
      </Row>



    </div>
  );
}

export default Testimonios;
