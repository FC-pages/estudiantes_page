import React from "react";
import { Container } from "react-bootstrap";
import NavigationEstudents from "./NavigationEstudents";

export default function Page1() {
  return (
    <>
      <NavigationEstudents />
      <Container className="text-start mt-3 p-3 border border-warning rounded-3">
        <p className="fw-bold fs-5 ">Mallas curriculares</p>
        <Container>
          <p>Malla General</p>
          <p>Malla Análisi Numérico y Ecuaciones Diferenciales</p>
          <p>Malla Optimización y Control</p>
          <p>Malla Estadistica y Procesos Estocasticos</p>
        </Container>
        <p className="fw-bold fs-5">Plan de estudios</p>
        <Container>
          <p>Plan de Estudios Vigente</p>
        </Container>
      </Container>
    </>
  );
}
