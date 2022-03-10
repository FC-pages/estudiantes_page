import React, { FC, Fragment, useState, useEffect } from 'react';
import '../../../styles/gInvestigacion.css';
import Miembro from '../Miembro';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';
import axios from 'axios';
//import { miembrosAlgebra } from '../../../data/data-miembros-Investigacion';

const TabTwo: FC<{}> = () => {
  //Importamos el token
  const { token } = useAuth();
  let nom_coordinador = 'PALACIOS BALDEÓN, JOE ALBINO';
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
  const [linea, setLinea] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          'api/v1/lineasinves/Álgebra Geometría y Topología',
        {
          headers: {
            'x-access-token': token,
          },
        }
      )
      .then((res: { data: any }) => {
        //Iteramos sobre los docentes miembros de de la linea de investigacion
        //y accedemos a su propiedad miembro que contiene los datos de cada docente

        const newdata = res.data.miembros.docentes.filter((docente: any) => {
            if (docente.miembro.nombres == nom_coordinador) {
              setCoord(docente);
              return false;
            }
            return true;
        });
        setLinea(newdata);

        //setLinea(res.data.miembros.docentes);
        
      })
      .catch((err: any) => console.error(err))
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
          Línea de Álgebra Geometría y Topología
        </h3>
      </div>
      <hr></hr>
      <h6>DOCENTES</h6>
      <div className="App-center">
        {coord ? (
          <Miembro
            nombre={obtenernombreapellido(coord.miembro.nombres) + ' (Coordinador)'}
            correo={coord.miembro.emailuni}
            foto={coord.miembro.foto}
            funcion={coord.miembro.funcion}
            gradoacd={coord.miembro.gradootitulo}
            cv={coord.miembro.ctivitae}
            pagina={coord.miembro.pagina}
          />
        ) : (
          <></>
        )}
        {linea&&linea.sort(function (a: any, b: any) {
            let valueA = obtenernombreapellido(a.miembro.nombres);
            let valueB = obtenernombreapellido(b.miembro.nombres);
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
                nombre={obtenernombreapellido(d.miembro.nombres)}
                foto={d.miembro.foto}
                correo={d.miembro.emailuni}
                funcion={d.miembro.funcion}
                gradoacd={d.miembro.gradootitulo}
                cv={d.miembro.ctivitae}
                pagina={d.miembro.pagina}
                key={id}
              />
            );
          })}
      </div>
    </Fragment>
  );
};
export default TabTwo;
