import * as S from "../styles/styles";

import Home from "../pages/Home/Home";
import Descripcion from "../pages/Descripcion/Descripcion";
import FuturoEstudiante from "../pages/FuturoEstudiante/FuturoEstudiante";
import routes from "../helpers/routes";

//import Servicios from '../ServicesComponent/Services';
//import Contact from '../ContactComponent/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import EstudiantesPage from "../pages/estudiantes/EstudiantesPage";

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
        <NavLink to="/">
          <li>Inicio</li>{" "}
        </NavLink>
        <NavLink to="/descripcion">
          <li>Descripción</li>{" "}
        </NavLink>
        <NavLink to="/futuro">
          <li>Futuro Estudiante</li>{" "}
        </NavLink>
        <NavLink to="/estudiantes">
          <li>Estudiantes</li>{" "}
        </NavLink>
        <NavLink to="/egresados">
          <li>Egresados</li>{" "}
        </NavLink>
        <NavLink to="/contacto">
          <li>Contacto</li>{" "}
        </NavLink>
      </S.Ul>

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.estudiantes} element={<EstudiantesPage />} />
        <Route path={routes.descripcion} element={<Descripcion />} />
        <Route path={routes.futuroEstudiante} element={<FuturoEstudiante />} />
      </Routes>
    </Router>
  );
}

export default RightNav;
