import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Ejemplo2 from './components/Ejemplo2';
import Header from './layout/Header';
import * as S from './components/styles';
import RightNav from'./components/RightNav';
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";  // React Router


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [open, setOpen] = useState(false)
  const [home, setHome] = useState(true)
  return (
    <div className="App">
        <Header/>
        <S.StyledBurger open={open} onClick={() => setOpen(!open)} home = {home}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
          <RightNav open = {open} home = {true} />
  
    </div>
  );
}

export default App;
