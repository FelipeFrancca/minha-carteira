import styled from "styled-components";
export const StyleConfig = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.palette.secondary};
    border-right: solid 3px ${props => props.theme.palette.gray};
    padding: 20px 20px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h3`
color: ${(props) => props.theme.palette.white};
margin-left: 10px;
`;

export const Menu = styled.nav`
    margin-top: 100px;
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.palette.white};
`;