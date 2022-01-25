import styled from 'styled-components';
import imagenmate from '../images/imagenmate.png';

// theme is now fully typed
/*
const colors = {
  main: "#1d3557",
  red: "#e63946",
  blue2: "#4a5d79",
  blue3: "#457b9d",
}
*/
export const ContainerCarousel = styled.div`
  margin: 30px 0px;
  .caption-background {
    width: 100%;
    background-color:rgba(0, 0, 0, 0.5);
    right: 0;
    left: 0;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
export const Header = styled.header`
  background-color: #1D3557; /* #282c34 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  min-height: 210px;   
  img {
    height: 160px;
    padding: 0px 15px;
    position: absolute; 
    z-index: 2;
  }

  .line {
    background: black;
    min-height: 10px;
    opacity: 50%;
  }
  .main {

    /* background-repeat: no-repeat; repeat-x, repeat-y */
    /* background-position: center top ; */
    /* background: #f00, url('imagenmate.png') repear-y center bottom / 100px 100px; */
    /* margin:0pt; */
    /* position: relative; */
    vertical-align: middle;

    min-height: 210px;
    width: 100%;
    margin: 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
      display: flex;
      flex-direction: column;
      background-image: url('${imagenmate}');
      background-size:cover; /* auto, cover, contained, 200px 200px*/;
      min-height: 160px;
      justify-content: space-between;

      h1 {
        margin: 30px 0px 5px 0px;
      }
      h4 {
        margin: 0px 0px;
      }
    }
    nav{
      height: 50px;
      ul{
        height: 50px;
        list-style-type: none;
        font-size: 18px;
        display: flex;
        align-items: center;
        margin: 0px 45px;
        justify-content: space-between;
        li {
          height: 50px;
          .active{
            background: white;
            color: #1D3557;
            //font-weight: bold;
          }
          a {
            text-decoration: none;
            color: white;
            width: 100%;
            margin: 5px 0px;
            padding: 10px 15px;
            :hover{
              background: white;
              color: #1D3557;
            }
            
          }

        }

      }
  }
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
    .line {
      display: none;
    }
   nav{
     display: none;
         }

  .main{
    justify-content: space-around;
  }
`







interface INav {
  open: boolean;
  home: boolean;
  href?: string;
}
export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 45px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open || !props.home ? 'black' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`






export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 80%;
  top: 130px;
  justify-content: space-between;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 150px;
  margin-right: 0px;
  z-index: 4;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    color: ${(props) => props.home ? 'white' : 'black'};
    cursor: pointer;

    &:hover {
      color: #0DADEA;
    }
  }

  li {
    padding: 18px 10px;
    font-size: 0.8em;
  }
      .active{
            //background: white;
            color: #0dadea //#0DADEA azul claro
            //font-weight: bold;
          }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0DADEA;
      }
    }
  }
`

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`
export const Seccion = styled.div`
  .eventos-seccion {
      background: #C4C4C4;
      min-height:  400px;
      max-height:  400px;
      overflow: auto;
      h3 {
        padding-top: 25px;
        margin-bottom: 30px;
      }
      .body-eventos {
        padding: 0px 3px;
      }

      .evento{
        display: flex;
        margin: 10px 5px;
        min-height: 100px;
      }
      
      .fecha-evento {
        background: #1d3557;
        color: white;
        font-weight: bold;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        width: 34%;
      }
      .fecha-evento-pasado {
        background: #ba373c;
        color: white;
        font-weight: bold;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        width: 34%;
      }
      .descripcion {
        font-size: 16px;
        display: flex;
        align-items: center;
        margin: 0px 5px;
        width: 70%;
        justify-content: center;
        a {
          text-decoration: none;
          color: #142C68;
          :hover {
            color: #0DADEA;
          }
        }
      }

      @media (max-width: 768px) {
        margin-top: 30px;
      }
  }
      .footer-eventos {
        background: #1d3557;
        color: white;
      }

`
export const Icon = styled.div`
  width: 100vw;
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    pointer-events: none;
    object-fit: contain;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  }
`

export const ContainerVideos  = styled.div`
  width: 100%;
  .video {
    width: 100%;
  display: flex;
  flex-wrap: wrap;
    >div {
      width: 45%;
     margin: 50px 10px;
    }
  }

  @media (max-width: 1031px) {
    .video{
      >div {
        width: 100%;
      }
    }
  }
`

export const Subtitle  = styled.h2`
  margin-top: 20px;
  text-align: left;

`

/*
// theme is also fully typed
export MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

// and this theme is fully typed as well
export cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;
*/
