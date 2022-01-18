import ReactPlayer from 'react-player'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import * as S from './styles';
let { videos } = require('../data/data-videos.js'  );

export default function FuturoEstudiante() {
  return (
<Container>
  <S.Subtitle> Futuro Estudiante </S.Subtitle>
  <Row xs={1} md={2} className="g-4">
    <S.ContainerVideos>
      <div className = "video">

    {videos.map((video : any) => {
        return (

<Card bg = "dark" text = "white">

          <ReactPlayer width= "100%"  url={video.href}/>
  <Card.Body>
    <Card.Title>{video.name}</Card.Title>
    <Card.Text>
     {video.Description}
    </Card.Text>
  </Card.Body>
</Card>


        ) 
        })}
      </div>
    </S.ContainerVideos>
    
  </Row>
  
</Container>


  );
}
