import "./App.css";
import Header from "./components/Header";
import * as S from "./styles/styles";
import RightNav from "./components/RightNav/RightNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from './components/Footer/Footer';

function App() {
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState(true);
  return (
    <>
      <div className="App mb-5 pb-5">
        <Header />
        <S.StyledBurger open={open} onClick={() => setOpen(!open)} home={home}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
        <RightNav open={open} home={true}  setOpen = {setOpen} />
      </div>
    <Footer/>
    </>
  );
}

export default App;
