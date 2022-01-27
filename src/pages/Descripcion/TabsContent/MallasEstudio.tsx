import { Container } from "react-bootstrap";
import React from "react";

export default function MallasPage() {
  return (
    <Container className="text-start p-3">
      <p className="fw-bold fs-5">Mallas curriculares</p>
      <Container>
        <a className="a-link" href="./PLANMATEMATICA2018.pdf">
          Malla General
        </a>
        <p>Malla Análisi Numérico y Ecuaciones Diferenciales</p>
        <p>Malla Optimización y Control</p>
        <p>Malla Estadistica y Procesos Estocasticos</p>
      </Container>
      <p className="fw-bold fs-5">Plan de estudios</p>
      <Container>
        <p>Plan de Estudios Vigente</p>
      </Container>
    </Container>
  );
}