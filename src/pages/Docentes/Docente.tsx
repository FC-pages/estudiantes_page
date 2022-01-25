import fotomunguia from "../../images/fotomunguia.jpeg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHandPointRight, faPaperclip, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';


function Docente(props:any) {

  return (
      <div className="App-profes">
              <table cellPadding={8}> 
                  <tr>
                      <td className="App-profes-nom" colSpan={2}> <b>{ props.nombre }</b></td>                                
                  </tr>
                  <tr>
                      {/* <td className="App-profes-imagesm"></td>  */}
                      <td><img  src= { props.foto } /> </td>
                      <td className="App-profes-td">
                          <ul>
                              <li>E-mail: { props.email }</li>
                              {/* <li>Cursos asignados*: - </li> */}
                              <li>{ props.gradoAc } <a href={ props.dina }><FontAwesomeIcon className="icons2" icon={faFileAlt} /></a> </li>
                              <li>Áreas de interés: {props.areasDeInteres}</li>
                          </ul>
                      </td>
                  </tr>
              </table> 
          </div>


  );
}

export default Docente;
