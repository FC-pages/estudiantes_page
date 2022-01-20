import "./App.css";
import Header from "./components/Header";
import * as S from "./styles/styles";
import RightNav from "./components/RightNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState(true);
  return (
    <div className="App">
      <Header />
      <S.StyledBurger open={open} onClick={() => setOpen(!open)} home={home}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} home={true} />
    </div>
  );
}

export default App;
