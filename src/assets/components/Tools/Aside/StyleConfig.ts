import styled from "styled-components";
export const StyleConfig = styled.div`
    grid-area: AS;
    color: ${(props) => props.theme.palette.white};
    background-color: ${props => props.theme.palette.secondary};
    border-right: solid 3px ${props => props.theme.palette.gray};
`;