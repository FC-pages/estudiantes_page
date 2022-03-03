import React, { FC, Fragment, useState, useEffect } from 'react';
import '../../../styles/gInvestigacion.css';
import Miembro from '../Miembro';
import { Spinner } from 'react-bootstrap';
//import { miembrosEcuacionesDiferenciales } from '../../../data/data-miembros-Investigacion';

/*import CardMore from "../Components/CardMore";*/

const TabTwo: FC<{}> = () => {
  let nom_coordinador = 'METZGER ALVAN, ROGER JAVIER';
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

  type dataType = Array<any>;
  const [data, setData] = useState({} as dataType);
  const [coord, setCoord] = useState({} as any);
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
        //filtrando linea
        const newdata = data.docentes.filter((docente: any) => {
          for (let i = 0; i <= docente.lineas.length - 1; i++) {
            if (docente.nombres == nom_coordinador) {
              setCoord(docente);
              console.log("coordinador", docente)
              return false;
            }
            if (
              docente.lineas[i] ===
              'Ecuaciones Diferenciales y Sistemas Dinámicos'
            )
              return true;
          }
          return false;
        });
        setData(newdata);
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
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">
          Línea de Ecuaciones Diferenciales y Sistemas Dinámicos
        </h3>
      </div>
      <hr></hr>
      <h6>COORDINADOR</h6>
      <div className="App-center">
          {coord?<Miembro
                nombre={obtenernombreapellido(coord.nombres)}
                foto={coord.foto}
                correo={coord.emailuni}
                funcion={coord.funcion}
                gradoacd={coord.gradootitulo}
                cv={coord.ctivitae}
                pagina={coord.pagina}
              />:<></>}
      </div>
      <h6>DOCENTES</h6>
      <div className="App-center">
        {data
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
              <Miembro
                nombre={obtenernombreapellido(d.nombres)}
                foto={d.foto}
                correo={d.emailuni}
                funcion={d.funcion}
                gradoacd={d.gradootitulo}
                cv={d.ctivitae}
                pagina={d.pagina}
                key={id}
              />
            );
          })}
      </div>
    </Fragment>
  );
};
export default TabTwo;
