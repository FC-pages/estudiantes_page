import React from 'react';
import '../App.css';
import RightNav from '../components/RightNav';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


import * as S from '../components/styles';

import {
  NavLink
} from "react-router-dom";  // React Router


function Header() {

  return (
    <S.Header>
        <img src = "./logo-UNI-footer.png"></img>
        <div className = "line" >
        </div>
        <div className = "main">
          <div>
            <h1>Escuela Profesional de Matemática</h1>
            <h4>FC-UNI</h4>
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

