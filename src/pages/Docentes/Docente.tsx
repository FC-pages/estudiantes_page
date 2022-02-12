import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function Docente(props: any) {
  const reverse = (s:any) =>{
      return s.split("").reverse().join("");
  }
  const titleCase = (str : String) =>  {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }

  const obtenernombreapellido = ( nombre :any) => {
    let nombres = nombre.split(",");
    let primernombre = nombres[1].split(" ")[1];
    let primerapellido = nombres[0].split(" ")[0];
    return titleCase(primernombre +  " " + primerapellido);
  }


  return (
    <div className="App-profes">
      <table cellPadding={8}>
        <tr>
          <td className="App-profes-nom" colSpan={2}>
            {" "}
            <b>{obtenernombreapellido(props.nombre)}</b>
          </td>
        </tr>
        <tr>
          {/* <td className="App-profes-imagesm"></td>  */}
          <td>
            <img alt="" src={props.foto} />{" "}
          </td>
          <td className="App-profes-td">
            <ul>
              <li>E-mail: <span className = "correo-oculto">{reverse(props.email)}</span></li>
              {/* <li>Cursos asignados*: - </li> */}
              <li>
                Grado académico: {props.gradoAc}{" "}
              </li>
              <li>Línea de interés: {props.areasDeInteres}</li>
              <li>C.V:&nbsp;&nbsp;&nbsp;   
                <a href={props.dina}>
                  <FontAwesomeIcon className="icons2" icon={faFileAlt} />
                </a>{" "}
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Docente;
