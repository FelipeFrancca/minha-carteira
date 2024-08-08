import styled from "styled-components";

export const StyleConfig = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.primary};
  padding: 2rem;
  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: ${props => props.theme.palette.primary};
}

::-webkit-scrollbar-track {
  background-color: ${props => props.theme.palette.tertiary};
}

`;
