import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface INav {
  open: boolean;
  home: boolean;
  href?: string;
}

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  background: ${colors.main};
  position: absolute;
  width: 100%;
  top: 160px;
  justify-content: space-between;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 50px;
  padding: 0px 100px;
  /*margin-left: 150px;*/
  margin-right: 0px;
  z-index: 4;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    color: ${(props) => props.home ? 'white' : 'black'};
    cursor: pointer;

    &:hover {
      color: ${colors.azulTurquesa};
    }
  }

  li {
    padding: 18px 10px;
    font-size: 0.8em;
  }
      .active{
            //background: white;
            color: ${colors.azulTurquesa};// 
            //font-weight: bold;
          }

  .menu-desp{
    button {
      background: ${colors.main};
      border: 1px solid ${colors.main};
    }
    a {
      color: blue;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: ${colors.azulTurquesa};
      }
    }
  }
`

export const DropdownMenu = styled.div`
   position: relative;
   >li {
     color: white;

   }
   li:hover {
      //box-shadow: 0 0 0 .5rem rgba(225,83,97,.5);
   }
   >li::after {
    display: inline-block;
    content: "";
    margin-left: .255em;
    vertical-align: .255em;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;

   }

.arrow-up {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    vertical-align: .255em;
}

.arrow-down {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
}

   #dropdown-menu {
      position: absolute;
      display: none;
      background: ${colors.main};
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .255em;
      a {
        text-decoration: none;
        text-transform: none;
        color: #000;
        cursor: pointer;

        li {
          color: white;
          content: "";
          padding: 18px 10px;
          font-size: 0.8em;
            :hover {
              color: ${colors.azulTurquesa};
            }
        }
      }
   }
  :hover {
    #dropdown-menu {
      display: block;
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
