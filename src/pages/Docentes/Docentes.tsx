import React, { useState, useEffect } from 'react';
import './styles.css';

import Docente from './Docente';
import { Container, Spinner } from 'react-bootstrap';

function Docentes() {
  let eliminarDiacriticos = (texto: any) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const obtenernombreapellido = (nombre: any) => {
    // Para obtener el primer nombre y el primer apellido
    const titleCase = (str: String) => {
      // Convierte un String a stilo Título
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    };
    let nombres = nombre.split(',');
    let primernombre = nombres[1].split(' ')[1];
    //console.log(nombres[0].split(" "))
    // Profesora La Rosa
    let primerapellido =
      nombres[0] === 'LA ROSA OBANDO' ? 'La Rosa' : nombres[0].split(' ')[0];
    return titleCase(primernombre + ' ' + primerapellido);
  };

  type dataType = {
    docentes: Array<any>;
  };
  const [data, setData] = useState({} as dataType);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=I1YFq5ffUUQ3azZIKONiHp1T3FVyvtcIAM3PfUefodo33h1SqqCuqz2yPAyw02N2o0EMelffpJYrsqhtsXWuCgzWtmVHBJOym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK9hLVD3Kt17yE6DQnI6BmZenSPmJECfh7vyjZJHKn1XgxmIEcEXJBraaCrdVp4vn9pytj_A4aoE&lib=MY1BW--6CseKPHKw9cdL87NwwPj3UkOcQ'
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        //console.log(data.docentes);
      })
      .catch((error) => {
        console.error('Error fetching', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let Loading = () => {
    return (
      <Spinner className="mt-5 mb-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };
  if (loading) return <Loading />;
  if (error) return <>"Error!"</>;

  return (
    <Container>
      <div className="App-cuerpo">
        <section className="App-center">
          {data === null ? (
            <div />
          ) : (
            data.docentes
              .sort(function (a: any, b: any) {
                let valueA = obtenernombreapellido(a.nombres);
                let valueB = obtenernombreapellido(b.nombres);
                valueA = eliminarDiacriticos(valueA);
                valueB = eliminarDiacriticos(valueB);

                let av = valueA.trim().toLowerCase();
                let bv = valueB.trim().toLowerCase();
                let r = av > bv ? 1 : av < bv ? -1 : 0;
                if (r === 0) {
                  r =
                    typeof a.key !== 'undefined' && typeof b.key !== 'undefined'
                      ? a.key - b.key
                      : 0;
                }
                return r;
              })
              .map((d: any, id: any) => {
                return (
                  <Docente
                    datos={d}
                    nombre={obtenernombreapellido(d.nombres)}
                    foto={d.foto}
                    email={d.emailuni}
                    gradoAc={d.gradootitulo}
                    gradosAc={d.gradosytitulos}
                    dina={d.ctivitae}
                    areasDeInteres={d.lineas}
                    resena={d.resena}
                    key={id}
                  />
                );
              })
          )}
        </section>
      </div>
    </Container>
  );
}

export default Docentes;
