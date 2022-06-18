import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import perfilImage from '../../images/perfil_black.png';
import { FaFileAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

function Docente(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reverse = (s: any) => {
    return s.split('').reverse().join('');
  };


  const getNameImage = ( nombresDocente: String) => {
    const removeAccents = (str: String) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 
    // Para obtener el primer nombre y el primer apellido
      
      let nombres = nombresDocente.split(",");
      let primernombre = nombres[1].split(" ")[1];
      //console.log(nombres[0].split(" "))
      // Profesora La Rosa
    //
    //
      let primerapellido = nombres[0] === "LA ROSA OBANDO" ? "La Rosa": nombres[0].split(" ")[0];
      let str = (primernombre +  "_" + primerapellido).toLowerCase().replace(/ /g, "");
      return 'docentes/'.concat(`${str}.jpg`);
  }


  let preventDragHandler = (e: any) => {
    e.preventDefault();
  };

  let titulos = ['Maestro', 'Maestra', 'Magíster', 'Doctor', 'Doctora', 'Ingeniero', 'Ingeniera']
  return (
    <div className="App-profes">

      <span className="borde">
        <table cellPadding={6}>
          <tbody>
            <tr>
              <td colSpan={2}>{props.nombre} </td>
            </tr>
            {/* <tr>
            <td className="App-profes-nom" colSpan={2}>
              <p>{props.nombre}</p>
            </td>
          </tr> */}
            <tr>
              {/* <td className="App-profes-imagesm"></td>  */}
              <td>
                <div className="cont-img">
                  <img alt="" src={props.foto ? process.env.REACT_APP_API_URL + "images/" + getNameImage( props.datos.nombres ) : perfilImage} />{' '}
                </div>
              </td>
              <td className="App-profes-td">
                <ul>
                  <li className="notnoselect">
                    <span className="tag">E-mail:</span>{' '}
                    <span className="correo-oculto">
                      {reverse(props.email).replace(/\s+/g, '')}
                    </span>
                  </li>
                  {/* <li>Cursos asignados*: - </li> */}
                  <li>
                    <span className="tag">Grado o Título:</span> {titulos.includes(props.datos.gradootitulo)? props.datos.gradootitulo:<></> }{' '}
                  </li>
                  <li>
                    <span className="tag">Línea de interés:</span>{' '}
                    {props.datos.lineas.toString().replace(/,/g,", ")}
                  </li>
                  {!props.datos.pagina && props.datos.ctivitae ? (
                    <li>
                      <span className="tag">CTI Vitae:</span>&nbsp;&nbsp;&nbsp;
                      <a className="a-link" href={props.dina}>
                        <FaFileAlt size={17} />
                      </a>{' '}
                    </li>
                  ) : (
                    <div />
                  )}
                  {props.datos.pagina ? (
                    <li>
                      <span className="tag">Página web:</span>&nbsp;&nbsp;&nbsp;
                      <a className="a-link" href={props.datos.pagina}>
                        <BiWorld size={17} />
                      </a>{' '}
                    </li>
                  ) : (
                    <div />
                  )}
                  <li className="resenia" onClick={handleShow}>
                    Reseña
           

                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </span>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="justificado">{props.resena}</p>
          <p className="justificado">
            <span className="fw-bold">Grados y títulos: </span>
            <span>{props.gradosAc}</span>
            <br />
            {props.datos.condicion ? (
              <>
                <span className="fw-bold"> Condicion: </span>{' '}
                <span> {props.datos.condicion}. </span>
              </>
            ) : (
              <span />
            )}
            <br />
            {props.datos.categoria ? (
              <>
                <span className="fw-bold"> Categoría: </span>{' '}
                <span> {props.datos.categoria}. </span>
              </>
            ) : (
              <span />
            )}
            <br />
            {props.datos.dedicacion ? (
              <>
                <span className="fw-bold"> Dedicación: </span>{' '}
                <span> {props.datos.dedicacion}. </span>
              </>
            ) : (
              <span />
            )}
            {props.datos.foto ? (
              <div className="img-modal">
                <img alt="" src={props.foto}></img>
              </div>
            ) : (
              <div />
            )}
          </p>
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
