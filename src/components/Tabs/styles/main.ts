import styled from 'styled-components';

const colors = {
  main: "#1d3557",
  red: "#e63946",
  blue2: "#4a5d79",
  blue3: "#457b9d",
}
export const Tabs = styled.div`

  ol{
      margin: -1px -16px 0px -16px;;
      font-size: 18px;
      text-align: left;
      //background-color: #1d3557;
      background-color: ${colors.blue2};
      color: white;
      cursor: pointer;
  }

  >div{  // Contenido

  }
`

export const Tab = styled.li<{active: boolean }>`

  font-size: ${props => ((props.active) ? "16px" : "0.9em")};
  display: inline-block;
  list-style: none;
  padding: 6px 10px;
  margin-top: 10px; 
  background: ${props => ((props.active) ? "white" : colors.blue2)};
  color: ${props => ((props.active) ? colors.red : "white")};
  border-radius: ${props => ((props.active) ? "10px 10px 0px 0px" : "10px 10px 0px 0px")};
  border-top: ${props => ((props.active) ? "1px solid white" : "0px solid white")};
  border-left: ${props => ((props.active) ? "1px solid white" : "0px solid white")};
  border-right: ${props => ((props.active) ? "1px solid white" : "0px solid white")};

  :hover {
    background:  ${props => ((props.active) ? "white" : colors.main)};
 }
/*
.tab-list-item {
  display: inline-block;
  list-style: none;
  padding: 0.8rem 2.25rem;
}

.tab-list-active {
  background-color: rgb(255, 255, 255);
  border-top:3px solid #1d3557;
  border-width: 3px 1px 0 1px;
  border-radius: 10px 10px 0px 0px;
  color: #1d3557;
  font-size: 20px;
}
*/
`
