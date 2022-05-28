import React, { FC, Fragment } from "react";
export default function Publicacion (props: any) {

  return (
      <>
      <h4 className="tit">{ props.pub.autores } { props.pub.titulo } <i> { props.pub.revista } {props.pub.volume}, {props.pub.issue} ({props.pub.anio}), {props.pub.pag}.</i></h4>
      <div className="container">
        <div className="itemLeft2">
          { props.pub.abstract }
          </div>
        <div className="itemRight2">
          <a href = { props.pub.src }>
            <img src= { props.pub.imagen } className="foto-publicaciones"></img>
          </a>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      </>
  )
}
