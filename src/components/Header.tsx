import "../App.css";

import * as S from "../styles/styles";

function Header() {
  return (
    <S.Header>
      <img alt="logo uni" src="logo-UNI-footer.png"></img>
      <div className="main">
        <div className="title">
          <div>
            <h1>Escuela Profesional de Matemática</h1>
            <h4>FC-UNI</h4>
          </div>
          <div className="line"></div>
        </div>

        <nav>
          {/*
            <ul>
                <li>
                  <NavLink to="/">INICIO</NavLink>
                </li>
                <li>
                  <NavLink to="/descripcion">DESCRIPCIÓN</NavLink>
                </li>
                <li>
                  <NavLink to="/futuro">FUTURO ESTUDIANTE</NavLink>
                </li>
                <li>
                  <NavLink to="/estudiantes">ESTUDIANTES</NavLink>
                </li>
                <li>
                  <NavLink to="/egresados">EGRESADOS</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto">CONTACTO</NavLink>
                </li>
              </ul>
            */}
        </nav>
      </div>
    </S.Header>
  );
}

export default Header;
