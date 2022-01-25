import * as S from "../styles/styles";

import Home from "../pages/Home/Home";
import Descripcion from "../pages/Descripcion/Descripcion";
import FuturoEstudiante from "../pages/FuturoEstudiante/FuturoEstudiante";
import EstudiantesEgresadosPage from "../pages/estudiantes/EstudiantesEgresadosPage";
import EnlacesInteresPage from "../pages/EnlacesInteres/EnlacesInteresPage";
import Egresados from "../pages/Egresados";
import Docentes from "../pages/Docentes/Docentes";
import GruposInvestigacion from "../pages/GruposInvestigacion/GrupoOptimizacion";
import routes from "../helpers/routes";
import App from "../pages/GruposInvestigacion/App";


import { Dropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";


function LineaInv1() {
  return(
    <div>Linea de investigación 1</div>
  )
}
function LineaInv2() {
  return(
    <App></App>
  )
}
function LineaInv3() {
  return(
    <div>Linea de investigación 3</div>
  )
}
function LineaInv4() {
  return(
    <div>Linea de investigación 4</div>
  )
}
function LineaInv5() {
  return(
    <div>Linea de investigación 5</div>
  )
}
function LineaInv6() {
  return(
    <div>Linea de investigación 6</div>
  )
}
type Props = {
  open: boolean;
  home: boolean;
};

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open} home={props.home}>
        <S.LogoUl
          src="./logo-UNI-footer.png"
          alt={"Universidad Nacional de Ingeniería"}
        />
        <NavLink to={routes.home}>
          <li>Inicio</li>{" "}
        </NavLink>
        <NavLink to={routes.descripcion}>
          <li>Descripción</li>{" "}
        </NavLink>
        <NavLink to={routes.futuroEstudiante}>
          <li>Futuro Estudiante</li>{" "}
        </NavLink>
        <NavLink to={routes.docentes}>
          <li>Docentes</li>{" "}
        </NavLink>
        <NavLink to={routes.estudiantes_egresados}>
          <li>Estudiantes y egresados</li>{" "}
        </NavLink> 
        <Dropdown className = "menu-desp">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Grupos de investigación
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NavLink className = "dropdown-item" to="/linea_inv1">
              <li>Linea de Análisis y Teoría de Números</li>{" "}
            </NavLink>
            <NavLink className = "dropdown-item" to="/linea_inv2">
              <li>Línea de Optimización</li>{" "}
            </NavLink>
            <NavLink className = "dropdown-item" to = "/linea_inv3">
              <li>Línea de Álgebra, Geometría y Topología</li>{" "}
            </NavLink>
            <NavLink className = "dropdown-item" to="/linea_inv4">
              <li>Línea de Probabilidad y Procesos Estocásticos</li>{" "}
            </NavLink>
            <NavLink className = "dropdown-item" to="/linea_inv5">
              <li>Línea de Ecuaciones Diferenciales y Sistemas Dinámicos</li>{" "}
            </NavLink>
            <NavLink className = "dropdown-item" to="/linea_inv6">
              <li>Línea de Análisis Numérico</li>{" "}
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>

        <NavLink to={routes.enlacesInteres}>
          <li>Enlaces de interes</li>{" "}
        </NavLink>
        <NavLink to={routes.contacto}>
          <li>Contacto</li>{" "}
        </NavLink>
      </S.Ul>

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route
          path={routes.estudiantes_egresados}
          element={<EstudiantesEgresadosPage />}
        />
        <Route path={routes.enlacesInteres} element={<EnlacesInteresPage />} />
        <Route path={routes.descripcion} element={<Descripcion />} />
        <Route path={routes.futuroEstudiante} element={<FuturoEstudiante />} />
        <Route path={routes.egresados} element={<Egresados />} />
        <Route path= {routes.grupos_investigacion} element={<GruposInvestigacion />} />
        <Route path= {routes.docentes} element={<Docentes />} />
        <Route path= "/linea_inv1" element={<LineaInv1 />} />
        <Route path= "/linea_inv2" element={<LineaInv2/>} />
        <Route path= "/linea_inv3" element={<LineaInv3 />} />
        <Route path= "/linea_inv4" element={<LineaInv4 />} />
        <Route path= "/linea_inv5" element={<LineaInv5 />} />
        <Route path= "/linea_inv6" element={<LineaInv6 />} />
      </Routes>
    </Router>
  );
}

export default RightNav;
