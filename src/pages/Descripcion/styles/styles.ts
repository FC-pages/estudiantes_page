import styled from 'styled-components';
import { colors } from '../../../styles/colors';


export const ContainerPerfil = styled.div`
  text-align: justify;
  img {
    display: block;
    margin: 15px;
    width: 50%;
    margin-right: auto;
    margin-left: auto;
  }

  img {
    margin: 3px 10px;
  }
  #img-vidrio {
    float: right;
    max-width: 40%;
    width: 40%;
  }
  #img-optimizacion {
    max-width: 40%;
    width: 35%;
    float: left;
  }
  #img-profesores {
    margin-top: 90px;
    width: 100%;
  }

  @media (max-width: 768px) {
   #img-vidrio {
    float: right;
    max-width: 50%;
    width: 50%;
  }
  #img-optimizacion {
    max-width: 60%;
    width: 60%;
    float: left;
  }   
  }
`


