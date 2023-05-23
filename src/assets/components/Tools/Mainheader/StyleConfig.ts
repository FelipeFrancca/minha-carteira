import styled from "styled-components";
export const Container = styled.div`
    grid-area: MH;
    
    color: ${(props) => props.theme.palette.white};
    background-color: ${props => props.theme.palette.secondary};
    border-bottom: solid 3px ${props => props.theme.palette.gray};

    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const Profile = styled.div`
    
`;
export const Welcome = styled.h3`

`;

export const UserName = styled.span`

`;