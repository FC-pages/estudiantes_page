import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function Docente(props: any) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reverse = (s:any) =>{
      return s.split("").reverse().join("");
  }
  

  const obtenerMayorGrado = ( gradosDocente :any) => {
  if (gradosDocente === undefined) return "";
  //Para obtener el mayor grado académico
    const grados = ["doctor", "maestro", "licenciado", "bachiller"]
    let gradosDocenteArray = []
    let words = gradosDocente.split(" ");
    let gradoString = [];
    for(let i = 0; i < words.length; i++){
      if(grados.includes(words[i].toLowerCase())){
          gradosDocenteArray.push(gradoString);
          gradoString = [];
          gradoString.push(words[i]);
      } else {
          gradoString.push(words[i]);
      }
      
    } 
    console.log(props.nombre, ": ", gradosDocenteArray);
  }
  obtenerMayorGrado(props.gradoAc);

  let preventDragHandler = (e:any) => {
    e.preventDefault();
  }


  return (
    <div className="App-profes">
      <table cellPadding={8}>
        <tr>
          <td className="App-profes-nom" colSpan={2}>
            {" "}
            <b>{props.nombre}</b>
          </td>
        </tr>
        <tr>
          {/* <td className="App-profes-imagesm"></td>  */}
          <td>
            <img alt="" src={props.foto} />{" "}
          </td>
          <td className="App-profes-td">
            <ul>
              <li className = "notnoselect"
              ><span className = "tag">E-mail:</span> <span className = "correo-oculto">{reverse(props.email)}</span></li>
              {/* <li>Cursos asignados*: - </li> */}
              <li>
                <span className = "tag">Grado o Título:</span> {props.gradoAc}{" "}
              </li>
              <li><span className = "tag">Línea de interés:</span> {props.areasDeInteres}</li>
              <li><span className = "tag">C.V:</span>&nbsp;&nbsp;&nbsp;   
                <a href={props.dina}>
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
                </a>{" "}
              </li>
              <li className = "resenia" onClick={handleShow} >
                Reseña

              </li>
            </ul>
          </td>
        </tr>
      </table>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.resena}
            <br/>
            <br/>
            <span className = "fw-bold">Grados y títulos: </span><span>{ props.gradosAc }</span>
            <img className = "mt-4 mx-auto d-block" width="75%" alt="" src={props.foto}></img>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default Docente;
