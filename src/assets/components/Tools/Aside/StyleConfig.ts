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
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.palette.white};
    margin: 7px 0;
    transition: opacity .3s;

    &:hover {
        opacity: .5;
    }

    > svg {
        font-size: 30px;
        margin-right: 5px;
    }
`;