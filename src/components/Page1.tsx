import React from "react";
import { Container } from "react-bootstrap";

export default function Page1() {
  return (
    <Container className="mt-3 p-3 border border-warning rounded-3">
      <p className="fw-bold fs-5">Mallas curriculares</p>
      <p>Malla General</p>
      <p>Malla Análisi Numérico y Ecuaciones Diferenciales</p>
      <p>Malla Optimización y Control</p>
      <p>Malla Estadistica y Procesos Estocasticos</p>
      <p className="fw-bold fs-5">Plan de estudios</p>
      <p>Plan de Estudios Vigente</p>
    </Container>
  );
}
