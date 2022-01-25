import * as S from "../styles/styles";

import Home from "../pages/Home/Home";
import Descripcion from "../pages/Descripcion/Descripcion";
import FuturoEstudiante from "../pages/FuturoEstudiante/FuturoEstudiante";
import EstudiantesEgresadosPage from "../pages/estudiantes/EstudiantesEgresadosPage";
import EnlacesInteresPage from "../pages/EnlacesInteres/EnlacesInteresPage";
import Egresados from "../pages/Egresados";
import GruposInvestigacion from "../pages/GruposInvestigacion/GruposInvestigacion";
import routes from "../helpers/routes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

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
        <NavLink to={routes.gruposInvestigacion}>
          <li>Grupos de investigación</li>{" "}
        </NavLink>
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
        <Route
          path={routes.gruposInvestigacion}
          element={<GruposInvestigacion />}
        />
      </Routes>
    </Router>
  );
}

export default RightNav;
