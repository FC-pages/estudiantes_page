import * as S from "./styles";

import Home from "../../pages/Home/Home";
import Descripcion from "../../pages/Descripcion/DescripcionPage";
import FuturoEstudiante from "../../pages/FuturoEstudiante/FuturoEstudiantePage";
import AlumnosEgresadosPage from "../../pages/AlumnosYEgresados/AlumnosEgresadosPage";
import EnlacesInteresPage from "../../pages/EnlacesInteres/EnlacesInteresPage";
import DocentesTabs from "../../pages/Docentes/DocentesPage";
import Laboratorio from "../../pages/Laboratorio/LaboratorioPage";
//import GruposInvestigacion from "../../pages/LineasInvestigacion/GrupoOptimizacion";
import routes from "../../helpers/routes";
import Optimizacion from "../../pages/LineasInvestigacion/Optimizacion/Optimizacion";
import ANumerico from "../../pages/LineasInvestigacion/AnalisisNumerico/AnalisisNumerico";
import GruposInvestigacion from '../../pages/LineasInvestigacion/GruposInvestigacion';

import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ContactoPage from "../../pages/Contacto/ContactoPage";

function LineaInv1() {
  return <div>Linea de investigación 1</div>;
}
function LineaInv2() {
  return <Optimizacion></Optimizacion>;
}
function LineaInv3() {
  return <div>Linea de investigación 3</div>;
}
function LineaInv4() {
  return <div>Linea de investigación 4</div>;
}
function LineaInv5() {
  return <div>Linea de investigación 5</div>;
}
function LineaInv6() {
  return <ANumerico></ANumerico>;
}
type Props = {
  open: boolean;
  home: boolean;
};

function RightNav(props: any) {
  return (
    <MemoryRouter>
      <S.Ul open={props.open} home={props.home}>
        <S.LogoUl
          src="./logo-UNI-footer.png"
          alt={"Universidad Nacional de Ingeniería"}
        />
        <NavLink to={routes.home} onClick={() => props.setOpen(!props.open)}>
          <li>Inicio</li>{" "}
        </NavLink>
        <NavLink to={routes.descripcion} onClick={() => props.setOpen(!props.open)}>
          <li>Descripción</li>{" "}
        </NavLink>
        <NavLink to={routes.futuroEstudiante} onClick={() => props.setOpen(!props.open)}>
          <li>Futuro Estudiante</li>{" "}
        </NavLink>
        <NavLink to={routes.docentes} onClick={() => props.setOpen(!props.open)}>
          <li>Docentes</li>{" "}
        </NavLink>
        <NavLink to={routes.estudiantes_egresados} onClick={() => props.setOpen(!props.open)}>
          <li>Alumnos y egresados</li>{" "}
        </NavLink>
        <NavLink to="/GruposInvestigacion" onClick={() => props.setOpen(!props.open)}>
              <li>Líneas de investigación</li>{" "}
        </NavLink>
        <NavLink to={routes.laboratorio} onClick={() => props.setOpen(!props.open)}>
          <li>Laboratorio</li>{" "}
        </NavLink>
        <NavLink to={routes.enlacesInteres} onClick={() => props.setOpen(!props.open)}>
          <li>Enlaces de interes</li>{" "}
        </NavLink>
        <NavLink to={routes.contacto} onClick={() => props.setOpen(!props.open)}>
          <li>Contacto</li>{" "}
        </NavLink>
      </S.Ul>

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route
          path={routes.estudiantes_egresados}
          element={<AlumnosEgresadosPage />}
        />
        <Route path={routes.enlacesInteres} element={<EnlacesInteresPage />} />
        <Route path={routes.descripcion} element={<Descripcion />} />
        <Route path={routes.futuroEstudiante} element={<FuturoEstudiante />} />
        <Route
          path={routes.grupos_investigacion}
          element={<GruposInvestigacion />}
        />
        <Route path={routes.docentes} element={<DocentesTabs />} />
        <Route path="/linea_inv1" element={<LineaInv1 />} />
        <Route path="/linea_inv2" element={<LineaInv2 />} />
        <Route path="/linea_inv3" element={<LineaInv3 />} />
        <Route path="/linea_inv4" element={<LineaInv4 />} />
        <Route path="/linea_inv5" element={<LineaInv5 />} />
        <Route path="/linea_inv6" element={<LineaInv6 />} />
        <Route path="/GruposInvestigacion" element={< GruposInvestigacion/>} />
        <Route path={routes.laboratorio} element={<Laboratorio />} />
        <Route path={routes.contacto} element={<ContactoPage />} />
      </Routes>
    </MemoryRouter>
  );
}

export default RightNav;
