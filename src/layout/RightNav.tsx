import * as S from "../styles/styles";
//import Home from '';
import Home from "../components/Home/Home";
import Page1 from "../components/Estudiantes/Page1";
import Page2 from "../components/Estudiantes/Page2";
import App2 from "../components/Descripcion/Descripcion";
import FuturoEstudiante from '../components/FuturoEstudiante/FuturoEstudiante';

//import Servicios from '../ServicesComponent/Services';
//import Contact from '../ContactComponent/Contact';

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
          <Route path="/" element={<Home />} />
          <Route path="/estudiantes" element={<Page1 />} />
          <Route path="/estudiantes/Perfil_de_egreso" element={<Page2 />} />
          <Route path="/descripcion" element={<App2 />} />
          <Route path="/futuro" element={<FuturoEstudiante />} />
        <Route path="/menu2" >
         <></>
        </Route>
        <Route path="/menu3">
          <></>
        </Route>
        <Route path="/menu4">
          <></>
        </Route>
      </Routes>
    </Router>
  );
}

export default RightNav;
