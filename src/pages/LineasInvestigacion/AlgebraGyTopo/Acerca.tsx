import React, { FC, Fragment } from "react";
import "../../../styles/gInvestigacion.css";

const Acerca: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Álgebra, Geometría y Topología</h3>
        Las áreas de álgebra, geometría y topología proporcionan gran riqueza de conocimiento matemático. Muchos teoremas elegantes han sido inspirados por la visión algebraica, geométrica  y topológica. Los problemas y conjeturas más importantes de las matemáticas están, directa o indirectamente, interrelacionados con estas áreas; por ejemplo, la <a href="https://www.claymath.org/millennium-problems/poincar%C3%A9-conjecture" className="tit2">conjetura de Poincaré</a> (ahora teorema), la <a href="https://www.claymath.org/millennium-problems/hodge-conjecture" className="tit2">conjetura de Hodge</a> y la <a href="https://www.claymath.org/millennium-problems/birch-and-swinnerton-dyer-conjecture" className="tit2"> conjetura de Birch and Swinnerton-Dyer</a>. 
        <br/> <br/>
        El objetivo de nuestro equipo de investigación es consolidar un activo grupo de matemáticos jóvenes y experimentados con el fin de mantener activa la investigación matemática en la UNI y en el Perú.
        <br/>

            <a className="boxVisitar" href="https://sites.google.com/imca.edu.pe/gagt/home" target={"_blank"}>VISITAR SITIO WEB</a>
        
      </div>
      <hr></hr>
    </Fragment>
  );
};
export default Acerca;
