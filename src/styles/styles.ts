import styled from 'styled-components';
import imagenmate from '../images/imagenmate.png';
import { colors } from './colors';


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
    background-color: ${(props) => props.open || !props.home ? 'black' : 'black'};
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
  img {
    height: 390px;
  }
`;
export const Header = styled.header`
  background-color: #1D3557; /* #282c34 */
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
      background-image: url('${imagenmate}');
      background-size:cover; /* auto, cover, contained, 200px 200px*/;
  font-size: calc(10px + 2vmin);
  color: ${colors.main};
  max-height: 200x;   
  max-height: 200px;   
  img {
    height: 150px;
    padding: 0px 15px;
    position: absolute;
    top: 6px;
    z-index: 2;
  }

  .line {
    background: black;
    min-height: 10px;
    opacity: 50%;
    width: 100%;
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
    justify-content: center;
    .title{
      display: flex;
      flex-direction: column;
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
    margin-top: 50px;
    justify-content: space-around;
  }
`


export const Seccion = styled.section`
  height 390px;
  .eventos-seccion {
      
      border: 1px solid rgba(0,0,0,.125);
      background: #C4C4C4;
      min-height:  360px;
      max-height:  360px;
      overflow: auto;
      h3 {
        color: ${colors.main};
        padding-top: 20px;
      }
      .body-eventos {
        padding: 0px 3px;
      }

      .evento{
        display: flex;
        margin: 10px 5px;
        min-height: 80px;
      }
      
      .fecha-evento {
        font-size: 0.87em;
        background: #1d3557;
        color: white;
        font-weight: 500;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        max-width: 100px;
      }
      
      .descripcion {
        font-size: 0.97em;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 0px 10px;
        justify-content: center;
        a {
          color: ${colors.main};
          text-decoration: none;
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
        padding-top: 2px;
        background: #1d3557;
        color: white;
        height: 30px;
        :hover {
          cursor: pointer;
        }
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
